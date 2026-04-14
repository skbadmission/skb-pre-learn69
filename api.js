import { SHEET_ID } from "./config.js";

export async function fetchSheet(sheetName){
  const url = `https://opensheet.elk.sh/${SHEET_ID}/${sheetName}`;
  const res = await fetch(url);
  return await res.json();
}

// POST ไป Apps Script
export async function postData(url, data){
  await fetch(url,{
    method:"POST",
    body: JSON.stringify(data)
  });
}