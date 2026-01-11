// app/api/country-data/route.js
import { queryDatabase } from '@/lib/db-helper';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const country = searchParams.get('country');
    
    if (!country) {
      return new Response(JSON.stringify({ error: 'Country parameter is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Format country name (replace hyphens with spaces and capitalize)
    const formattedCountry = country.replace(/-/g, ' ')
      .replace(/(^\w|\s\w)/g, m => m.toUpperCase());

    // Get total export value
    const exportQuery = `SELECT * FROM countrydata WHERE country=? AND datatype='export'`;
    const exportData = await queryDatabase(exportQuery, [formattedCountry]);
    
    if (exportData.length === 0) {
      return new Response(JSON.stringify({ error: 'Country not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const totalExport = exportData[0].totalvalues;

    // Get country report data
    const countryReportQuery = `SELECT * FROM countryreport WHERE datatype='export' AND reportby='country' AND country=?`;
    const countryReportData = await queryDatabase(countryReportQuery, [formattedCountry]);

    // Process country report data
    let topCountry = {};
    let countryNames = [];
    let countryValues = [];
    let countrySum = 0;

    if (countryReportData.length > 0) {
      topCountry = {
        name: countryReportData[0].name,
        value: countryReportData[0].value
      };

      countryReportData.forEach(row => {
        countryNames.push(row.name);
        
        let value;
        if (row.value.toLowerCase().includes('b')) {
          value = parseFloat(row.value.toLowerCase().replace('b', ''));
        } else {
          value = parseFloat(row.value.toLowerCase().replace('m', '')) / 1000;
        }
        
        countryValues.push(value);
        countrySum += value;
      });
    }

    // Get product report data
    const productReportQuery = `SELECT * FROM countryreport WHERE datatype='export' AND reportby='product' AND country=?`;
    const productReportData = await queryDatabase(productReportQuery, [formattedCountry]);

    // Process product report data
    let productNames = [];
    let productValues = [];
    let productSum = 0;
    let productsWithValues = [];

    if (productReportData.length > 0) {
      productReportData.forEach(row => {
        productNames.push(row.name);
        productsWithValues.push(`${row.name} ($${row.value})`);
        
        let value;
        if (row.value.toLowerCase().includes('b')) {
          value = parseFloat(row.value.toLowerCase().replace('b', ''));
        } else {
          value = parseFloat(row.value.toLowerCase().replace('m', '')) / 1000;
        }
        
        productValues.push(value);
        productSum += value;
      });
    }

    // Calculate percentages
    const totalExportNum = parseFloat(totalExport.replace(/[^0-9.]/g, ''));
    const countryAverage = countrySum > 0 ? Math.round((countrySum * 100) / totalExportNum) : 0;
    const productAverage = productSum > 0 ? Math.round((productSum * 100) / totalExportNum) : 0;

    return new Response(JSON.stringify({
      country: formattedCountry,
      totalExport,
      topCountry,
      countryNames,
      countryValues,
      countrySum,
      countryAverage,
      productNames,
      productValues,
      productSum,
      productAverage,
      productsWithValues
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Database Error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}