// File: app/search/[[...params]]/page.jsx
import ClientPage from './ClientPage';

// function decodeEncryptedText(encryptedText) {
//     try {
//       const decodedString = encryptedText;
//       const urlParams = new URLSearchParams(decodedString);
  
//       const product = urlParams.get('product') || '';
      
//       // Print product inside <h1> immediately after fetching it
//       const h1 = document.createElement('h1');
//       h1.textContent = `Product: ${product}`;
//       document.body.appendChild(h1);
  
//       return {
//         product,
//         hscode: urlParams.get('hscode') || '',
//         countryin: urlParams.get('countryin') || '',
//         port: urlParams.get('port') || '',
//       };
//     } catch (error) {
//       console.error('Error decoding encryptedText:', error);
//       return {};
//     }
//   }
  

function decodeEncryptedText(encryptedText) {
    try {
        const decodedString= encryptedText
      const urlParams = new URLSearchParams(decodedString);
      return {
        product: urlParams.get('product') || '',
        hscode: urlParams.get('hscode') ||'',
        countryin: urlParams.get('countryin') || '',
        port: urlParams.get('port') || '',
      };
    } catch (error) {
      console.error('Error decoding encryptedText:', error);
      return {
       
      };
    }
  }
//   function printParamsInH1(encryptedText) {
//     const params = decodeEncryptedText(encryptedText);
  
//     // Clear previous content (optional)
//     document.body.innerHTML = '';
  
//     // For each param, create an <h1> and add to the page
//     for (const [key, value] of Object.entries(params)) {
//       const h1 = document.createElement('h1');
//       h1.textContent = `${key}: ${value}`;
//       document.body.appendChild(h1);
//     }
//   }
//   printParamsInH1(encryptedText);
  
  

// function decodeEncryptedText(encryptedText) {
//   try {
//     const decodedString = atob(decodeURIComponent(encryptedText));
//     const urlParams = new URLSearchParams(decodedString);
//     return {
//       product: urlParams.get('product') || '',
//       hscode: urlParams.get('hscode') || '',
//       countryin: urlParams.get('countryin') || '',
//       port: urlParams.get('port') || '',
//     };
//   } catch (error) {
//     console.error('Error decoding encryptedText:', error);
//     return {};
//   }
// }

