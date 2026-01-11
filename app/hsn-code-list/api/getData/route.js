import { NextResponse } from 'next/server';
import sql from 'mssql';

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
  requestTimeout: 60000, // 60 seconds
  connectionTimeout: 30000 // 30 seconds
};

export async function GET() {
  try {
    const pool = await sql.connect(config);

    const table1result = await pool.request().query(`
      SELECT top 20 
        [HTS Number] as htsNumber,
        Description as description,
        [Additional Duties] as additionalDuties
      FROM usa
    `);

    const chapterListResult = await pool.request().query(`
      SELECT top 10 DISTINCT  
        LEFT(REPLACE([hts Number], '.', ''), 2) AS chapter, 
        (
          SELECT TOP 1 x.Description 
          FROM USA x 
          WHERE LEFT(REPLACE(x.[hts Number], '.', ''), 2) = LEFT(REPLACE(a.[hts Number], '.', ''), 2)
        ) AS description
      FROM usa a  
      WHERE LEN(REPLACE([HTS Number], '.', '')) = 4
      ORDER BY chapter
    `);

    

    return NextResponse.json({
      success: true,
      table1: table1result.recordset || [],
      chapterList: chapterListResult.recordset || [],
    });
  } catch (error) {
    console.error('SQL Error:', error); // Add logging
    return NextResponse.json({
      success: false,
      error: error.message,
    }, { status: 500 });
  }
}
