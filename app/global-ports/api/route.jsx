export async function POST(req) {
    const countries = [
      "Argentina", "bangladesh", "bolivia", "botswana", "cameroon", "chile",
      "colombia", "costa rica", "cote d ivoire", "ecuador", "ethiopia", "fiji",
      "ghana", "guyana", "india", "indonesia", "kenya", "kosovo", "lesotho",
      "liberia", "malawi", "mexico", "nicaragua", "nigeria", "pakistan",
      "panama", "paraguay", "peru", "philippines", "russia", "singapore",
      "sao_tome_and_principe", "tanzania", "turkey", "ukraine", "uruguay",
      "venezuela", "vietnam", "zambia", "zimbabwe"
    ];
  
    try {
      const results = await Promise.all(
        countries.map(async (country) => {
          const res = await fetch("http://103.30.72.94:8011/globalPortLoading", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic YWJjOmFiY0AxMjM=',
              },
            body: JSON.stringify({
              source: country.toLowerCase().replaceAll(' ', '_'),
              type: "master",
              country_name: country.toLowerCase(),
              from_: "1",
              to: "5"
            }),
          });
  
          const data = await res.json();
          return { country, data };
        })
      );
  
      return Response.json(results);
    } catch (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
  }
  