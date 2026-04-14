let currentVersion = null;

export async function startRealtime(callback){

  const API_URL = "https://script.google.com/macros/s/AKfycbyiYh4pUsdKq4naRTrCmdr6UWncYP6eC1LCAzlJgVtVXTGDr3hK1DbIxK7vfNYKnTiWw/exec";

  async function check(){

    try{
      const res = await fetch(API_URL);
      const data = await res.json();

      if(currentVersion !== data.version){
        currentVersion = data.version;

        console.log("⚡ Realtime update!");

        callback(data); // ส่งข้อมูลกลับ
      }

    }catch(err){
      console.error("Realtime error", err);
    }

    setTimeout(check, 1500); // ⭐ เช็คทุก 1.5 วิ
  }

  check();
}
