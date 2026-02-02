'use client';
import { useParams } from 'next/navigation';
//import { useEffect } from 'react';
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import CTA from "../../../../Common/CTA";
import CTA from '@/app/common/CTA';
//import Search from "../../../../common/Search";
import Search from '@/app/common/Search';
import Link from "next/link";
import "flag-icons/css/flag-icons.min.css";
import { country_all, country_cus } from '../../../../../data/countries';
import { stringify } from 'postcss';
import { useRouter } from 'next/navigation';
import UnlockDataForm from '@/components/UnlockDataForm';

const fetchData = async (payload) => {
  //alert('A');
  //alert(JSON.stringify(payload));
  const res = await fetch('../../../../../../search/api', {

    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return res.json();
};


const ClientPage = () => {
  const router = useRouter();
  const params = useParams();
  const [showUnlockForm, setShowUnlockForm] = useState(false);
  const { country, type, encryptedText= [] } = params;
  const [product, setProduct] = useState("");
  const [hscode, setHscode] = useState("");
  const [countryin, setcountryin] = useState("");
  const [port, setport] = useState("");
  const [loading, setLoading] = useState(true); // loading state


  const [hscode_search, setHscode_search] = useState(false);
  const [country_search, setcountry_search] = useState(false);
  const [unloading_search, setUnloading_search] = useState(false);

  //const [hscode, setHscode] = useState(false);
  //const [country, setcountry] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(country);
  // const [unloading, setUnloading] = useState(false);
  const [tradeType, setTradeType] = useState(type);

  const [readyToFetch, setReadyToFetch] = useState(false);


  const [hasFetched, setHasFetched] = useState(false);
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  const lowerCountry = country.replaceAll(' ', '_').toLowerCase();
  const isInAll = country_all.includes(lowerCountry);
  const isInCustoms = country_cus.includes(lowerCountry);

  const final_country = isInCustoms ? lowerCountry : 'all';

  useEffect(() => {
    if (!encryptedText) return;
  
    const params = {};
    
    // encryptedText is an array of strings like "key-value"
    encryptedText.forEach(pair => {
      //
      if(pair.startsWith("product-"))
      {
        params["product"] = pair.replace("product-", "").replaceAll("-"," ");
      }
      if(pair.startsWith("hs-"))
        {
          params["hs"] = pair.replace("hs-", "");
        }
        if(pair.startsWith("countryin-"))
          {
            params["countryin"] = pair.replace("countryin-", "");
          }
          if(pair.startsWith("port-"))
            {
              params["port"] = pair.replace("port-", "");
            }
      //
      // const [key, value] = pair.split('-', 2);
      // if (key && value) {
      //   params[key.toLowerCase()] = value;
      //   alert(`Parsed key: "${key}", value: "${value}"`);
      // }
    });
  
    setProduct(params['product'] || '');
    setHscode(params['hs'] || '');
    setcountryin(params['countryin'] || '');
    setport(params['port'] || '');
  
    setReadyToFetch(true);
  }, [encryptedText]);
  
  
  // useEffect(() => {
  //   const decodedString = Array.isArray(encryptedText) ? encryptedText[0] : encryptedText;
  // alert(encryptedText);
  //   if (encryptedText) {
  //     try {
     
  
  //       setProduct(urlParams.get('product') || '');
  //       setHscode(urlParams.get('hscode') || '');
  //       setcountryin(urlParams.get('countryin') || '');
  //       setport(urlParams.get('port') || '');
  //       setReadyToFetch(true);
  //     } catch (error) {
  //       console.error('Failed to parse query string:', error);
  //       setReadyToFetch(false);
      
  //     }
  //   } 
   
  //   },
  //  [encryptedText]);


  // useEffect(() => {
  //   if (typeof encryptedText === 'string' && encryptedText.includes('=')) {
  //     try {
  //       const urlParams = new URLSearchParams(encryptedText);
  
  //       setProduct(urlParams.get('product') ?? '');
  //       setHscode(urlParams.get('hscode') ?? '');
  //       setcountryin(urlParams.get('countryin') ?? '');
  //       setport(urlParams.get('port') ?? '');
  //       setReadyToFetch(true);
  
  //     } catch (error) {
  //       console.error('Failed to parse query string:', error);
  //       setReadyToFetch(false);
  //     }
  //   } else {
  //     console.warn('Invalid or empty query string:', encryptedText);
  //     setReadyToFetch(false);
  //   }
  // }, [encryptedText]);
  
  // useEffect(() => {
  //   if (encryptedText) {
  //     try {
  //       const urlParams = new URLSearchParams(encryptedText);
  
  //       setProduct(urlParams.get('product') ?? '');
  //       setHscode(urlParams.get('hscode') ?? '');
  //       setcountryin(urlParams.get('countryin') ?? '');
  //       setport(urlParams.get('port') ?? '');
  //       setReadyToFetch(true);
  
  //     } catch (error) {
  //       console.error('Failed to parse query string:', error);
  //       setReadyToFetch(false);
  //     }
  //   }
  // }, [encryptedText]);
  
  // useEffect(() => {
  //   if (encryptedText) {
  //     try {
  //       const decodedString = atob(decodeURIComponent(encryptedText));
  //       const urlParams = new URLSearchParams(decodedString);

  //       setProduct(urlParams.get('product') || '');
  //       setHscode(urlParams.get('hscode') || '');
  //       setcountryin(urlParams.get('countryin') || '');
  //       setport(urlParams.get('port') || '');
  //       setReadyToFetch(true);


  //     } catch (error) {
  //       console.error('Invalid encoded data:', error);
  //       setReadyToFetch(false);
  //     }
  //   }
  // }, [encryptedText]);

  useEffect(() => {
    //if (!product && !hscode && !countryin && !port && !country && !type) return;
    if (!readyToFetch) return;

    let payload = {
      source: final_country.replaceAll(' ', '_').toLowerCase(),
      type: "master",
      size: 10,
      filters: {

      }
    };
    const port_a = port.split(" ");
    if (type == 'import') {
      payload.distinct_filters = ["origin_country", "hs_code", "Port_of_Unloading"];
      payload.filters.destination_country = lowerCountry.replaceAll('_', ' ').toLowerCase();
      if (unloading_search) {
        payload.filters.Port_of_Unloading = unloading_search.replaceAll('-', ' ').toLowerCase();
      }
      if (countryin) {
        payload.filters.origin_country = countryin.replaceAll('-', ' ').toLowerCase();
      }
      if (port) {
        payload.filters.Port_of_Unloading = port_a[0].replaceAll('-', ' ').toLowerCase();
      }
    }
    else if (type == "export") {
      payload.distinct_filters = ["destination_country", "hs_code", "Port_of_Loading"];
      payload.filters.origin_country = lowerCountry.replaceAll('_', ' ').toLowerCase();
      if (unloading_search) {
        payload.filters.Port_of_loading = unloading_search.replaceAll('-', ' ').toLowerCase();
      }
      if (countryin) {
        payload.filters.destination_country = countryin.replaceAll('-', ' ').toLowerCase();
      }
      if (port) {
        payload.filters.Port_of_Loading = port_a[0].replaceAll('-', ' ').toLowerCase();
      }
    }
    if (product) {
      payload.filters.Product_Description = product;
    }
    if (hscode) {
      payload.filters.hs_code = hscode + "%";
    }


  // alert(JSON.stringify(payload))
    setLoading(true);
    fetchData(payload)
      .then(res => {
        setData(res.data || []);
        setFilter(res.unique || []);
      })
      .catch(err => console.error('Error fetching data:', err))
      .finally(() => {
        setLoading(false);
        setHasFetched(true);
      });
  }, [readyToFetch, product, hscode, countryin, port, type, country]); //[product, hscode, country, countryin, port, type, hasFetched]);


  const filterCountries = [];
  const filterhsCodes = [];
  const filterports = [];

  filter.forEach(item => {
    if (item.startsWith("origin_country:") || item.startsWith("destination_country:")) {
      filterCountries.push(item);
    } else if (item.startsWith("hs_code:")) {
      filterhsCodes.push(item);
    } else if (item.startsWith("Port_of_Unloading:") || item.startsWith("Port_of_Loading:")) {
      filterports.push(item);
    }
  });

  const hs_search_click = (code) => {
    const countrySlug = country.toLowerCase().replace(/\s+/g, "-");
    const typeSlug = type.toLowerCase();
  
    //const url = `/search/${countrySlug}/${typeSlug}/${product}/${port}/${countryin}`;
    let tanu = `/search/${countrySlug}/${typeSlug}`;
    if(product)
    {
      tanu +=  `/product-${product.toLowerCase()}`;
    }
    if(code)
      {
        tanu +=  `/hs-${code}`;
      }
      if(port)
        {
          tanu +=  `/port-${port.toLowerCase()}`;
        }
        if(countryin)
          {
            tanu +=  `&countryin-${countryin.toLowerCase()}`;
          }
    //const url = `/search/${countrySlug}/${typeSlug}/${product}/${hscode}/${code}/${countryin}`;
    const url = tanu;
  
    router.push(url);
  };

  const port_search_click = (code) => {
    const countrySlug = country.toLowerCase().replace(/\s+/g, "-");
    const typeSlug = type.toLowerCase();
    let tanu = `/search/${countrySlug}/${typeSlug}`;
    if(product)
    {
      tanu +=  `/product-${product.toLowerCase()}`;
    }
    if(hscode)
      {
        tanu +=  `/hs-${hscode}`;
      }
      if(countryin)
        {
          tanu +=  `/countryin-${countryin.toLowerCase()}`;
        }
        if(code)
          {
            tanu +=  `/port-${code.replaceAll(' ', '-').toLowerCase()}`;
          }
    //const url = `/search/${countrySlug}/${typeSlug}/${product}/${hscode}/${code}/${countryin}`;
    const url = tanu;
  
    router.push(url);
  };
  const countryin_search_click = (code) => {
    const countrySlug = country.toLowerCase().replace(/\s+/g, "-");
    const typeSlug = type.toLowerCase();
  
    //const url = `/search/${countrySlug}/${typeSlug}/${product}/${hscode}/${port}/${code}`;
    let tanu = `/search/${countrySlug}/${typeSlug}`;
    if(product)
    {
      tanu +=  `/product-${product.toLowerCase()}`;
    }
    if(hscode)
      {
        tanu +=  `/hs-${hscode}`;
      }
      if(port)
        {
          tanu +=  `/port-${port.toLowerCase()}`;
        }
        if(code)
          {
            tanu +=  `/countryin-${code.replaceAll(' ', '-').toLowerCase()}`;
          }
    //const url = `/search/${countrySlug}/${typeSlug}/${product}/${hscode}/${code}/${countryin}`;
    const url = tanu;
    router.push(url);
  };
  
  
  




  // const hs_search_click = (code) => {

  //   const countrySlug = country.toLowerCase().replace(/\s+/g, "-");
  //   const typeSlug = type.toLowerCase();
  //   const combinedText = `product=${product}&hscode=${code}&port=${port}&countryin=${countryin}`;

  //   const encodedText = product || code || port || countryin
  //     ? encodeURIComponent(btoa(combinedText))
  //     : null;

  //   const url = encodedText
  //     ? `/search/${countrySlug}/${typeSlug}/${encodedText}`
  //     : `/search/${countrySlug}/${typeSlug}`;

      

  //   router.push(url);
  //   //setHasFetched(false);
  // };

  // const port_search_click = (code) => {

  //   const countrySlug = country.toLowerCase().replace(/\s+/g, "-");
  //   const typeSlug = type.toLowerCase();
  //   const combinedText = `product=${product}&hscode=${hscode}&port=${code}&countryin=${countryin}`;

  //   const encodedText = product || hscode || code || countryin
  //     ? encodeURIComponent(btoa(combinedText))
  //     : null;

  //   const url = encodedText
  //     ? `/search/${countrySlug}/${typeSlug}/${encodedText}`
  //     : `/search/${countrySlug}/${typeSlug}`;

  //   router.push(url);
  //   //setHasFetched(false);
  // };

  // const countryin_search_click = (code) => {
  //   const countrySlug = country.toLowerCase().replace(/\s+/g, "-");
  //   const typeSlug = type.toLowerCase();
  //   const combinedText = `product=${product}&hscode=${hscode}&port=${port}&countryin=${code}`;

  //   const encodedText = product || hscode || port || code
  //     ? encodeURIComponent(btoa(combinedText))
  //     : null;

  //   const url = encodedText
  //     ? `/search/${countrySlug}/${typeSlug}/${encodedText}`
  //     : `/search/${countrySlug}/${typeSlug}`;

  //   router.push(url);

  //  // setHasFetched(false);
  // };

  const [dynamicContent, setDynamicContent] = useState({
    title: "Search Global Trade Data by Country, HS Code & Product",
    subTitle: "Get unlimited access to our online global trade data portal. Perform free search on global trade data by country, HS Code and product. Find detailed shipment records with essential data fields including product description, quantity, unit, value, country of origin/destination, buyer supplier name and port of loading/unloading.",
    content: "Global Trade Data service offers the most up-to-date, authentic, and reliable import-export data for goods with the HS code and product. We gather HS Code import data points from country ports, customs records, and other reliable country authorities. Common country-wise import-export data reports aid in the analysis of numerous data points, including import price and export price, product, company name, port, importer and exporter, product description, date, quantity, and market trends. Global exporters and importers can use international import-export trade data to conduct market research and analysis to identify local suppliers and buyers in that nation."
  });

  useEffect(() => {
    const updateDynamicContent = () => {
      let newContent = {
        title: "",
        subTitle: "",
        content: ""
      };

      // Convert parameters to lowercase for consistent comparison
      
       const lowerType = type?.toLowerCase() || "";

      const lowerCountry = country?.toLowerCase() || "";
      const lowerProduct = product?.toLowerCase() || "";
      const lowerHscode = hscode?.toLowerCase() || "";
      const lowerCountryin = countryin?.toLowerCase() || "";
      const lowerPort = port?.toLowerCase() || "";

      let country_a = '';
      if (country && country.length > 3) {
        country_a = country.charAt(0).toUpperCase() + country.slice(1);
      }
      let product_a = '';
      if (product && product.length > 2) {
        product_a = product.charAt(0).toUpperCase() + product.slice(1);
      }
      let type_a = '';
      if (type && type.length > 2) {
        type_a = type.charAt(0).toUpperCase() + type.slice(1);
      }
      let countryin_a = '';
      if (countryin && countryin.length > 2) {
        countryin_a = countryin.charAt(0).toUpperCase() + countryin.slice(1);
      }
      let port_a = '';
      if (port && port.length > 2) {
        port_a = port.charAt(0).toUpperCase() + port.slice(1);
      }

      // Condition 1: Default search page
      if (country === "0" && !product && !hscode && !type && !countryin && !port) {
        newContent.title = "Search Global Trade Data by Country, HS Code & Product";
        newContent.subTitle = "Get unlimited access to our online global trade data portal. Perform free search on global trade data by country, HS Code and product. Find detailed shipment records with essential data fields including product description, quantity, unit, value, country of origin/destination, buyer supplier name and port of loading/unloading.";
        newContent.content = "Global Trade Data service offers the most up-to-date, authentic, and reliable import-export data for goods with the HS code and product. We gather HS Code import data points from country ports, customs records, and other reliable country authorities. Common country-wise import-export data reports aid in the analysis of numerous data points, including import price and export price, product, company name, port, importer and exporter, product description, date, quantity, and market trends. Global exporters and importers can use international import-export trade data to conduct market research and analysis to identify local suppliers and buyers in that nation.";
      }
      // Condition 2: country-{R:1}/type-{R:2}
      else if (country !== "0" && !product && !hscode && type && !countryin && !port) {
        if (lowerType === "import") {
          newContent.title = `Use GTD Services to Search for ${country_a} Import Data`;
          newContent.content = `Global Trade Data Service is a trusted name in trade intelligence. Our ${country_a} Import Database is provided by real-time and historical data, including year-wise trade stats, customs records, bills of lading, and port transactions.`;
          newContent.subTitle = `Access the latest ${country_a} import data information from GTD Services. Instantly search by HS Code, Product Name, Unit, Quantity, Price, Buyer Data, Supplier Data Name, Country of Origin, Port of Unloading, and complete Shipping Details. Use this reliable data to conduct deep market research, align your products to market needs, including the Bangladesh market, and connect with verified trade prospects through authentic ${country_a} shipment records.`;
        } else {
          newContent.title = `Use GTD Services to Search for ${country_a} Export Data`;
          newContent.content = `Global Trade Data Service is a trusted name in trade intelligence. Our ${country_a} Export Database is provided by real-time and historical data, including year-wise trade stats, customs records, bills of lading, and port transactions.`;
          newContent.subTitle = `Access the latest ${country_a} export data information from GTD Services. Instantly search by HS Code, Product Name, Unit, Quantity, Price, Buyer Data, Supplier Data Name, Destination Country, Port of Loading, and complete Shipping Details. Use this reliable data to conduct deep market research, align your products to market needs, including the Bangladesh market, and connect with verified trade prospects through authentic ${country_a} shipment records.`;
        }
      }
      // Condition 3: country-{R:1}/type-{R:2}/product-{R:3}
      else if (country !== "0" && product && !hscode && type && !countryin && !port) {
        if (lowerType === "import") {
          newContent.subTitle = `Get ${country_a} Import ${product_a} Data such as the ${product_a} importer in the ${country_a} with date, HS Code, Product details information and quantity, unit, Total value in USD, country, port loading and unloading, buyer, and more shipping information details below.`;
          newContent.title = `Make Thorough Competitor Assessments with Our Up-to-date ${product_a} Import Data`;
          newContent.content = `Global Trade Data service gives out ${country_a} Import ${product_a} data with HS Code and Price. We get ${product_a} Export data from the ports and customs of the ${country_a} through trusted sources. The ${country_a} ${product_a} Import data report helps analyze the price, port, Importer and Exporter, description of the product, Date, Quantity and time, market trends, and many more. International Trade data of a country assists global exporters and Importers with local suppliers and buyers in any country for meaningful analysis and market research.`;
        } else {
          newContent.subTitle = `Get ${country_a} Export ${product_a} Data such as the ${product_a} exporter in the ${country_a} with date, HS Code, Product details information and quantity, unit, Total value in USD, country, port loading and unloading, buyer, and more shipping information details below.`;
          newContent.title = `Make Thorough Competitor Assessments with Our Up-to-date ${product_a} Export Data`;
          newContent.content = `Global Trade Data service gives out ${country_a} Export ${product_a} data with HS Code and Price. We get ${product_a} Export data from the ports and customs of the ${country_a} through trusted sources. The ${country_a} ${product_a} Export data report helps analyze the price, port, Importer and Exporter, description of the product, Date, Quantity and time, market trends, and many more. International Trade data of a country assists global exporters and Importers with local suppliers and buyers in any country for meaningful analysis and market research.`;
        }
      }
      // Condition 4: country-{R:1}/type-{R:2}/hscode-{R:3}
      else if (country !== "0" && !product && hscode && type && !countryin && !port) {
        if (lowerType === "import") {
          newContent.subTitle = `Get access to the latest and most reliable ${country_a} Customs Import Data under HS Code ${hscode}, which includes electrical machinery, equipment, and parts. Our data helps you uncover valuable insights for smarter global trade decisions. At Global Trade Data Service, we provide the most up-to-date and 100% verified ${country_a} Import Data for products listed under HS Code ${hscode}, Electrical Machinery and Equipment. Our data is sourced directly from reliable sources, ensuring complete accuracy and authenticity.`;
          newContent.title = `HS Code ${hscode} Customs Import Information for the ${country_a}`;
          newContent.content = `Global Trade Data Solutions offers the most up-to-date, authentic, and reliable  ${country_a} import data for goods with the ${hscode} HS code. We gather HS Code ${hscode} import data points from US ports, customs, and other reliable US authorities. HS Code ${hscode} Import data reports aid in the analysis of numerous data points, including import price, product, company name, port, importer and exporter, product description, date, quantity, and market trends. Global exporters and importers can use a nation's international trade data to conduct market research and analysis in order to identify local suppliers and buyers in that nation.`;
        } else {
          newContent.subTitle = `Get access to the latest and most reliable ${country_a} Customs Export Data under HS Code ${hscode}, which includes electrical machinery, equipment, and parts. Our data helps you uncover valuable insights for smarter global trade decisions. At Global Trade Data Service, we provide the most up-to-date and 100% verified ${country_a} Export Data for products listed under HS Code ${hscode}, Electrical Machinery and Equipment. Our data is sourced directly from reliable sources, ensuring complete accuracy and authenticity.`;
          newContent.title = `HS Code ${hscode} Customs Export Information for the ${country_a}`;
          newContent.content = `Global Trade Data Solutions offers the most up-to-date, authentic, and reliable  ${country_a} export data for goods with the ${hscode} HS code. We gather HS Code ${hscode} export data points from US ports, customs, and other reliable US authorities. HS Code ${hscode} Export data reports aid in the analysis of numerous data points, including export price, product, company name, port, importer and exporter, product description, date, quantity, and market trends. Global exporters and importers can use a nation's international trade data to conduct market research and analysis in order to identify local suppliers and buyers in that nation.`;
        }
      }
      // Condition 5: country-{R:1}/type-{R:2}/countryin-{R:3}
      else if (country !== "0" && !product && !hscode && type && countryin && !port) {
        if (lowerType === "import") {
          newContent.subTitle = `Get the most recent ${country_a} imports from the ${countryin_a} with GTD Service. Use the HS Code, Product Name, Unit, Quantity, Price, Importer Name, Exporter Name, Country of Origin, Port of Unloading, and Shipping details to search ${country_a} Import Data from the ${countryin_a}. Find out what goods the ${country_a} imports from the ${countryin_a}. They are top ${country_a} suppliers and buyers. Use our global trade data service to increase sales and income from the ${country_a}.`;
          newContent.title = `Access Verified ${country_a} Import Data from the ${countryin_a} with GTD Service`;
          newContent.content = `Global Trade Data Service information provides 100% verified and up-to-date ${country_a} import data for products sourced from the ${countryin_a}. Access monthly trade statistics organized by HS Code and Port of Unloading, giving you a clear view of current market trends and product demand. Instantly identify top suppliers in the ${countryin_a} and leading ${country_a} buyers to streamline your sourcing and sales strategies. Our data empowers you to save time, reduce financial risks, and make informed, competitive decisions. Gain a strategic advantage and establish your brand globally with our reliable trade intelligence platform.`;
        } else {
          newContent.subTitle = `Get the most recent ${country_a} exports from the ${countryin_a} with GTD Service. Use the HS Code, Product Name, Unit, Quantity, Price, Importer Name, Exporter Name, Destination Country, Port of Loading, and Shipping details to search ${country_a} Export Data from the ${countryin_a}. Find out what goods the ${country_a} exports from the ${countryin_a}. They are top ${country_a} suppliers and buyers. Use our global trade data service to increase sales and income from the ${country_a}.`;
          newContent.title = `Access Verified ${country_a} Export Data from the ${countryin_a} with GTD Service`;
          newContent.content = `Global Trade Data Service information provides 100% verified and up-to-date ${country_a} export data for products sourced from the ${countryin_a}. Access monthly trade statistics organized by HS Code and Port of Loading, giving you a clear view of current market trends and product demand. Instantly identify top suppliers in the ${countryin_a} and leading ${country_a} supplier to streamline your sourcing and sales strategies. Our data empowers you to save time, reduce financial risks, and make informed, competitive decisions. Gain a strategic advantage and establish your brand globally with our reliable trade intelligence platform.`;
        }
      }
      // Condition 6: country-{R:1}/type-{R:2}/port-{R:3}
      else if (country !== "0" && !product && !hscode && type && !countryin && port) {
        if (lowerType === "import") {
          newContent.subTitle = `Discover what products the ${country_a} imports from other countries at ${port_a} with global trade data solutions. Search ${country_a} Import Data to ${port_a} by HS code, product name, quantity, unit, value, buyer name and supplier name, port of unloading, and shipment record details. We provide information that details in-depth ${country_a} market business insights so that you can have better research for the market business. You can give an analytical approach to your marketing strategy that helps you gain an edge over your competitors.`;
          newContent.title = `Search for Import Data of the ${country_a} at ${port_a}.`;
          newContent.content = `Global Trade Data Service is a leading data information service provider firm offering valuable ${country_a} import data to ${port_a}. We generate a result-oriented ${country_a} import data market business intelligence report. You can include many genuine leads from our latest ${country_a} shipment records. We provide ${country_a} customs records by HS Code, product name, quantity, price, importer name, country of origin, and port of unloading and shipping details. It helps you discover potential business prospects from the ${country_a} and build a solid presence in the ${country_a} market research. Generate more revenue with GTD Service.`;
        } else {
          newContent.subTitle = `Discover what products the ${country_a} exports from other countries at ${port_a} with global trade data solutions. Search ${country_a} Export Data to ${port_a} by HS code, product name, quantity, unit, value, buyer name and supplier name, port of loading, and shipment record details. We provide information that details in-depth ${country_a} market business insights so that you can have better research for the market business. You can give an analytical approach to your marketing strategy that helps you gain an edge over your competitors.`;
          newContent.title = `Search for Export Data of the ${country_a} at ${port_a}.`;
          newContent.content = `Global Trade Data Service is a leading data information service provider firm offering valuable ${country_a} export data to ${port_a}. We generate a result-oriented ${country_a} export data market business intelligence report. You can include many genuine leads from our latest ${country_a} shipment records. We provide ${country_a} customs records by HS Code, product name, quantity, price, exporter name, destination country, and port of loading and shipping details. It helps you discover potential business prospects from the ${country_a} and build a solid presence in the ${country_a} market research. Generate more revenue with GTD Service.`;
        }
      }
      // Condition 7: country-{R:1}/type-{R:2}/product-{R:3}/hscode-{R:4}
      else if (country !== "0" && product && hscode && type && !countryin && !port) {
        if (lowerType === "import") {
          newContent.subTitle = `Gain access to the most recent and reliable ${country_a} shipment records for ${product_a} categorized under HS Code ${hscode}. This includes detailed information such as product descriptions and pricing or buyer and supplier data details, port of entry, and shipping records. These valuable insights enable you to conduct effective market research, craft data-driven marketing strategies, and identify genuine trade opportunities. Accelerate your business growth with our 100% authentic and trusted ${country_a} import data.`;
          newContent.title = `Explore Verified ${country_a} ${product_a} Import Data under HS Code ${hscode}`;
          newContent.content = `Global Trade Data Service offers the most recent and 100% authentic ${product_a} import data for the ${country_a} under HS code ${hscode}. We gather ${product_a} import data with product and date under the HS code ${hscode}. ${product_a} ${type_a} data under HS code ${hscode} ${country_a} aids in the analysis of numerous data points, including import price, company name, port, importer and exporter, product description, quantity, and market trends. Global exporters and importers can use a nation's international trade data to conduct market research and analysis in order to identify local suppliers and buyers in that nation.`;
        } else {
          newContent.subTitle = `Gain access to the most recent and reliable ${country_a} shipment records for ${product_a} categorized under HS Code ${hscode}. This includes detailed information such as product descriptions and pricing or buyer and supplier data details, port of entry, and shipping records. These valuable insights enable you to conduct effective market research, craft data-driven marketing strategies, and identify genuine trade opportunities. Accelerate your business growth with our 100% authentic and trusted ${country_a} export data.`;
          newContent.title = `Explore Verified ${country_a} ${product_a} Export Data under HS Code ${hscode}`;
          newContent.content = `Global Trade Data Service offers the most recent and 100% authentic ${product_a} export data for the ${country_a} under HS code ${hscode}. We gather ${product_a} export data with product and date under the HS code ${hscode}. ${product_a} ${type_a} data under HS code ${hscode} ${country_a} aids in the analysis of numerous data points, including export price, company name, port, importer and exporter, product description, quantity, and market trends. Global exporters and importers can use a nation's international trade data to conduct market research and analysis in order to identify local suppliers and buyers in that nation.`;
        }
      }
      // Condition 8: country-{R:1}/type-{R:2}/product-{R:3}/countryin-{R:4}
      else if (country !== "0" && product && !hscode && type && countryin && !port) {
        if (lowerType === "import") {
          newContent.subTitle = `Get the latest ${country_a} ${product_a} import data from ${countryin_a} customs import data. Get the following information data product name, price, value, unit, quantity, importer port name, and many more shipment details based on invoices, shipping bills, and other documents for effective market research.`;
          newContent.title = `Get the Latest ${country_a} ${product_a} Import Data from ${countryin_a}`;
          newContent.content = `Global Trade Data Solutions provides 100% real-time and updated ${country_a} ${product_a} import data from ${countryin_a}. We collect ${country_a} ${product_a} Import Data, including the product and date. ${country_a} ${product_a} Import Data from ${countryin_a} helps to analyze import price, company name, port, importer and exporter, product description, quantity, market trends, and many other data pieces. International trade data of a country helps exporters and importers nationally and internationally to analyze and research their market to find local suppliers and buyers from that country.`;
        } else {
          newContent.subTitle = `Get the latest ${country_a} ${product_a} export data from ${countryin_a} customs export data. Get the following information data product name, price, value, unit, quantity, exporter port name, and many more shipment details based on invoices, shipping bills, and other documents for effective market research.`;
          newContent.title = `Get the Latest ${country_a} ${product_a} Export Data from ${countryin_a}`;
          newContent.content = `Global Trade Data Solutions provides 100% real-time and updated ${country_a} ${product_a} export data from ${countryin_a}. We collect ${country_a} ${product_a} Export Data, including the product and date. ${country_a} ${product_a} Export Data from ${countryin_a} helps to analyze export price, company name, port, importer and exporter, product description, quantity, market trends, and many other data pieces. International trade data of a country helps exporters and importers nationally and internationally to analyze and research their market to find local suppliers and buyers from that country.`;
        }
      }
      // Condition 17: country-{R:1}/type-{R:2}/product-{R:3}/port-{R:4}
      else if (country !== "0" && product && !hscode && type && !countryin && port) {
        if (lowerType === "import") {
          newContent.subTitle = `Find potential buyers of ${product_a} with verified ${country_a} import data from the ${port_a} Port. You can find using HS Code, product name, quantity, unit, price, importer name, and port of unloading.`;
          newContent.title = `Customs ${product_a} Imports Data from the ${port_a} Port`;
          newContent.content = `Global Trade Data Service provides 100% valid and timely ${product_a} import data of the ${country_a} at ${port_a}. We compile the import data of ${product_a} by shipping details at ${port_a}. ${product_a} import data of the ${country_a} at ${port_a} helps to analyze import price, company name, port, importer and exporter, product description, quantity, market trends, and many other data attributes. International trade data of a country enables global exporters and importers to do analysis and market research to find local suppliers and buyers in that country.`;
        } else {
          newContent.subTitle = `Find potential suppliers of ${product_a} with verified ${country_a} export data from the ${port_a} Port. You can find using HS Code, product name, quantity, unit, price, exporter name, and port of loading.`;
          newContent.title = `Customs ${product_a} Exports Data from the ${port_a} Port`;
          newContent.content = `Global Trade Data Service provides 100% valid and timely ${product_a} export data of the ${country_a} at ${port_a}. We compile the export data of ${product_a} by shipping details at ${port_a}. ${product_a} export data of the ${country_a} at ${port_a} helps to analyze export price, company name, port, importer and exporter, product description, quantity, market trends, and many other data attributes. International trade data of a country enables global exporters and importers to do analysis and market research to find local suppliers and buyers in that country.`;
        }
      }
      // Condition 9: country-{R:1}/type-{R:2}/hscode-{R:3}/countryin-{R:4}
      else if (country !== "0" && !product && hscode && type && countryin && !port) {
        if (lowerType === "import") {
          newContent.title = `Get the latest Import data of the ${country_a} from the ${countryin_a} under HS Code ${hscode}`;
          newContent.subTitle = `Want the latest ${country_a} Import Data from the ${countryin_a} under HS Code ${hscode}? Get all the necessary details concerning the product name, quantity, unit, value, importer name, exporter name, port of unloading, and shipment information on GTD Service. Stay ahead of your competitors with our verified Import Data of the ${country_a}.`;
          newContent.content = `Global Trade Data Service is offering 100% genuine and the latest ${country_a} import data for products in the HS Code ${hscode} category exported from the ${countryin_a}. Our data includes all conceivable details, such as product names, shipment dates, import prices, company names, ports of entry, buyer and supplier details, product descriptions, quantities, and market trends. The complete trade data provides a platform that enables global exporters and importers to carry out accurate market research, establish reliable local partners, and develop effective data-driven strategies for entering and growing in the ${country_a} market.`;
        } else {
          newContent.title = `Get the latest Export data of the ${country_a} from the ${countryin_a} under HS Code ${hscode}`;
          newContent.subTitle = `Want the latest ${country_a} Export Data from the ${countryin_a} under HS Code ${hscode}? Get all the necessary details concerning the product name, quantity, unit, value, importer name, exporter name, port of loading, and shipment information on GTD Service. Stay ahead of your competitors with our verified Export Data of the ${country_a}.`;
          newContent.content = `Global Trade Data Service is offering 100% genuine and the latest ${country_a} export data for products in the HS Code ${hscode} category imported from the ${countryin_a}. Our data includes all conceivable details, such as product names, shipment dates, export prices, company names, ports of entry, buyer and supplier details, product descriptions, quantities, and market trends. The complete trade data provides a platform that enables global exporters and importers to carry out accurate market research, establish reliable local partners, and develop effective data-driven strategies for entering and growing in the ${country_a} market.`;
        }
      }
      // Condition 16: country-{R:1}/type-{R:2}/hscode-{R:3}/port-{R:4}
      else if (country !== "0" && !product && hscode && type && !countryin && port) {
        if (lowerType === "import") {
          newContent.title = `Get the Latest ${country_a} Import Data to ${port_a} under HS Code ${hscode}`;
          newContent.subTitle = `Choose data information for potential buyers and suppliers for your products through our genuine ${country_a} import data based on shipment records to the ${port_a}. Search the market for the latest  ${country_a} import data for ${port_a} under HS Code ${hscode} with the product name, unit, quantity, price, buyer name, supplier name, and port details information.`;
          newContent.content = `Guide to the latest ${country_a} import data of products under HS Code ${hscode} to the ${port_a} with the GTD Service. Search HS Code ${hscode} Import Data of ${country_a} to ${port_a} by product name, quantity, unit, price, importer name, exporter name, country of origin, port of unloading, and shipping details information. Our well-researched shipment records help you in applying an analytical approach to your marketing strategy. It keeps your time and yields impressive returns.`;
        } else {
          newContent.title = `Get the Latest ${country_a} Export Data to ${port_a} under HS Code ${hscode}`;
          newContent.subTitle = `Choose data information for potential buyers and suppliers for your products through our genuine ${country_a} export data based on shipment records to the ${port_a}. Search the market for the latest  ${country_a} export data for ${port_a} under HS Code ${hscode} with the product name, unit, quantity, price, buyer name, supplier name, and port details information.`;
          newContent.content = `Guide to the latest ${country_a} export data of products under HS Code ${hscode} to the ${port_a} with the GTD Service. Search HS Code ${hscode} Export Data of ${country_a} to ${port_a} by product name, quantity, unit, price, importer name, exporter name, destination country, port of loading, and shipping details information. Our well-researched shipment records help you in applying an analytical approach to your marketing strategy. It keeps your time and yields impressive returns.`;
        }
      }
      // Condition 10: country-{R:1}/type-{R:2}/countryin-{R:3}/port-{R:4}
      else if (country !== "0" && !product && hscode && type && countryin && port) {
        if (lowerType === "import") {
          newContent.title = `Get ${country_a} Import Data from ${country_a} to ${port_a} port under HS Code ${hscode}`;
          newContent.subTitle = `Uncover the unique ${country_a} Import Data from ${country_a} to ${port_a} Port under HS Code ${hscode} along with Product name, Unit, Quantity, Price, Buyer name, Port of Unloading & shipment information. Expand your business in ${country_a} Market using an impactful data-driven strategy.`;
          newContent.content = `Global Trade Data Service provides 100% genuine and the latest HS Code ${hscode} ${type_a} Data of ${country_a} from ${country_a} at ${port_a}. We collect HS Code ${hscode} ${type_a} Data of ${country_a} from ${country_a} at ${port_a} with product and date. HS Code ${hscode} ${type_a} Data of ${country_a} from ${country_a} at ${port_a} helps to analyze Import price, company name, port, importer and exporter, product description, quantity, market trends, and many other data points. International Trade data of a country helps the global exporters and importers to do analysis and market research to find local suppliers and buyers in that country.`;
        } else {
          newContent.title = `Get ${country_a} Export Data from ${country_a} port to ${country_a} under HS Code ${hscode}`;
          newContent.subTitle = `Uncover the unique ${country_a} Export Data from ${port_a} Port to ${country_a} under HS Code ${hscode} along with Product name, Unit, Quantity, Price, Supplier & Buyer name, Port of loading & shipment information. Expand your business in ${country_a} Market using an impactful data-driven strategy.`;
          newContent.content = `Global Trade Data Service provides 100% genuine and the latest HS Code ${hscode} ${type_a} Data of ${country_a} from ${country_a} at ${port_a}. We collect HS Code ${hscode} ${type_a} Data of ${country_a} from ${country_a} at ${port_a} with product and date. HS Code ${hscode} ${type_a} Data of ${country_a} to ${country_a} at ${port_a} helps to analyze Import price, company name, port, importer and exporter, product description, quantity, market trends, and many other data points. International Trade data of a country helps the global exporters and importers to do analysis and market research to find local suppliers and buyers in that country.`;
        }
      }
      // Condition 11: country-{R:1}/type-{R:2}/product-{R:3}/hscode-{R:4}/countryin-{R:5}
      else if (country !== "0" && product && hscode && type && countryin && !port) {
        if (lowerType === "import") {
          newContent.title = `Latest ${country_a} Import Data of ${product_a} under HS Code ${hscode} from the ${countryin_a}`;
          newContent.subTitle = `Uncover the latest ${country_a} import data for ${product_a} under HS Code ${hscode} based on shipping from the ${countryin_a}. Get detailed data for product name, unit, quantity, price, buyer name, port of unloading, and shipment information. Use this compelling, data-driven strategy to propel your business in the ${country_a} market.`;
          newContent.content = `GTD Service is the authentic and best Import Data provider for ${product_a} under the Code ${hscode}-to-the-${country_a}-from-${countryin_a} source. We collect Import Data of ${product_a} under HS Code ${hscode} of the ${country_a} from the ${countryin_a} with product and date. Importing data of ${product_a} under HS Code ${hscode} helps to analyze Import price, company name, port, importer and exporter, product description, quantity, market trends, and many other data points. International trade data of a country helps the global exporters and importers to do analysis and market research to find local suppliers and buyers in that country.`;
        } else {
          newContent.title = `Latest ${country_a} Export Data of ${product_a} under HS Code ${hscode} from the ${countryin_a}`;
          newContent.subTitle = `Uncover the latest ${country_a} export data for ${product_a} under HS Code ${hscode} based on shipping from the ${countryin_a}. Get detailed data for product name, unit, quantity, price, supplier name, port of loading, and shipment information. Use this compelling, data-driven strategy to propel your business in the ${country_a} market.`;
          newContent.content = `GTD Service is the authentic and best Export Data provider for ${product_a} under the Code ${hscode}-to-the-${country_a}-from-${countryin_a} source. We collect Export Data of ${product_a} under HS Code ${hscode} of the ${country_a} from the ${countryin_a} with product and date. Exporting data of ${product_a} under HS Code ${hscode} helps to analyze Export price, company name, port, importer and exporter, product description, quantity, market trends, and many other data points. International trade data of a country helps the global exporters and importers to do analysis and market research to find local suppliers and buyers in that country.`;
        }
      }
      // Condition 12: country-{R:1}/type-{R:2}/product-{R:3}/hscode-{R:4}/port-{R:5}
      else if (country !== "0" && product && hscode && type && !countryin && port) {
        if (lowerType === "import") {
          newContent.title = `Latest ${country_a} Import Data of ${product_a} under HS Code ${hscode} to ${port_a}`;
          newContent.subTitle = `Find the most current ${country_a} Import Data of ${product_a} under HS Code ${hscode} to the ${port_a}. Obtain important information, including buyer name, product name, unit, quantity, price, and shipping details. Examine these important figures to grow your market business in the ${country_a} market research field.`;
          newContent.content = `Global Trade Data Service provides 100% genuine and the latest ${type_a} Data of ${product_a} under HS Code ${hscode} at ${port_a}. We collect ${type_a} Data of ${product_a} under HS Code ${hscode} at ${port_a} with product and date. ${type_a} Data of ${product_a} under HS Code ${hscode} at ${port_a} helps to analyze ${type_a} price, company name, port, importer and exporter, product description, quantity, market trends, and many other data points. International Trade data of a country helps the global exporters and importers to do analysis and market research to find local suppliers and buyers in that country.`;
        } else {
          newContent.title = `Latest ${country_a} Export Data of ${product_a} under HS Code ${hscode} to ${port_a}`;
          newContent.subTitle = `Find the most current ${country_a} Export Data of ${product_a} under HS Code ${hscode} to the ${port_a}. Obtain important information, including supplier name, product name, unit, quantity, price, and shipping details. Examine these important figures to grow your market business in the ${country_a} market research field.`;
          newContent.content = `Global Trade Data Service provides 100% genuine and the latest ${type_a} Data of ${product_a} under HS Code ${hscode} at ${port_a}. We collect ${type_a} Data of ${product_a} under HS Code ${hscode} at ${port_a} with product and date. ${type_a} Data of ${product_a} under HS Code ${hscode} at ${port_a} helps to analyze ${type_a} price, company name, port, importer and exporter, product description, quantity, market trends, and many other data points. International Trade data of a country helps the global exporters and importers to do analysis and market research to find local suppliers and buyers in that country.`;
        }
      }
      // Condition 13: country-{R:1}/type-{R:2}/product-{R:3}/countryin-{R:4}/port-{R:5}
      else if (country !== "0" && product && !hscode && type && countryin && port) {
        if (lowerType === "import") {
          newContent.title = `Get the latest ${product_a} import data of the ${country_a} from ${countryin_a} to the ${port_a} port.`;
          newContent.subTitle = `Get the latest ${product_a} import data of the ${country_a} from ${countryin_a} to the ${port_a} port. Get access to valuable data containing HS Code, Product Name, Quantity, Unit, Price, Buyer Name, Supplier Name or Port of Unloading, and Shipment records details information. Surpass your competitors with a result-oriented marketing strategy based on data.`;
          newContent.content = `Get authentic ${product_a} import data of the ${country_a} from ${countryin_a} to the ${port_a} port with GTD service. Check all available shipment records of the ${product_a} to the ${country_a}. Look up information using HS Code, product description, quantity, unit, price, port of unloading, and shipping information. Our detailed market intelligence reports provide you with ${country_a} market insights at the click of a button for greater sales opportunities. The global trade data service helps integrate merger businesses with the ${country_a} import data. It boosts your stance in the ${country_a} import data and allows for greater competition amongst peers.`;
        } else {
          newContent.title = `Get the latest ${product_a}  export data of the ${country_a} from ${countryin_a} to the ${port_a} port.`;
          newContent.subTitle = `Get the latest ${product_a} export data of the ${country_a} from ${countryin_a} to the ${port_a} port. Get access to valuable data containing HS Code, Product Name, Quantity, Unit, Price, Buyer Name, Supplier Name or Port of loading, and Shipment records details information. Surpass your competitors with a result-oriented marketing strategy based on data.`;
          newContent.content = `Get authentic ${product_a} export data of the ${country_a} from ${countryin_a} to the ${port_a} port with GTD service. Check all available shipment records of the ${product_a} to the ${country_a}. Look up information using HS Code, product description, quantity, unit, price, port of loading, and shipping information. Our detailed market intelligence reports provide you with ${country_a} market insights at the click of a button for greater sales opportunities. The global trade data service helps integrate merger businesses with the ${country_a} export data. It boosts your stance in the ${country_a} export data and allows for greater competition amongst peers.`;
        }
      }
      // Condition 14: country-{R:1}/type-{R:2}/hscode-{R:3}/countryin-{R:4}/port-{R:5}
      else if (country !== "0" && !product && hscode && type && countryin && port) {
        if (lowerType === "import") {
          newContent.title = `Get ${country_a} Import Data from ${countryin_a} to ${port_a} under HS Code ${hscode}`;
          newContent.subTitle = `Under HS Code ${hscode}, get ${country_a} Import Data from ${countryin_a} to ${port_a}, together with product name, unit, quantity, price, buyer name, port of unloading, and shipment information. Use a powerful, data-driven approach to grow your business in the market.`;
          newContent.content = `GTD Service provides 100% verified and latest HS Code ${hscode} Import Data of the ${country_a} import data from ${countryin_a} at ${port_a}. We collect HS Code ${hscode} Import Data of the ${country_a} from ${countryin_a} at ${port_a} with product and date that help to analyze Import price, company name, port, importer name and exporter name, product description, quantity, market trends, and many other data points. ${country_a} International trade data of a country helps the global exporters and importers to do analysis and market research to find local suppliers and buyers in that country.`;
        } else {
          newContent.title = `Get ${country_a} Export Data from ${countryin_a} to ${port_a} under HS Code ${hscode}`;
          newContent.subTitle = `Under HS Code ${hscode}, get ${country_a} Export Data from ${countryin_a} to ${port_a}, together with product name, unit, quantity, price, supplier name, port of loading, and shipment information. Use a powerful, data-driven approach to grow your business in the market.`;
          newContent.content = `GTD Service provides 100% verified and latest HS Code ${hscode} Export Data of the ${country_a} export data from ${countryin_a} at ${port_a}. We collect HS Code ${hscode} Export Data of the ${country_a} from ${countryin_a} at ${port_a} with product and date that help to analyze Export price, company name, port, importer name and exporter name, product description, quantity, market trends, and many other data points. ${country_a} International trade data of a country helps the global exporters and importers to do analysis and market research to find local suppliers and buyers in that country.`;
        }
      }
      // Condition 15: country-{R:1}/type-{R:2}/product-{R:3}/hscode-{R:4}/countryin-{R:5}/port-{R:6}
      else if (country !== "0" && product && hscode && type && countryin && port) {
        if (lowerType === "import") {
          newContent.subTitle = `Acquire current ${country_a} import data for ${product_a} under HS Code ${hscode} from ${countryin_a} at the ${port_a}. Find the annual import value for ${product_a} from ${countryin_a} with our actual ${country_a} shipping records. Find the most recent market developments, product demand, and company prospects using a worldwide trade data service. Obtain insightful trade data, including HS Code, Product Name, Quantity, Unit, Price, Importer Name, Exporter Name, Port, and Shipping information.`;
          newContent.title = `Import Data of ${product_a}  under HS Code ${hscode} of ${country_a} from ${countryin_a} at the ${port_a}`;
          newContent.content = `We gather HS Code ${hscode} import data of the ${country_a} from ${countryin_a} at ${port_a} with product and date. Examining import price, company name, port, importer and exporter, product description, quantity, market trends, and many more data points helps to compile ${product_a} import information under HS Code ${hscode} for the ${country_a} to ${countryin_a} at ${port_a}. Local supplier names and purchaser names in a country can be discovered through international trade statistics of that country, which also helps worldwide exporters and importers to conduct analysis and market research.`;
        } else {
          newContent.subTitle = `Acquire current ${country_a} export data for ${product_a} under HS Code ${hscode} from ${countryin_a} at the ${port_a}. Find the annual export value for ${product_a} from ${countryin_a} with our actual ${country_a} shipping records. Find the most recent market developments, product demand, and company prospects using a worldwide trade data service. Obtain insightful trade data, including HS Code, Product Name, Quantity, Unit, Price, Importer Name, Exporter Name, Port, and Shipping information.`;
          newContent.title = `Export Data of ${product_a} under HS Code ${hscode} of ${country_a} from ${countryin_a} at the ${port_a}`;
          newContent.content = `We gather HS Code ${hscode} export data of the ${country_a} from ${countryin_a} at ${port_a} with product and date. Examining export price, company name, port, importer and exporter, product description, quantity, market trends, and many more data points helps to compile ${product_a} export information under HS Code ${hscode} for the ${country_a} to ${countryin_a} at ${port_a}. Local supplier names and purchaser names in a country can be discovered through international trade statistics of that country, which also helps worldwide exporters and importers to conduct analysis and market research.`;

        }
      }
      else if (country != "0" && product == "" && hscode != "" && type != "" && countryin == "" && port != "") {
        if (lowerType === "import") {
          newContent.title = `Get Latest ${country_a} Import Data to  ${port_a}  port under HS Code ${hscode}`;
          newContent.subTitle = `Discover potential buyers for your products through our verified ${country_a} Import Data based on shipments to  ${port_a}  port. Search Latest ${country_a} Import Data to  ${port_a}  port under HS Code ${hscode} with product name, Unit, quantity, price, buyer name, and port details.`;
          newContent.content = `Get Latest ${country_a} Import Data of products under HS Code ${hscode} to ${port_a} Port with Global Trade Data Service. Search HS Code ${hscode} Import Data of ${country_a} to ${port_a} Port by product name, quantity, unit, price, importer name, exporter name, country of Origin, port of unloading, and shipping details. Our well researched Bangladesh shipments data helps you in applying analytical approach to your marketing strategy. It saves your time and yields impressive returns. We help your business shine in ${country_a} Market with our authentic ${country_a} Customs Data.`;
        }
        else {

          newContent.title = `Get Latest ${country_a} Export Data from ${port_a} Port under HS Code ${hscode}`;
          newContent.subTitle = `Discover genuine suppiers through our verified ${country_a} Export Data based on shipments from ${port_a} Port. Search Latest ${country_a} Export Data from ${port_a} port under HS Code ${hscode} with product name, Unit, quantity, price, Supplier & buyer name, and port details.`;
          newContent.content = `Get Latest ${country_a} Shipment Data for products under HS Code ${hscode} from ${port_a} Port with Global Trade Data Service. Search HS Code ${hscode} Export Data of ${country_a} from ${port_a} Port by product name, quantity, unit, price, buyer name, seller name, country of Origin, port of loading, and shipping information. These crucial statistics will help you apply analytical approach to your marketing strategy. You can save your time by opting for our result centric data. We help your business grow in ${country_a} Market with our accurate ${country_a} Customs Data.`;
        }

      }
      // Add other conditions similarly...
      // Continue with all other conditions from metatitle.txt

      // Default content if no conditions match
      if (!newContent.title) {
        newContent.title = "Search Global Trade Data by Country, HS Code & Product";
        newContent.subTitle = "Get unlimited access to our online global trade data portal. Perform free search on global trade data by country, HS Code and product. Find detailed shipment records with essential data fields including product description, quantity, unit, value, country of origin/destination, buyer supplier name and port of loading/unloading.";
      }

      setDynamicContent(newContent);
    };

    updateDynamicContent();
  }, [country, type, product, hscode, countryin, port]);



  return (

    <>
      <section className="flex items-center overflow-hidden relative bg-gradient-to-br from-white via-purple-100 to-yellow-100 bg-gradient-45 bg-opacity-50">
        <div className="absolute top-0 w-full h-screen z-0 opacity-20">
          <img src="/images/dots.png" className="w-full" alt="" />
        </div>
        <div className="py-8 mx-auto container px-3 lg:pt-16 lg:pb-10 z-10 relative">
          <nav className="flex pt-20" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-emerald-500"
                >
                  <svg
                    className="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </a>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">

                    Search Global Trade Data
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none text-dark md:text-3xl mt-6 lg:text-4xl">
            {dynamicContent.title}
            {/*Search Global Trade Data by Country, HS Code & Product*/}
          </h1>
      
          <p className="mb-8 text-justify text-base font-normal text-dark">
            {dynamicContent.subTitle}
            {/*Get unlimited access to our online global trade data portal. Perform
            free search on global trade data by country, HS Code and product.
            Find detailed shipment records with essential data fields including
            product description, quantity, unit, value, country of
            origin/destination, buyer supplier name and port of
            loading/unloading.*/}
          </p>



        </div>
      </section>

      <section className="container mx-auto px-4 md:px-0 py-10">
        <Search />
        {/* Selected Filters Display */}
        <div className="flex flex-wrap md:mx-auto gap-2 mt-4 px-4 ml-6 px-4 mx-4 mt-4 items-left justify-left md:max-w-screen-md lg:max-w-screen-lg">
          {country && (
            <span className="flex items-center bg-orange-100 text-orange-800 text-xs font-medium px-3 py-1 rounded-full">
              Country: {country}

            </span>
          )}
          {product && (
            <span className="flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
              Product: {product}
              <button  className="ml-2 text-blue-500 hover:text-blue-700">&times;</button>
            </span>
          )}
          {hscode && (
            <span className="flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">
              HS Code: {hscode}
              <button  className="ml-2 text-green-500 hover:text-green-700">&times;</button>
            </span>
          )}
          {countryin && (
            <span className="flex items-center bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-1 rounded-full">
              CountryIn: {countryin}
              <button className="ml-2 text-purple-500 hover:text-purple-700">&times;</button>
            </span>
          )}
          {port && (
            <span className="flex items-center bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-1 rounded-full">
              Port: {port}
              <button  className="ml-2 text-pink-500 hover:text-pink-700">&times;</button>
            </span>
          )}
        </div>
      </section>

      <section className="pb-20 pt-10">
        <div className="container-xl px-3 md:px-14 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-baseline">
            <div className="p-3 rounded-xl bg-gray-100">
              <h6 className="text-xl font-bold flex items-center py-1 px-2 rounded-md bg-white mb-2">
                <span className="me-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Filter
              </h6>
              <div className="p-3 bg-white mb-3 rounded-md">
                <h6
                  className="text-base font-semibold cursor-pointer flex justify-between items-center"
                  onClick={() => setHscode_search(!hscode_search)}
                >
                  HS Code
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`size-4 transform transition-transform duration-300 ${!hscode_search ? "rotate-45 stroke-emerald-500" : ""
                        }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </h6>
                <ul
                  className={`${!hscode_search ? "h-[150px] opacity-100" : "h-0 opacity-0"
                    } transition-all duration-300 ease-in-out overflow-y-scroll vertical-scroll mt-1`}
                >
                  {filterhsCodes.map((item, index) => {
                    const match = item.match(/hs_code:\s*(.*),\s*Count:\s*(\d+)/);
                    if (!match) return null;
                    const [, hs_code, count] = match;
                    return (
                      <li key={index}>
                        <button
                          className="text-sm text-gray-700 hover:text-emerald-500 flex items-center gap-1"
                          onClick={() => hs_search_click(hs_code)}
                        >
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-3"
                            >
                              <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                              <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          {hs_code.trim()} ({parseInt(count).toLocaleString()})
                        </button>

                      </li>
                    );
                  })}

                </ul>
              </div>
              <div className="p-3 bg-white mb-3 rounded-md border-b border-gray-50">
                <h6
                  className="text-base font-semibold cursor-pointer flex justify-between items-center"
                  onClick={() => setcountry_search(!country_search)}
                >
                  Country
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`size-4 transform transition-transform duration-300 ${country_search ? "rotate-45 stroke-emerald-500" : ""
                        }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </h6>
                <ul
                  className={`${country_search ? "h-[150px] opacity-100" : "h-0 opacity-0"
                    } transition-all duration-300 ease-in-out overflow-y-scroll vertical-scroll mt-1`}
                >
                  {filterCountries.map((item, index) => {
                    const match = item.match(/(?:origin_country|destination_country):\s*(.*),\s*Count:\s*(\d+)/);
                    if (!match) return null;
                    const [, country, count] = match;
                    return (
                      <li key={index}>
                        <button
                          className="text-sm text-gray-700 hover:text-emerald-500 flex items-center gap-1"
                          onClick={() => countryin_search_click(country)}
                        >
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-3"
                            >
                              <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                              <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          {country.trim()} ({parseInt(count).toLocaleString()})
                        </button>

                      </li>
                    );
                  })}

                </ul>
              </div>
              <div className="p-3 bg-white mb-3 rounded-md border-b border-gray-50">
                <h6
                  className="text-base font-semibold cursor-pointer flex justify-between items-center"
                  onClick={() => setUnloading_search(!unloading_search)}
                >
                  {type == "import" ? ("PORT OF UNLOADING") : ("PORT OF LOADING")}
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`size-4 transform transition-transform duration-300 ${unloading_search ? "rotate-45 stroke-emerald-500" : ""
                        }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </h6>
                <ul
                  className={`${unloading_search ? "h-[150px] opacity-100" : "h-0 opacity-0"
                    } transition-all duration-300 ease-in-out overflow-y-scroll vertical-scroll mt-1`}
                >
                  {filterports.map((item, index) => {
                    const match = item.match(/Port_of_(.*?):\s*(.*),\s*Count:\s*(\d+)/);
                    if (!match) return null;
                    const [, dynamicKey, value, count] = match;
                    return (
                      <li key={index}>
                        <button
                          className="text-sm text-gray-700 hover:text-emerald-500 flex items-center gap-1"
                          onClick={() => port_search_click(value)}
                        >
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-3"
                            >
                              <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                              <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          {value.trim()} ({parseInt(count).toLocaleString()})
                        </button>

                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="md:col-span-4">
              {loading ? (
                <p className="mt-10">Loading data...</p>
              ) : (
                <div className="relative overflow-x-auto w-full shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-black dark:text-gray-400 overflow-visible">

                    <thead className="text-xs text-gray-700 uppercase ">
                      <tr>
                        <th scope="col" className="px-6 py-3 border-b bg-gray-50">
                          DATE
                        </th>
                        <th scope="col" className="px-6 py-3 border-b">
                          HS CODE
                        </th>
                        <th scope="col" className="px-6 py-3 border-b bg-gray-50">
                          PRODUCT DESCRIPTION
                        </th>
                        <th scope="col" className="px-6 py-3 border-b">
                          EXPORTER
                        </th>
                        <th scope="col" className="px-6 py-3 border-b bg-gray-50">
                          QUANTITY
                        </th>
                        <th scope="col" className="px-6 py-3 border-b">
                          UNIT
                        </th>
                        <th scope="col" className="px-6 py-3 border-b bg-gray-50">
                          TOTAL VALUE USD
                        </th>
                        <th scope="col" className="px-6 py-3 border-b">
                          {type == "import" ? ("ORIGIN COUNTRY") : ("DESTINATION COUNTRY")}
                        </th>
                        <th scope="col" className="px-6 py-3 border-b bg-gray-50">
                          {type == "import" ? ("PORT OF UNLOADING") : ("PORT OF LOADING")}
                        </th>
                        <th scope="col" className="px-6 py-3 border-b">
  ACTION
</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, i) => (
                        <tr key={i} className="border-b text-black border-gray-200 dark:border-gray-700">
                          <td className="p-2 text-sm">{item._source.date}</td>
                          <td className="p-2 text-sm">{item._source.hs_code}</td>
                          <td className="p-2 text-sm bg-gray-50 max-w-36 relative group">
                            <p className="truncate">{item._source.Product_Description}</p>

                            {/* Tooltip */}
                            <div className="absolute z-50 hidden group-hover:block bg-black text-white text-xs rounded p-2 max-w-xs whitespace-normal left-full top-1/2 -translate-y-1/2 ml-2 pointer-events-none">
                              {item._source.Product_Description}
                            </div>
                          </td>

                          <td className="p-2 text-sm">{item._source.exporter}</td>
                          <td className="p-2 text-sm bg-gray-50">{item._source.quantity}</td>
                          <td className="p-2 text-sm">{item._source.unit}</td>
                          <td className="p-2 text-sm bg-gray-50">{item._source.total_value_usd}</td>
                          {/* <td className="p-2 text-sm">{item._source.origin_country}</td>
                        <td className="p-2 text-sm bg-gray-50">{item._source.Port_of_Unloading}</td> */}
                          {/* {type == "import" ? (
                          `<td className="p-2 text-sm">{item._source.origin_country}</td>
                          <td className="p-2 text-sm bg-gray-50">{item._source.Port_of_Unloading}</td>`
                        ) : (
                          `<td className="p-2 text-sm">{item._source.destination_country}</td>
                           <td className="p-2 text-sm bg-gray-50">{item._source.Port_of_loading}</td>`
                        )} */}
                          <td className="p-2 text-sm">{type == "import" ? (item._source.origin_country) : (item._source.destination_country)}</td>
                          <td className="p-2 text-sm bg-gray-50">{type == "import" ? (item._source.Port_of_Unloading) : (item._source.Port_of_Loading)}</td>
                          <td className="p-2 text-sm text-center">
  <button
    onClick={() => setShowUnlockForm(true)}
    className="px-4 py-2 text-xs font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 cursor-pointer"
  >
    Unlock Full Data
  </button>
</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* {JSON.stringify(data)} */}

                </div>
              )}
              {/* <!-- Pagination --> */}
              <nav
                className="flex items-center gap-x-1 mt-3"
                aria-label="Pagination"
              >
                <div
onClick={()=>{setShowUnlockForm(true)}}
                  className="min-h-[38px] min-w-[38px] cursor-pointer py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                  aria-label="Previous"
                  disabled=""
                >
                  <svg
                    className="shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                  <span >Previous</span>
                </div>
                <div className="flex items-center gap-x-1">
                  <a
                    href={`https://gtdservice.com/contact`}
                    className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-emerald-500 text-white py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none"
                    aria-current="page"
                  >
                    1
                  </a>
                  <div
                    onClick={()=>{setShowUnlockForm(true)}}
                    className="min-h-[38px] min-w-[38px] cursor-pointer flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                    aria-current="page"
                  >
                    2
                  </div>
                  <div
                    onClick={()=>{setShowUnlockForm(true)}}
                    className="min-h-[38px] min-w-[38px] flex cursor-pointer justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    3
                  </div>
                </div>
                <div
                  onClick={()=>{setShowUnlockForm(true)}}
                  className="min-h-[38px] min-w-[38px] cursor-pointer py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                  aria-label="Next"
                >
                  <span>Next</span>
                  <svg
                    className="shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </div>
              </nav>
              {/* <!-- End Pagination --> */}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 mybg">
        <div className="container px-3 md:px-0 mx-auto">
          <div className="md:grid grid-cols-2 items-center">
            <div>
              <h3 className="mx-auto mb-2 text-balance text-4xl font-bold leading-snug my-2">
                Search Global Export-Import Trade Data
              </h3>
              <p className="text-base text-gray-700">
              {dynamicContent.content}
                {/*GTD Service provides genuine and up-to-date import export data for mobile phones categorized under HS code 85 in the USA. Get the gathered mobile import data and export data under HS code 85, with product and date. Global Trade Data Service assists in analyzing import price, company name, port, importer, exporter, product descriptions, quantity, market trends, and numerous other data points. International import and export trade statistics of a nation assist the international importers and exporters in conducting analysis and market research to locate local buyers and suppliers in that nation.*/}
              </p>
              <div className="flex mt-5 gap-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 fill-emerald-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-base text-gray-700">
                  Use data-driven decisions to speed up your export-import business and reduce risk.
                </p>
              </div>
              <div className="flex mt-5 gap-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 fill-emerald-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <p className="text-base text-gray-700">
                  Sync your business model with international strategic planning and be ahead.
                </p>
              </div>
            </div>
            <div>
              <img src="/images/search_data.png" className="w-100" alt="Search Global Export-Import Trade Data" title='Search Global Export-Import Trade Data' />
            </div>
          </div>
          <div className="mt-16 md:grid md:grid-cols-4 gap-4">
            <div className="p-3 bg-white text-center border rounded-lg">
              <img
                src="/images/icons/network.svg"
                className="w-16 mb-3 mx-auto"
                alt="Expand Your Business Network"
                
              />
              <h6 className="text-md text-black font-semibold">
                Expand Your Business Network
              </h6>
            </div>
            <div className="p-3 bg-white text-center border rounded-lg">
              <img
                src="/images/icons/target.svg"
                className="w-16 mb-3 mx-auto"
                alt="Risk Free Market Entry Strategy"
              />
              <h6 className="text-md text-black font-semibold">
                Risk Free Market Entry Strategy
              </h6>
            </div>
            <div className="p-3 bg-white text-center border rounded-lg">
              <img
                src="/images/icons/worldwide.svg"
                className="w-16 mb-3 mx-auto"
                alt="Authentic Export-Import trade data"
                
              />
              <h6 className="text-md text-black font-semibold">
                Authentic Export-Import trade data
              </h6>
            </div>
            <div className="p-3 bg-white text-center border rounded-lg">
              <img
                src="/images/icons/reliable.svg"
                className="w-16 mb-3 mx-auto"
                alt="Lightning and Reliable Export-Import Trade data"
              />
              <h6 className="text-md text-black font-semibold">
                Lightning and Reliable Export-Import Trade data
              </h6>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <UnlockDataForm
                          isOpen={showUnlockForm}
                          onClose={() => setShowUnlockForm(false)}
                          country={country}
                        />
    </>
  );
}

export default ClientPage;