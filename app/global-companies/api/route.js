// /app/global-companies/api/route.js

export async function POST(req) {
  const urls = [
    "http://103.30.72.94:8011/companyReport/valueCount",
    "http://103.30.72.94:8011/companyReport/uniqueBuyerSupplier",
    "http://103.30.72.94:8011/companyReport/topHSCode",
    "http://103.30.72.94:8011/companyReport/topOriginCountryDestinationCountry",
    "http://103.30.72.94:8011/companyReport/topPortOfLoadingUnloading",
    "http://103.30.72.94:8011/companyReport/topBuyerSupplier",
    "http://103.30.72.94:8011/companyReport/topExporterImporter",
  ];

  const body = await req.json();

  try {
    const results = await Promise.all(
      urls.map(async (url) => {
        try {
          const res = await fetch(url, {
            method: "POST",
            headers: {
              Authorization: "Basic YWJjOmFiY0AxMjM=",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          });

          const text = await res.text();

          // Ensure the response is valid JSON
          if (!text) return { error: "Empty response", url };
          try {
            return JSON.parse(text);
          } catch (jsonErr) {
            return { error: "Invalid JSON", url, raw: text };
          }

        } catch (fetchErr) {
          return { error: true, message: fetchErr.message, url };
        }
      })
    );

    return Response.json(results);
  } catch (err) {
    console.error("Server-side error:", err);
    return Response.json({ error: true, message: err.message }, { status: 500 });
  }
}
