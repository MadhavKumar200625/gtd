// lib/db-helper.js
import { getConnection } from '@/lib/db';

/**
 * Executes a SQL query with optional parameters.
 * @param {string} query - SQL query string
 * @param {object} [params={}] - Key-value pairs for SQL parameters
 * @returns {Promise<any>} - Query result
 */
export async function queryDatabase(query, params = {}) {
  try {
    const db = await getConnection();
    const request = db.request();

    // Add parameters safely
    for (const [key, value] of Object.entries(params)) {
      request.input(key, value);
    }

    const result = await request.query(query);
    return result.recordset;
  } catch (error) {
    console.error('Database Query Failed:', error);
    throw error;
  }
}
