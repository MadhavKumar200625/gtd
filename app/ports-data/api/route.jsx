export async function POST(req) {
    const body = await req.json();
    debugger;
    console.log(body)
    const res = await fetch('http://103.30.72.94:8001/globalPortLoading', {
        
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic YWJjOmFiY0AxMjM=',
      },
      
      body: JSON.stringify(body),
    });
    
    const data = await Json.parse(res.json());
    console.log(data);
    return Response.json(data);
  }
