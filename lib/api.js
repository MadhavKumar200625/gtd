import { ConnectionPool } from 'mssql';

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

const config1 = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE1,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export async function fetchCountryData(country) {
  const pool = new ConnectionPool(config);
  
  try {
    await pool.connect();
    
    const result = await pool.request().query(`
      SELECT * FROM countrydata WHERE country='${country}' AND datatype='import';
      SELECT * FROM countryreport WHERE datatype='import' AND reportby='country' AND country='${country}';
      SELECT * FROM countryreport WHERE datatype='import' AND reportby='product' AND country='${country}';
      SELECT * FROM countryreport WHERE datatype='import' AND country='${country}' AND reportby='Company name';
    `);

    return {
      table1: result.recordsets[0] || [],
      table2: result.recordsets[1] || [],
      table3: result.recordsets[2] || [],
      table4: result.recordsets[3] || [],
    };
    
  } catch (err) {
    console.error(result)
    console.error('Database error:', err);
    throw new Error('Failed to fetch country data');
  } finally {
    await pool.close();
  }
}

export async function getPageMeta_export(country) {
  const pool = new ConnectionPool(config1);
  try {
    await pool.connect();
    
    const result = await pool.request().query(`
        SELECT meta_title, meta_description
        FROM countrypage_content
        WHERE type = 'export' and country_name = '${country}'
      `);

    return result.recordset[0] || null;
  } catch (err) {
    console.error('DB Error:', err);
    return null;
  }
}

export async function getPageMeta_import(country) {
  const pool = new ConnectionPool(config1);
  try {
    await pool.connect();
    
    const result = await pool.request().query(`
        SELECT *
        FROM countrypage_content
        WHERE type = 'import' and country_name = '${country}'
      `);

    return result.recordset[0] || null;
  } catch (err) {
    console.error('DB Error:', err);
    return null;
  }
}