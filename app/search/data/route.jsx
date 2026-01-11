// app/api/data/route.js
import { NextResponse } from "next/server";
import { Connection, Request, TYPES } from "tedious";
import { getConnection } from "@/lib/db";

export async function POST(request) {
  const { table_name } = await request.json();

  return new Promise((resolve, reject) => {
    const connection = new Connection(getConnection);

    connection.on("connect", (err) => {
      if (err) {
        return reject(NextResponse.json({ error: err.message }, { status: 500 }));
      }

      const results = [];
      //const sql = `SELECT * FROM Products WHERE Country = @country AND TradeType = @tradeType`;
      const sql = `select * from mastertradecountry`;
      const req = new Request(sql, (err) => {
        if (err) {
          reject(NextResponse.json({ error: err.message }, { status: 500 }));
        } else {
          connection.close();
          resolve(NextResponse.json(results));
        }
      });

      // Add parameters safely
      req.addParameter("table_name", TYPES.NVarChar, table_name);
      //req.addParameter("tradeType", TYPES.NVarChar, tradeType);

      req.on("row", (columns) => {
        const row = {};
        columns.forEach((column) => {
          row[column.metadata.colName] = column.value;
        });
        results.push(row);
      });

      connection.execSql(req);
    });

    connection.connect();
  });
}
