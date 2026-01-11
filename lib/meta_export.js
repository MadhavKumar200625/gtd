import { ConnectionPool } from 'mssql';


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

export async function getPageMeta_export(pageSlug) {
  try {
    const pool = await sql.connect(config1);
    const result = await pool.request()
      .input('slug', sql.VarChar, pageSlug)
      .query(`
        SELECT meta_title, meta_description
        FROM countrypage_content
        WHERE type = 'export'
      `);

    return result.recordset[0] || null;
  } catch (err) {
    console.error('DB Error:', err);
    return null;
  }
}

export async function getPageMeta_import(pageSlug) {
  try {
    const pool = await sql.connect(config1);
    const result = await pool.request()
      .input('slug', sql.VarChar, pageSlug)
      .query(`
        SELECT meta_title, meta_description
        FROM countrypage_content
        WHERE type = 'import'
      `);

    return result.recordset[0] || null;
  } catch (err) {
    console.error('DB Error:', err);
    return null;
  }
}