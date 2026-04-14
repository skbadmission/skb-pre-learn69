const API_URL = "https://script.google.com/macros/s/AKfycbyiYhv4pUsdKq4naRTrCmdr6UWncYP6eC1LCAzlJgVtVXTGDr3hK1DbIxK7vfNYKnTiWw/exec";

// ⭐ render ตารางเช็คชื่อ
export function renderAttendance(){

  const date = document.getElementById('attDate')?.value;
  const level = document.getElementById('attLevel')?.value;
  const room = document.getElementById('attRoom')?.value;
  const period = document.getElementById('attPeriod')?.value;

  if(!date || !level || !room || !period) return;

  const list = window.students.filter(s =>
    s["ระดับชั้น"] === level &&
    String(s["ห้อง"]) === String(room)
  );

  const body = document.getElementById('attendanceBody');
  const empty = document.getElementById('attEmpty');

  body.innerHTML = '';

  if(list.length === 0){
    empty?.classList.remove('hidden');
    return;
  }else{
    empty?.classList.add('hidden');
  }

  list.sort((a,b)=> Number(a["เลขที่"]) - Number(b["เลขที่"]) );

  list.forEach(s => {

    const att = window.attendance.find(a =>
      a.student_id == s.student_id &&
      a.date == date &&
      a.period == period
    );

    const status = att?.status || '';

    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td class="px-4 py-2 font-medium">${s["เลขที่"]}</td>
      <td class="px-4 py-2">${s["ชื่อ"]} ${s["นามสกุล"]}</td>
      <td class="px-4 py-2 text-center">
        <div class="flex justify-center gap-2 flex-wrap">
          <button onclick="setStatus('${s.student_id}','present')" 
            class="px-3 py-2 rounded-lg text-sm ${status==='present'?'bg-green-500 text-white':'bg-gray-200'}">
            มา
          </button>
          <button onclick="setStatus('${s.student_id}','absent')" 
            class="px-3 py-2 rounded-lg text-sm ${status==='absent'?'bg-red-500 text-white':'bg-gray-200'}">
            ขาด
          </button>
          <button onclick="setStatus('${s.student_id}','leave')" 
            class="px-3 py-2 rounded-lg text-sm ${status==='leave'?'bg-yellow-400 text-white':'bg-gray-200'}">
            ลา
          </button>
        </div>
      </td>
    `;

    body.appendChild(tr);
  });
}

// ⭐ บันทึกสถานะ (POST ไป Apps Script)
export async function setStatus(student_id, status){

  const date = document.getElementById('attDate').value;
  const period = document.getElementById('attPeriod').value;

  try{
    await fetch(API_URL,{
      method: "POST",
      body: JSON.stringify({
        student_id,
        date,
        period,
        status
      })
    });

    console.log("✅ บันทึกแล้ว");

  }catch(err){
    console.error("❌ บันทึกไม่สำเร็จ", err);
  }
}

// ⭐ expose ให้ onclick ใช้ได้
window.setStatus = setStatus;