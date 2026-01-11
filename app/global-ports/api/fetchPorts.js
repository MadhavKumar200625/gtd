const fetchPortsByCountry = async (country) => {
  const res = await fetch('http://103.30.72.94:8011/globalPortLoading', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      source: country.toLowerCase(),
      type: 'master',
      country_name: country.toLowerCase(),
      from_: '1',
      to: '5'
    })
  });

  if (!res.ok) throw new Error(`Error fetching ports for ${country}`);

  const data = await res.json();
  return {
    country,
    code: countryCodeMap[country], // define code mapping separately
    ports: data.ports || []
  };
};

export default fetchPortsByCountry;
