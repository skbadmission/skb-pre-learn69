import { fetchSheet } from "./api.js";

let teachers = [];

export async function initAuth(){
  teachers = await fetchSheet("teachers");
}

export function handleLogin(){
  const u = document.getElementById('loginUser').value.trim();
  const p = document.getElementById('loginPass').value.trim();

  if(u==="admin" && p==="admin"){
    return {role:"admin", name:"Admin"};
  }

  const t = teachers.find(x => x.username===u && x.password===p);

  if(t){
    return {
      role: t.role,
      name: t["ชื่อ"],
      level: t["ระดับชั้น"],
      room: t["ห้อง"]
    };
  }

  return null;
}