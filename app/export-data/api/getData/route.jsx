import { NextResponse } from 'next/server';
import { ConnectionPool } from 'mssql';

const config = {
  user: process.env.DB_USER,         // safer to use environment variables
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,      // e.g., 'localhost' or an IP
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true, // for Azure; set false if using local dev
    trustServerCertificate: true, // required if local dev and no SSL
  },
};


export async function GET(request) {
  const pool = new ConnectionPool(config);
  const { searchParams } = new URL(request.url);
  const country = searchParams.get('country');

  try { 
    await pool.connect();

    // 🔹 You can run multiple queries like this
    const result = await pool.request().query(`
     Select * from countrydata where country='${country}' and datatype='export';
     select * from countryreport where datatype='export' and reportby='country' and country='${country}';
     select * from countryreport where datatype='export' and reportby='product' and country='${country}';
     select * from countryreport where datatype='export' and country='${country}' and reportby='Company name';
     

    `);

    return NextResponse.json({
      table1: result.recordsets[0], // First query result
      table2: result.recordsets[1],
      table3: result.recordsets[2], // Second query result
      table4: result.recordsets[3],
      
    });
  } catch (err) {
    console.error('❌ SQL ERROR:', err);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  } finally {
    pool.close();
  }
}
