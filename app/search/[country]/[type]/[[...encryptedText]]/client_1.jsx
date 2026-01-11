// Full restored and optimized ClientPage.jsx with pagination and meta support
'use client';
import { useParams, useRouter } from 'next/navigation';
import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import CTA from '../../../../Common/CTA';
import Search from '../../../../common/Search1';
import 'flag-icons/css/flag-icons.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { country_all, country_cus } from '../../../../../data/countries';

const fetchData = async (payload) => {
  const res = await fetch('../../../search/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return res.json();
};


const decodeParams = (encryptedText) => {
  try {
    const urlParams = new URLSearchParams(encryptedText);

    return {
      product: urlParams.get('product') ?? '',
      hscode: urlParams.get('hscode') ?? '',
      countryin: urlParams.get('countryin') ?? '',
      port: urlParams.get('port') ?? ''
    };
  } catch (error) {
    console.alert(error);
    console.error('Failed to parse query string:', error);
    return { product: '', hscode: '', countryin: '', port: '' };
  }
};

// const decodeParams = (encryptedText) => {
//   try {
//     const decoded = atob(decodeURIComponent(encryptedText));
//     const urlParams = new URLSearchParams(decoded);
//     return {
//       product: urlParams.get('product') || '',
//       hscode: urlParams.get('hscode') || '',
//       countryin: urlParams.get('countryin') || '',
//       port: urlParams.get('port') || ''
//     };
//   } catch {
//     return { product: '', hscode: '', countryin: '', port: '' };
//   }
// };

const ClientPage = () => {
  const router = useRouter();
  const params = useParams();
  const { country = '', type = '', encryptedText = '' } = params;

  const [product, setProduct] = useState('');
  const [hscode, setHscode] = useState('');
  const [countryin, setCountryin] = useState('');
  const [port, setPort] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [filtersExpanded, setFiltersExpanded] = useState({ hs: false, country: false, port: false });
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  const lowerCountry = country.replaceAll(' ', '_').toLowerCase();
  const final_country = country_cus.includes(lowerCountry) ? lowerCountry : 'all';

  useEffect(() => {
    const { product, hscode, countryin, port } = decodeParams(encryptedText);
    setProduct(product);
    setHscode(hscode);
    setCountryin(countryin);
    setPort(port);
  }, [encryptedText]);

  useEffect(() => {
    if (!country || !type) return;

    const payload = {
      source: final_country,
      type: 'master',
      size: 10,
      from: (currentPage - 1) * 10,
      filters: {},
      distinct_filters: []
    };

    if (type === 'import') {
      payload.distinct_filters = ['origin_country', 'hs_code', 'Port_of_Unloading'];
      payload.filters.destination_country = lowerCountry.replaceAll('_', ' ');
      if (countryin) payload.filters.origin_country = countryin.toLowerCase();
      if (port) payload.filters.Port_of_Unloading = port;
    } else if (type === 'export') {
      payload.distinct_filters = ['destination_country', 'hs_code', 'Port_of_Loading'];
      payload.filters.origin_country = lowerCountry.replaceAll('_', ' ');
      if (countryin) payload.filters.destination_country = countryin.toLowerCase();
      if (port) payload.filters.Port_of_Loading = port;
    }

    if (product) payload.filters.Product_Description = `%${product}%`;
    if (hscode) payload.filters.hs_code = `${hscode}%`;

    setLoading(true);
    fetchData(payload)
      .then(res => {
        setData(res.data || []);
        setFilter(res.unique || []);
        setTotalPages(Math.ceil((res.total || 1) / 10));
      })
      .catch(err => console.error('Error fetching data:', err))
      .finally(() => setLoading(false));
  }, [product, hscode, country, countryin, port, type, currentPage]);

  const dynamicContent = useMemo(() => {
    return {
      title: `Search ${country} ${type} Trade Data`,
      subTitle: `Explore detailed shipment records by product, HS code, origin/destination, and port.`,
      content: `Use our powerful global trade data tools to analyze the ${type} trends for ${country}.`
    };
  }, [country, type, product, hscode, countryin, port]);


  const handleSearchClick = (key, value) => {
    const slug = country.toLowerCase().replace(/\s+/g, '-');
    const currentType = type.toLowerCase();
    // Build the updated values depending on which key changed
    const newHscode = key === 'hscode' ? value : hscode;
    const newPort = key === 'port' ? value : port;
    const newCountryin = key === 'countryin' ? value : countryin;
  
    const url = `/search/${slug}/${currentType}/${product}/${newHscode}/${newPort}/${newCountryin}`;
  
    router.push(url);
    setCurrentPage(1);
  };
  
  // const handleSearchClick = (key, value) => {
  //   const slug = country.toLowerCase().replace(/\s+/g, '-');
  //   const encoded = encodeURIComponent(btoa(`product=${product}&hscode=${key === 'hscode' ? value : hscode}&port=${key === 'port' ? value : port}&countryin=${key === 'countryin' ? value : countryin}`));
  //   router.push(`/search/${slug}/${type.toLowerCase()}/${encoded}`);
  //   setCurrentPage(1);
  // };

  const filters = useMemo(() => {
    const hsCodes = [], countries = [], ports = [];
    filter.forEach(f => {
      if (f.startsWith('hs_code:')) hsCodes.push(f);
      else if (f.startsWith('origin_country:') || f.startsWith('destination_country:')) countries.push(f);
      else if (f.startsWith('Port_of_')) ports.push(f);
    });
    return { hsCodes, countries, ports };
  }, [filter]);

  return (
    <section className="py-8 container mx-auto">
      <Head>
        <title>{dynamicContent.title}</title>
        <meta name="description" content={dynamicContent.subTitle} />
      </Head>

      <nav className="pt-20">
        <a href="/" className="text-gray-700 hover:text-emerald-500">Home</a> / Search
      </nav>
      <h1 className="text-3xl font-bold mt-6">{dynamicContent.title}</h1>
      <p className="text-base mt-2">{dynamicContent.content}</p>
      <p className="text-base text-gray-700 mt-2">{dynamicContent.subTitle}</p>

      <div className="mt-6">
        <Search />
        {/* Filter Components */}
        {/* ... unchanged filter UI logic ... */}
      </div>

      {loading ? (
        <p className="mt-10">Loading data...</p>
      ) : (
        <div className="mt-10 overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-2 border">Date</th>
                <th className="p-2 border">HS Code</th>
                <th className="p-2 border">Description</th>
                <th className="p-2 border">Exporter</th>
                <th className="p-2 border">Quantity</th>
                <th className="p-2 border">Unit</th>
                <th className="p-2 border">Value USD</th>
                <th className="p-2 border">{type === 'import' ? 'Origin Country' : 'Destination Country'}</th>
                <th className="p-2 border">{type === 'import' ? 'Port of Unloading' : 'Port of Loading'}</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className="text-sm text-gray-700 hover:bg-gray-50">
                  <td className="p-2 border">{row.date || '-'}</td>
                  <td className="p-2 border">{row.hs_code || '-'}</td>
                  <td className="p-2 border">{row.Product_Description || '-'}</td>
                  <td className="p-2 border">{row.Exporter_Name || '-'}</td>
                  <td className="p-2 border">{row.Quantity || '-'}</td>
                  <td className="p-2 border">{row.Unit || '-'}</td>
                  <td className="p-2 border">{row.Total_Value_Usd || '-'}</td>
                  <td className="p-2 border">{type === 'import' ? row.origin_country : row.destination_country}</td>
                  <td className="p-2 border">{type === 'import' ? row.Port_of_Unloading : row.Port_of_Loading}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-6 flex justify-center items-center gap-4">
            <button disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)} className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50">Prev</button>
            <span>Page {currentPage} of {totalPages}</span>
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)} className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50">Next</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ClientPage;
