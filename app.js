import { startRealtime } from "./realtime.js";
import { renderAttendance } from "./attendance.js";

let students = [];
let attendance = [];
let teachers = [];

// ⭐ global ให้ไฟล์อื่นใช้
window.students = students;
window.attendance = attendance;
window.teachers = teachers;

// แปลง array → object
function mapSheetData(raw){
  const headers = raw[0];
  return raw.slice(1).map(row=>{
    const obj = {};
    headers.forEach((h,i)=> obj[h] = row[i]);
    return obj;
  });
}

window.addEventListener('DOMContentLoaded', () => {

  startRealtime((data)=>{

    // ⭐ แปลงข้อมูลจาก Google Sheet
    students = mapSheetData(data.students);
    attendance = mapSheetData(data.attendance);
    teachers = mapSheetData(data.teachers);

    // ⭐ update global
    window.students = students;
    window.attendance = attendance;
    window.teachers = teachers;

    console.log("⚡ Realtime update แล้ว");

    // ⭐ render หน้าเช็คชื่อ
    renderAttendance();
  });

});