export async function generateMetadata({ params }) {
  const { country, type, encryptedText = [] } = params || {};
  //const { country, type, productA, hscodeA, countryinA, portA  } = params || {};

  //const { product, hscode, countryin, port } = decodeEncryptedText(encryptedText[0] || '');
  const paramsA = {};
  encryptedText.forEach(pair => {
    if(pair.startsWith("product-"))
    {
        paramsA["product"] = pair.replace("product-", "");
    }
    if(pair.startsWith("hs-"))
    {
    paramsA["hs"] = pair.replace("hs-", "");
    }
    if(pair.startsWith("countryin-"))
    {
        paramsA["countryin"] = pair.replace("countryin-", "");
    }
    if(pair.startsWith("port-"))
    {
    paramsA["port"] = pair.replace("port-", "");
    }
});

    const product = paramsA['product'] || '';
    const hscode = paramsA['hs'] || '';
    const countryin = paramsA['countryin'] || '';
    const port = paramsA['port'] || '';


  // Default metadata
  let title = `Search Global Trade Data by Country, HS Code & Product`;
  let description = `Explore global trade data by country, HS code, and product. Access detailed shipment records for market research.`;
  let keywords = ['global trade data', 'hs code', 'import export data', 'shipment records'];

  const lowerCountry = country?.replace(/-/g, ' ') || '';
  const tradeType = type?.toLowerCase();
  const product_a = product.replace('&', '&amp;');

  let hs_name = "HS Code";
  if(hscode.length == 2)
  {
    hs_name = "Chapter";
  }

    if (country != "" && product != "" && hscode == "" && type != "" && countryin == "" && port == "")
    {
        description = `Get detailed ${lowerCountry} ${tradeType} data for ${product_a}s with HS Code classification. Explore accurate trade records, shipment details, and ${tradeType} trends at GTD Service.`;
        title = `${lowerCountry} ${product_a} ${tradeType} Data | GTD Service Trade Insights`;
        keywords = `${lowerCountry} ${tradeType} data, ${product_a} ${tradeType} ${lowerCountry}, ${lowerCountry} trade data, HS Code ${product_a}s, GTD Service ${tradeType} records, ${product_a} ${tradeType} stats, ${lowerCountry} customs data`;
    }
    else if(country != "" && product == "" && hscode != "" && type != "" && countryin == "" && port == "")
    {
        description = `Explore ${lowerCountry}’s ${tradeType} data under ${hs_name} ${hscode}. Access shipment details, ${tradeType}ers list, and trade trends with GTD Service's accurate ${tradeType} records.`;
        title = `${lowerCountry} ${tradeType}s (${hs_name} ${hscode}) | GTD Service`;
        keywords = `${lowerCountry} ${tradeType} data, ${hs_name} ${hscode}, ${lowerCountry} ${tradeType} statistics, GTD Service ${tradeType} data`;
    }
    else if(country != "" && product == "" && hscode == "" && type != "" && countryin != "" && port == "")
        {
            if (tradeType.toLowerCase() == "import")
            {
                description = `Access detailed import data of ${lowerCountry} from ${countryin}. Analyze trade volume, shipment records, and customs data for smarter business decisions with GTD Service.`;
                title = `${lowerCountry} Imports from ${countryin} | Trade Data Insights | GTD Service`;
                keywords = `${lowerCountry} import data, ${countryin} to ${lowerCountry} trade, bilateral trade data, ${lowerCountry} customs records, GTD Service import stats, ${lowerCountry} ${countryin} trade relationship, shipment data ${lowerCountry}`;
            }
            else
            {
                description = `Access detailed export data of ${lowerCountry} to ${countryin}. Analyze trade volume, shipment records, and customs data for smarter business decisions with GTD Service.`;
                title = `${lowerCountry} Exports to ${countryin} | Trade Data Insights | GTD Service`;
                keywords = `${lowerCountry} export data, ${countryin} to ${lowerCountry} trade, bilateral trade data, ${lowerCountry} customs records, GTD Service export stats, ${lowerCountry} ${countryin} trade relationship, shipment data ${lowerCountry}`;
            }
        }
    else if(country != "" && product == "" && hscode == "" && type != "" && countryin == "" && port != "")
        {
            if (tradeType.toLowerCase() == "import")
            {
                description = `Explore ${lowerCountry}'s import data from ${port} Port. View shipment records, exporters, and trade trends with accurate customs data provided by GTD Service.`;
                title = `${lowerCountry} Imports via ${port} Port | Import Data by GTD Service`;
                keywords = `${lowerCountry} import data, ${port} port imports, ${lowerCountry} trade statistics, GTD Service import records, customs data ${lowerCountry}, ${lowerCountry} shipment data, import trends ${lowerCountry}, port-wise import data`;
            }
            else
            {
                description = `Explore ${lowerCountry}'s export data from ${port} Port. View shipment records, exporters, and trade trends with accurate customs data provided by GTD Service.`;
                title = `${lowerCountry} Exports via ${port} Port | Export Data by GTD Service`;
                keywords = `${lowerCountry} export data, ${port} port exports, ${lowerCountry} trade statistics, GTD Service export records, customs data ${lowerCountry}, ${lowerCountry} shipment data, export trends ${lowerCountry}, port-wise export data`;
            }
        }
    else if(country != "" && product != "" && hscode != "" && type != "" && countryin == "" && port == "")
        {
            if (tradeType.toLowerCase() == "import")
            {
                description = `Access ${lowerCountry}’s Import data for ${product_a} products under ${hs_name} ${hscode}. View detailed customs records, shipment info, and exporter data with GTD Service.`;
                title = `${product_a} Import in ${lowerCountry} of (${hs_name} ${hscode}) | GTD Service`;
                keywords = `${lowerCountry} import data, ${hs_name} ${hscode}, ${product_a} imports ${lowerCountry}, GTD Service trade records, ${lowerCountry} shipment data, import statistics ${product_a}`;
            }
            else
            {
                description = `Access ${lowerCountry}’s export data for ${product_a} products under ${hs_name} ${hscode}. View detailed customs records, shipment info, and exporter data with GTD Service.`;
                title = `${product_a} Export from ${lowerCountry} of (${hs_name} ${hscode}) | GTD Service`;
                keywords = `${lowerCountry} export data, ${hs_name} ${hscode}, ${product_a} export ${lowerCountry}, GTD Service trade records, ${lowerCountry} shipment data, export statistics ${product_a}`;
            }
        }
    else if(country != "" && product != "" && hscode == "" && type != "" && countryin != "" && port == "")
        {
            if (tradeType.toLowerCase() == "import")
            {
                description = `Explore detailed import data of ${product_a}s from ${countryin} to ${lowerCountry}. Access customs records, shipment volumes, and trade insights with GTD Service’s verified import data.`;
                title = `${lowerCountry} ${product_a} Imports from ${countryin} | Trade Data by GTD Service`;
                keywords = `${lowerCountry} import data, ${product_a} imports from ${countryin}, ${countryin} to ${lowerCountry} trade, ${lowerCountry} customs data, GTD Service trade records, HS Code ${product_a} ${lowerCountry}`;
            }
            else
            {
                description = `Explore detailed export data of ${product_a}s from ${lowerCountry} to ${countryin}. Access customs records, shipment volumes, and trade insights with GTD Service’s verified import data.`;
                title = `${lowerCountry} ${product_a} Export to ${countryin} | Trade Data by GTD Service`;
                keywords = `${lowerCountry} export data, ${product_a} exports to ${countryin}, ${lowerCountry} to ${countryin} trade, ${lowerCountry} customs data, GTD Service trade records, HS Code ${product_a} ${lowerCountry}`;
            }
        }
    else if(country != "" && product != "" && hscode == "" && type != "" && countryin == "" && port != "")
        {
            if (tradeType.toLowerCase() == "import")
            {
                description = `View ${lowerCountry}’s import data for ${product_a}s shipped via ${port}. Access verified shipment details, importer info, and trade volumes on GTD Service.`;
                title = `${lowerCountry} ${product_a} Imports via ${port} | GTD Service`;
                keywords = `${lowerCountry} import data, ${product_a} imports ${lowerCountry}, ${port} imports, GTD Service trade data, customs data ${lowerCountry}`;
            }
            else
            {
                description = `View ${lowerCountry}’s export data for ${product_a}s shipped via ${port}. Access verified shipment details, exporter info, and trade volumes on GTD Service.`;
                title = `${lowerCountry} ${product_a} Exports via ${port} | GTD Service`;
                keywords = `${lowerCountry} export data, ${product_a} exports ${lowerCountry}, ${port} exports, GTD Service trade data, customs data ${lowerCountry}`;
            }
        }
    else if(country != "" && product == "" && hscode != "" && type != "" && countryin != "" && port == "")
        {
            if (tradeType.toLowerCase() == "import")
            {
                description = `Explore ${lowerCountry}’s import data of (${hs_name} ${hscode}) from ${countryin}. Get shipment records, importer details, and trade insights with GTD Service.`;
                title = `${lowerCountry} Imports (${hs_name} ${hscode}) from ${countryin} | GTD Service`;
                keywords = `${lowerCountry} import data, ${hs_name} ${hscode}, ${countryin} to ${lowerCountry} trade, GTD Service trade records, ${lowerCountry} customs data`;
            }
            else
            {
                description = `Explore ${lowerCountry}’s export data of (${hs_name} ${hscode}) to ${countryin}. Get shipment records, exporter details, and trade insights with GTD Service.`;
                title = `${lowerCountry} Exports (${hs_name} ${hscode}) to ${countryin} | GTD Service`;
                keywords = `${lowerCountry} export data, ${hs_name} ${hscode}, ${lowerCountry} to ${countryin} trade, GTD Service trade records, ${lowerCountry} customs data`;
            }
        }
    else if(country != "" && product != "" && hscode != "" && type != "" && countryin != "" && port == "")
        {
            if (tradeType.toLowerCase() == "import")
            {
                description = `Access detailed ${lowerCountry} import data of ${product_a}s from ${countryin} under ${hs_name} ${hscode}. Get shipment records, importer details, and trade insights with GTD Service.`;
                title = `${product_a} Imports in ${lowerCountry} under (${hs_name} ${hscode}) from ${countryin} | GTD Service `;
                keywords = `${lowerCountry} import data, ${product_a} imports ${lowerCountry}, ${hs_name} ${hscode}, ${countryin} to ${lowerCountry} electronics trade, GTD Service shipment data, customs records ${lowerCountry}`;
            }
            else
            {
                description = `Access detailed ${lowerCountry} export data of ${product_a}s to ${countryin} under HS ${hs_name} ${hscode}. Get shipment records, exporter details, and trade insights with GTD Service.`;
                title = `${product_a} Exports from ${lowerCountry} under (${hs_name} ${hscode}) to ${countryin} | GTD Service `;
                keywords = `${lowerCountry} export data, ${product_a} exports ${lowerCountry}, ${hs_name} ${hscode}, ${lowerCountry} to ${countryin} electronics trade, GTD Service shipment data, customs records ${lowerCountry}`;
            }
        }
    else if(country != "" && product == "" && hscode == "" && type != "" && countryin != "" && port != "")
        {
            if (tradeType.toLowerCase() == "import")
            {
                description = `Explore ${lowerCountry}’s import data from ${countryin} through ${port} Port. Access detailed shipment records, importer information, and trade statistics with GTD Service.`;
                title = `${lowerCountry} Imports from ${countryin} via ${port} Port | GTD Service Trade Data`;
                keywords = `${lowerCountry} import data, ${port} port imports, ${countryin} to ${lowerCountry} trade, GTD Service customs data, ${lowerCountry} ${countryin} shipments, port-wise import stats, importers in ${lowerCountry}, ${countryin} port trade records`;
            }
            else
            {
                description = `Explore ${lowerCountry}’s export data to ${countryin} through ${port} Port. Access detailed shipment records, exporter information, and trade statistics with GTD Service.`;
                title = `${lowerCountry} Exports to ${countryin} via ${port} Port | GTD Service Trade Data`;
                keywords = `${lowerCountry} export data, ${port} port exports, ${lowerCountry} to ${countryin} trade, GTD Service customs data, ${lowerCountry} ${countryin} shipments, port-wise export stats, exporters in ${lowerCountry}, ${countryin} port trade records`;
            }
        }
    else if(country != "" && product != "" && hscode != "" && type != "" && countryin == "" && port != "")
        {
            if (tradeType.toLowerCase() == "import")
            {
                description = `Get detailed ${lowerCountry} import data of ${product_a}s (${hs_name} ${hscode}) shipped through ${port}. Access shipment details, customs info, and trade insights with GTD Service.`;
                title = `${product_a} Imports in ${lowerCountry} via ${port} (${hs_name} ${hscode}) | GTD Service`;
                keywords = `${lowerCountry} import data, ${product_a} imports ${lowerCountry}, ${hs_name} ${hscode}, ${port} imports, GTD Service import records, customs data ${lowerCountry}`;
            }
            else
            {
                description = `Get detailed ${lowerCountry} export data of ${product_a}s (${hs_name} ${hscode}) shipped through ${port}. Access shipment details, customs info, and trade insights with GTD Service.`;
                title = `${product_a} Exports from ${lowerCountry} via ${port} (${hs_name} ${hscode}) | GTD Service`;
                keywords = `${lowerCountry} export data, ${product_a} exports ${lowerCountry}, ${hs_name} ${hscode}, ${port} exports, GTD Service export records, customs data ${lowerCountry}`;
            }
        }
    else if(country != "" && product != "" && hscode == "" && type != "" && countryin != "" && port != "")
        {
            if (tradeType.toLowerCase() == "import")
            {
                description = `Explore ${lowerCountry}’s ${product} import data from ${countryin} via ${port} Port. Access detailed shipment records, importer info, and trade insights with GTD Service.`;
                title = `${lowerCountry} ${product} Imports from ${countryin} via ${port} Port | GTD Service`;
                keywords = `${lowerCountry} import data, ${product} imports ${lowerCountry}, ${port} Port imports, ${countryin} to ${lowerCountry} trade, GTD Service customs data`;
            }
            else
            {
                description = `Explore ${lowerCountry}’s ${product} export data to ${countryin} via ${port} Port. Access detailed shipment records, exporter info, and trade insights with GTD Service.`;
                title = `${lowerCountry} ${product} Exports to ${countryin} via ${port} Port | GTD Service`;
                keywords = `${lowerCountry} export data, ${port} Port exports, ${lowerCountry} trade, GTD Service customs data`;
            }
        }
    else if(country != "" && product == "" && hscode != "" && type != "" && countryin != "" && port != "")
        {
            if (tradeType.toLowerCase() == "import")
            {
                description = `Explore detailed import data of (${hs_name} ${hscode}) from ${countryin} to ${lowerCountry} through ${port} Port. Get shipment details, customs info, and trade insights with GTD Service.`;
                title = `${lowerCountry} Imports of (${hs_name} ${hscode}) from ${countryin} via ${port} | GTD Service`;
                keywords = `${lowerCountry} import data, (${hs_name} ${hscode}), ${countryin} to ${lowerCountry} electronics trade, ${port} Port shipments, GTD Service trade data, customs import records`;
            }
            else
            {
                description = `Explore detailed export data of (${hs_name} ${hscode}) from ${lowerCountry} to ${countryin} through ${port} Port. Get shipment details, customs info, and trade insights with GTD Service.`;
                title = `${lowerCountry} Exports of (${hs_name} ${hscode}) to ${countryin} via ${port} | GTD Service`;
                keywords = `${lowerCountry} export data, ${hs_name} ${hscode}, ${lowerCountry} to ${countryin} electronics trade, ${port} Port shipments, GTD Service trade data, customs export records`;
            }
        }
    else if(country != "" && product != "" && hscode != "" && type != "" && countryin != "" && port != "")
        {
            if (tradeType.toLowerCase() == "import")
            {
                description = `Access detailed import data of ${product_a}s (${hs_name} ${hscode}) from ${countryin} to ${lowerCountry} via ${port} Port. Explore shipment records, customs details, and trade insights on GTD Service.`;
                title = `${lowerCountry} ${product_a} (${hs_name} ${hscode}) Imports from ${countryin} via ${port} Port | GTD Service`;
                keywords = `${lowerCountry} import data, ${product_a} imports ${lowerCountry}, ${hs_name} ${hscode}, ${port} Port imports, ${countryin} to ${lowerCountry} trade, GTD Service customs data`;
            }
            else
            {
                description = `Access detailed export data of ${product_a}s (${hs_name} ${hscode}) from ${lowerCountry} to ${countryin} via ${port} Port. Explore shipment records, customs details, and trade insights on GTD Service.`;
                title = `${lowerCountry} ${product_a} (${hs_name} ${hscode}) Exports to ${countryin} via ${port} Port | GTD Service`;
                keywords = `${lowerCountry} export data, ${product_a} export ${lowerCountry}, ${hs_name} ${hscode}, ${port} Port exports, ${lowerCountry} to ${countryin} trade, GTD Service customs data`;
            }
        }


//   // Handle conditional SEO logic
//   if (country == "0" && product == "" && hscode == "" && type == "" && countryin == "" && port == "")
//     {
//         if (tradeType.toLowerCase() == "import")
//         {
//             description = "Search HS code online by product name at Global Trade Data, GTD Service helps international traders to find harmonized system code and HSN code of products for trading.";
//             title = "Search HS Codes by Product Name - Search USA HS Code";
//         }
//         else
//         {
//             description = "Search HS code online by product name at Global Trade Data, GTD Service helps international traders to find harmonized system code and HSN code of products for trading.";
//             title = "Search HS Codes by Product Name - Search USA HS Code";
//         }
//     }
//     //2.http://localhost:55333/search/country-{R:1}/type-{R:2}/product-{R:3}
//     if (country != "0" && product == "" && hscode == "" && type != "" && countryin == "" && port == "")
//     {
//         if (tradeType.toLowerCase() == "import")
//         {
//             if (lowerCountry.toLowerCase() == "usa")
//             {
//                 description = `Get detailed ${lowerCountry} import data for ${product_a} with HS Code classification. Explore accurate trade records, shipment details, and import trends at GTD Service.`;
//                 title = `${lowerCountry} ${product_a} Import Data | GTD Service Trade Insights`;
//             }
//             else
//             {
//                 description = `Get detailed ${lowerCountry} export data for ${product_a} with HS Code classification. Explore accurate trade records, shipment details, and export trends at GTD Service.`;
//                 title = `${lowerCountry} ${product_a} Export Data | GTD Service Trade Insights`;
//             }
//         }
//         else
//         {
//             if (lowerCountry.toLowerCase() == "usa")
//             {
//                 description = `Get the latest records of USA  ${tradeType}  Data, India Trade Data, USA import custom database, USA ports import shipment data and customs data of USA  ${tradeType} .`;
//                 title = `Latest Import Data | USA Buyers Details | USA Global Trade Data Service`;
//             }
//             else
//             {
//                 description = `Get the latest records of  ${lowerCountry}  ${tradeType} Data,   ${lowerCountry}  Trade Data,  ${lowerCountry}  ${tradeType} custom database,  ${lowerCountry}  ports  ${tradeType}  shipment data and customs data of  ${lowerCountry}  ${tradeType}.`;
//                 title = `Latest ${tradeType} Data | " ${lowerCountry}  " ${tradeType} Details |   ${lowerCountry}   GTD Service`;
//             }
//         }
//     }
//     //3.http://localhost:55333/search/country-{R:1}/type-{R:2}/hscode-{R:3}
//     if (country != "0" && product != "" && hscode == "" && type != "" && countryin == "" && port == "")
//     {
//         if (tradeType.toLowerCase() == "import")
//         {
//             title = `${lowerCountry} ${product_a} Imports (HS Code ${hscode}) | GTD Service`;
//             description = `Explore ${lowerCountry} import data for steel structures under HS Code ${hscode}. Access shipment details, exporters list, and trade trends with GTDService's accurate import records.`;
//             keywords = `${lowerCountry} import data, HS Code ${hscode}, ${product_a} imports, iron structure trade, ${lowerCountry} import statistics, GTDService import data, metal structure trade data, construction material imports`;
            
//         }
//         else
//         {
//             title = `${lowerCountry} ${product_a} Exports (HS Code ${hscode}) | GTD Service`;
//             description = `Explore ${lowerCountry} export data for ${product_a} under HS Code ${hscode}. Access shipment details, exporters list, and trade trends with GTDService's accurate export records.`;
//             keywords = `${lowerCountry} export data, HS Code ${hscode}, ${product_a} exports, iron structure trade, ${lowerCountry} export statistics, GTDService export data, metal structure trade data, construction material exports`;
//         }
//     }
//     //4.http://localhost:55333/search/country-{R:1}/type-{R:2}/countryin-{R:3}
//     if (country != "0" && product == "" && hscode != "" && type != "" && countryin == "" && port == "")
//     {
//         if (tradeType.toLowerCase() == "import")
//         {
//             title = `${lowerCountry} Imports from ${countryin} | Trade Data Insights | GTD Service`;
//             description = `Access detailed import data of ${lowerCountry} from ${countryin}. Analyze trade volume, shipment records, and customs data for smarter business decisions with GTD Service.`;
//             keywords = `${lowerCountry} import data, ${countryin} to ${lowerCountry} trade, bilateral trade data, ${lowerCountry} customs records, GTD Service import stats, ${lowerCountry} ${countryin} trade relationship, shipment data ${lowerCountry}`;
//         }
//         else
//         {
//             title = `${lowerCountry} Exports from ${countryin} | Trade Data Insights | GTD Service`;
//             description = `Access detailed export data of ${lowerCountry} from ${countryin}. Analyze trade volume, shipment records, and customs data for smarter business decisions with GTD Service.`;
//             keywords = `${lowerCountry} export data, ${countryin} to ${lowerCountry} trade, bilateral trade data, ${lowerCountry} customs records, GTD Service export stats, ${lowerCountry} ${countryin} trade relationship, shipment data ${lowerCountry}`;
//         }
//     }
//     //5.http://localhost:55333/search/country-{R:1}/type-{R:2}/port-{R:3}
//     if (country != "0" && product == "" && hscode == "" && type != "" && countryin != "" && port == "")
//     {
//         if (tradeType.toLowerCase() == "import")
//         {
//             description = `Explore ${lowerCountry} import data from ${port} Port. View shipment records, importers, and trade trends with accurate customs data provided by GTD Service.`;
//             title = `${lowerCountry} Imports via ${port} Port | Import Data by GTD Service`;
//         }
//         else
//         {
//             description = `Explore ${lowerCountry} export data from ${port} Port. View shipment records, exporters, and trade trends with accurate customs data provided by GTD Service.`;
//             title = ` ${lowerCountry} Exports via ${port} Port | Export Data by GTD Service`;
//         }
//     }
//     //6.http://localhost:55333/search/country-{R:1}/type-{R:2}/product-{R:3}/hscode-{R:4}
//     if (country != "0" && product == "" && hscode == "" && type != "" && countryin == "" && port != "")
//     {
//         if (tradeType.toLowerCase() == "import")
//         {
//             description = `Access ${lowerCountry} import data for ${product_a} products under HS Code ${hscode}. View detailed customs records, shipment info, and importer data with GTD Service.`;
//             title = ` ${lowerCountry} Import Data for ${product_a} (HS Code ${hscode}) | GTD Service`;
//         }
//         else
//         {
//             description = `Access ${lowerCountry} export data for ${product_a} products under HS Code ${hscode}. View detailed customs records, shipment info, and exporter data with GTD Service.`;
//             title = ` ${lowerCountry} Export Data for ${product_a} (HS Code ${hscode}) | GTD Service`;
//         }
//     }
//     //7.http://localhost:55333/search/country-{R:1}/type-{R:2}/product-{R:3}/countryin-{R:4}
//     if (country != "0" && product != "" && hscode != "" && type != "" && countryin == "" && port == "")
//     {
//         if (tradeType.toLowerCase() == "import")
//         {
//             title = `${lowerCountry} ${product_a} Imports from  ${countryin} | Trade Data by GTD Service `;
//             description = `Explore detailed import data of ${product_a} from ${countryin} to ${lowerCountry}. Access customs records, shipment volumes, and trade insights with GTD Service’s verified import data.`;
//             keywords = `${lowerCountry} import data, ${product_a} imports from ${countryin}, ${countryin} to ${lowerCountry} trade, ${lowerCountry} customs data, GTD Service trade records, HS Code ${product_a} ${lowerCountry}`;
//         }
//         else
//         {
//             title = `${lowerCountry} ${product_a} Exports from  ${countryin} | Trade Data by GTD Service `;
//             description = `Explore detailed export data of ${product_a} from ${countryin} to ${lowerCountry}. Access customs records, shipment volumes, and trade insights with GTD Service’s verified export data.`;
//             keywords = `${lowerCountry} export data, ${product_a} exports from ${countryin}, ${countryin} to ${lowerCountry} trade, ${lowerCountry} customs data, GTD Service trade records, HS Code ${product_a} ${lowerCountry}`;
//         }
//     }
//     //8.http://localhost:55333/search/country-{R:1}/type-{R:2}/product-{R:3}/port-{R:4}
//     if (country != "0" && product != "" && hscode == "" && type != "" && countryin != "" && port == "")
//     {
//         if (tradeType.toLowerCase() == "import")
//         {
//             title = `${lowerCountry} ${product_a} Imports via ${port} | GTD Service `;
//             description = `View ${lowerCountry} import data for ${product_a} shipped via ${port}. Access verified shipment details, importer info, and trade volumes on GTD Service.`;
//             keywords = `${lowerCountry} import data, ${product_a} imports ${lowerCountry}, ${port} imports, GTD Service trade data, customs data ${lowerCountry}`;
//         }
//         else
//         {
//             title = `${lowerCountry} ${product_a} Exports via ${port} | GTD Service `;
//             description = `View ${lowerCountry} export data for ${product_a} shipped via ${port}. Access verified shipment details, exporter info, and trade volumes on GTD Service.`;
//             keywords = `${lowerCountry} export data, ${product_a} exports ${lowerCountry}, ${port} exports, GTD Service trade data, customs data ${lowerCountry}`;
//         }
//     }
//     // 9.http://localhost:55333/search/country-{R:1}/type-{R:2}/hscode-{R:3}/countryin-{R:4}
//     if (country != "0" && product != "" && hscode == "" && type != "" && countryin == "" && port != "")
//     {
//         if (tradeType.toLowerCase() == "import")
//         {
//             title = ` ${lowerCountry} Imports of ${product_a} (HS ${hscode}) from ${countryin} | GTD Service`;
//             description = `Explore ${lowerCountry} import data of rubber inner tubes for ${product_a} (HS Code ${hscode}) from ${countryin}. Get shipment records, importer details, and trade insights with GTD Service.`;
//             keywords = `${lowerCountry} import data, HS Code ${hscode}, ${product_a} imports, ${countryin} to ${lowerCountry} trade, GTD Service trade records, ${lowerCountry} customs data`;
//         }
//         else
//         {

//             title = `${lowerCountry} Exports of ${product_a} (HS ${hscode}) from ${countryin} | GTD Service`;
//             description = `Explore ${lowerCountry} export data of rubber inner tubes for ${product_a} (HS Code ${hscode}) from ${countryin}. Get shipment records, exporter details, and trade insights with GTD Service.`;
//             keywords = ` ${lowerCountry} export data, HS Code ${hscode}, ${product_a} exports, ${countryin} to ${lowerCountry} trade, GTD Service trade records, ${lowerCountry} customs data`;
//         }
//     }

//     //11.http://localhost:55333/search/country-{R:1}/type-{R:2}/product-{R:3}/hscode-{R:4}/countryin-{R:5}
//     if (country != "0" && product == "" && hscode != "" && type != "" && countryin != "" && port == "")
//     {
//         if (type.toLowerCase() == "import")
//         {
//             title = `${lowerCountry} ${product_a} Imports from ${countryin} (HS Code ${hscode}) | GTD Service Trade Data`;
//             description = `Access detailed ${lowerCountry} import data of ${product_a} from ${countryin} under HS Code ${hscode}). Get shipment records, importer details, and trade insights with GTD Service.`;
//             keywords = `${lowerCountry} import data, ${product_a} imports ${lowerCountry}, HS Code ${hscode}, ${countryin} to ${lowerCountry} ${product_a} trade, GTD Service shipment data, customs records ${lowerCountry} `;
//         }
//         else
//         {
//             title = `${lowerCountry} ${product_a} Exports from ${countryin} (HS Code ${hscode}) | GTD Service Trade Data`;
//             description = `Access detailed ${lowerCountry} export data of ${product_a} from ${countryin} under HS Code ${hscode}). Get shipment records, exporter details, and trade insights with GTD Service.`;
//             keywords = `${lowerCountry} export data, ${product_a} exports ${lowerCountry}, HS Code ${hscode}, ${countryin} to ${lowerCountry} ${product_a} trade, GTD Service shipment data, customs records ${lowerCountry} `;
//         }
//     }
//     //10.http://localhost:55333/search/country-{R:1}/type-{R:2}/countryin-{R:3}/port-{R:4}
//     if (country != "0" && product == "" && hscode != "" && type != "" && countryin != "" && port != "")
//     {
//         if (tradeType.toLowerCase() == "import")
//         {
//             title = `${lowerCountry} Imports from ${countryin} via ${port} Port | GTD Service Trade Data`;
//             description = `Explore ${lowerCountry} import data from ${countryin} through ${port} Port. Access detailed shipment records, importer information, and trade statistics with GTD Service.`;
//             keywords = `${lowerCountry} import data, ${port} port imports, ${countryin} to ${lowerCountry} trade, GTD Service customs data, ${lowerCountry} ${countryin} shipments, port-wise import stats, importers in ${lowerCountry}, ${port} port trade records `;
//         }
//         else
//         {
//             title = `${lowerCountry} Exports from ${countryin} via ${port} Port | GTD Service Trade Data `;
//             description = `Explore ${lowerCountry} export data from ${countryin} through ${port} Port. Access detailed shipment records, exporter information, and trade statistics with GTD Service.`;
//             keywords = `${lowerCountry} export data, ${port} port exports, ${countryin} to ${lowerCountry} trade, GTD Service customs data, ${lowerCountry} ${countryin} shipments, port-wise export stats, exporters in ${lowerCountry}, ${port} port trade records`;
//         }
//     }
//     //12.http://localhost:55333/search/country-{R:1}/type-{R:2}/product-{R:3}/hscode-{R:4}/port-{R:5}
//     if (country != "0" && product == "" && hscode == "" && type != "" && countryin != "" && port != "")
//     {
//         if (tradeType.toLowerCase() == "import")
//         {
//             description = `Get detailed ${lowerCountry} import data of ${product_a} (HS Code ${hscode}) shipped from ${countryin} through ${port}. Access shipment details, customs info, and trade insights with GTD Service.`;
//             title = ` ${lowerCountry} ${product_a} Imports from ${countryin} via ${port} (HS Code ${hscode}) | GTD Service `;
//             keywords = `${lowerCountry} import data, ${product_a} imports ${lowerCountry}, HS Code ${hscode}, ${port} imports, ${countryin} to ${lowerCountry} trade, GTD Service import records, customs data ${lowerCountry}`;
//         }
//         else
//         {
//             description = `Get detailed ${lowerCountry} export data of ${product_a} (HS Code ${hscode}) shipped from ${countryin} through ${port}. Access shipment details, customs info, and trade insights with GTD Service.`;
//             title = ` ${lowerCountry} ${product_a} Exports from ${countryin} via ${port} (HS Code ${hscode}) | GTD Service `;
//             keywords = `${lowerCountry} export data, ${product_a} exports ${lowerCountry}, HS Code ${hscode}, ${port} exports, ${countryin} to ${lowerCountry} trade, GTD Service export records, customs data ${lowerCountry}`;
//         }
//     }
//     //13.http://localhost:55333/search/country-{R:1}/type-{R:2}/product-{R:3}/countryin-{R:4}/port-{R:5}
//     if (country != "0" && product != "" && hscode != "" && type != "" && countryin != "" && port == "")
//     {
//         if (tradeType.toLowerCase() == "import")
//         {
//             title = `${lowerCountry} ${product_a} Imports from ${countryin} via ${port} Port | GTD Service`;
//             description = `Explore ${lowerCountry} ${product_a} import data under HS Code ${hscode} from ${countryin} via ${port} Port. Access detailed shipment records, importer info, and trade insights with GTD Service.`;
//             keywords = `${lowerCountry} import data, ${product_a} imports ${lowerCountry}, HS Code ${hscode}, ${port} Port imports, ${countryin} to ${lowerCountry} trade, GTD Service customs data`;
//         }
//         else
//         {
//             title = `${lowerCountry} ${product_a} Exports from ${countryin} via ${port} Port | GTD Service`;
//             description = `Explore ${lowerCountry} ${product_a} export data under HS Code ${hscode} from ${countryin} via ${port} Port. Access detailed shipment records, exporter info, and trade insights with GTD Service.`;
//             keywords = `${lowerCountry} export data, ${product_a} exports ${lowerCountry}, HS Code ${hscode}, ${port} Port exports, ${countryin} to ${lowerCountry} trade, GTD Service customs data`;
//         }
//     }
//     //14.http://localhost:55333/search/country-{R:1}/type-{R:2}/hscode-{R:3}/countryin-{R:4}/port-{R:5}
//     if (country != "0" && product != "" && hscode != "" && type != "" && countryin == "" && port != "")
//     {
//         if (tradeType.toLowerCase() == "import")
//         {
//             title = `${lowerCountry} Imports of ${product_a} (HSN Code ${hscode}) from ${countryin} via ${port} | GTD Service`;
//             description = `Explore detailed import data of ${product_a} (HS Code ${hscode}) from ${countryin} to ${lowerCountry} through ${port} Port. Get shipment details, customs info, and trade insights with GTD Service.`;
//             keywords = `${lowerCountry} import data, HS Code ${hscode}, ${product_a} imports ${lowerCountry}, ${countryin} to ${lowerCountry} ${product_a} trade, ${port} Port shipments, GTD Service trade data, customs import records`;
//         }
//         else
//         {
//             title = `${lowerCountry} Exports of ${product_a} (HSN Code ${hscode}) from ${countryin} via ${port} | GTD Service`;
//             description = `Explore detailed export data of ${product_a} (HS Code ${hscode}) from ${countryin} to ${lowerCountry} through ${port} Port. Get shipment details, customs info, and trade insights with GTD Service.`;
//             keywords = `${lowerCountry} export data, HS Code ${hscode}, ${product_a} exports ${lowerCountry}, ${countryin} to ${lowerCountry} ${product_a} trade, ${port} Port shipments, GTD Service trade data, customs export records`;
//         }
//     }
//     //15.http://localhost:55333/search/country-{R:1}/type-{R:2}/product-{R:3}/hscode-{R:4}/countryin-{R:5}/port-{R:6}
//     if (country != "0" && product != "" && hscode == "" && type != "" && countryin != "" && port != "")
//     {
//         if (tradeType.toLowerCase() == "import")
//         {
//             title = `${lowerCountry} ${product_a} (HS Code ${hscode}) Imports from ${countryin} via ${port} Port | GTD Service`;
//             description = `Access detailed import data of ${product_a} (HS Code ${hscode}) from ${countryin} to ${lowerCountry} via ${port} Port. Explore shipment records, customs details, and trade insights on GTD Service.`;
//             keywords = ` ${lowerCountry} import data, ${product_a} imports ${lowerCountry}, HS Code ${hscode}, ${port} Port imports, ${countryin} to ${lowerCountry} trade, GTD Service customs data`;
//         }
//         else
//         {
//             title = `${lowerCountry} ${product_a} (HS Code ${hscode}) Exports from ${countryin} via ${port} Port | GTD Service `;
//             description = `Access detailed export data of ${product_a} (HS Code ${hscode}) from ${countryin} to ${lowerCountry} via ${port} Port. Explore shipment records, customs details, and trade insights on GTD Service.`;
//             keywords = `${lowerCountry} export data, ${product_a} exports ${lowerCountry}, HS Code ${hscode}, ${port} Port exports, ${countryin} to ${lowerCountry} trade, GTD Service customs data`;
//         }
//     }

//     //16.http://localhost:55333/search/country-{R:1}/type-{R:2}/product-{R:3}/hscode-{R:4}/countryin-{R:5}/port-{R:6}
//     if (country != "0" && product != "" && hscode != "" && type != "" && countryin != "" && port != "")
//     {
//         if (tradeType.toLowerCase() == "import")
//         {
//             description = `Find the latest  ${tradeType}  data of  ${product_a}  under HS code  ${hscode}  based on shipping details from  ${lowerCountry}  to  ${countryin}  at  ${port}  with importers, buyers, quantity, and date at gtdservice.com.`;
//             title = ` ${tradeType}  Data of  ${product_a}  under HS Code  ${hscode}  of  ${lowerCountry}  from  ${countryin}  at  ${port} `;
//         }
//         else
//         {
//             description = `Find the latest  ${tradeType}  data of  ${product_a}  under HS code  ${hscode}  based on shipping details  ${lowerCountry}  from  ${countryin}  at  ${port}  with exporters, buyers, quantity, and date at gtdservice.com.`;
//             title = ` ${tradeType}  Data of  ${product_a}  under HS Code  ${hscode}  of  ${lowerCountry}  to  ${countryin}  at  ${port} `;
//         }
//     }
//     if (country != "0" && product == "" && hscode != "" && type != "" && countryin == "" && port != "")
//     {
//         if (tradeType.toLowerCase() == "import")
//         {
//             title = `Get  ${lowerCountry}  Import Data of   ${port}   port under HS Code  ${hscode}  `;
//             description = `Find latest  ${lowerCountry}  Import Data under HS Code  ${hscode}  based on shipments to   ${port}   port with Product Name, Unit, Price, Buyer name, & shipping details.  `;
//             keywords = `${lowerCountry}  Import Data to   ${port}   port by hs code  ${hscode} ,  ${lowerCountry}  Import Data of   ${port}   port under HS Code  ${hscode} ,  ${lowerCountry}  shipment Import Data of   ${port}   port under HS Code  ${hscode} ,  ${lowerCountry}  customs Import Data of   ${port}   port under HS Code  ${hscode} ,  ${lowerCountry}  Import Data of   ${port}   port,  ${lowerCountry}  Import Data of   ${port}   port HS Code  ${hscode} `;
//         }
//         else
//         {
//             title = `Get  ${lowerCountry}  Export Data from  ${port}  Port under HS Code  ${hscode} `;
//             description = `Find latest  ${lowerCountry}  Export Data under HS Code  ${hscode}   based on shipments from  ${port}  Port with Product Name, Unit, Price, Supplier & Buyer name, & shipping details.`;
//             keywords = `${lowerCountry}  export Data from  ${port}  Port by hs code  ${hscode} ,  ${lowerCountry}  export Data from  ${port}  Port under HS Code  ${hscode} ,  ${lowerCountry}  shipment export Data from  ${port}  Port under HS Code  ${hscode} ,  ${lowerCountry}  customs export Data from  ${port}  Port under HS Code  ${hscode} , " ${lowerCountry} " export Data from " ${port} " Port, " ${lowerCountry} " export Data from " ${port} " Port HS Code " ${hscode} "`;
//         }
//     }

const url = `https://gtdservice.com/search/${lowerCountry}/${type}/${product}/${hscode}/${port}/${countryin}`;
;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'GTD Service',
      type: 'website',
      images: [
        {
          url: 'https://gtdservice.com/images/logo.svg',
          alt: 'Global Trade Data',
        },
      ],
    },
    twitter: {
      card: 'summary',
      title,
      description,
      site: '@gtdservice',
      creator: '@gtdservice',
      images: ['https://gtdservice.com/images/logo.svg'],
    },
  };
}

export default function PageWrapper() {
  return( <><ClientPage />

  </>);
}
