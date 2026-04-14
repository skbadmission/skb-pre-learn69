# ระบบเช็คชื่อนักเรียน การเรียนปรับพื้นฐาน

โปรเจคนี้พร้อม deploy ขึ้น GitHub Pages ได้ทันที เพราะ frontend เป็นไฟล์ static และ backend ใช้ Google Apps Script แยกอยู่แล้ว

## โครงสร้างที่ใช้ deploy

- `index.html` คือ entry หลักของระบบ
- `API_URL` ที่ใช้งานจริงถูกตั้งไว้ใน `index.html`
- Google Apps Script ที่เชื่อมอยู่ตอนนี้คือ
  - `https://script.google.com/macros/s/AKfycbwpkSzJX6QmpQUNbT7VLkrXVYvNDIVjIUZ35rmID1w-m_qSGRHcrSOadEh1cQBJ_IQtbA/exec`

## Deploy ขึ้น GitHub Pages

1. สร้าง repository บน GitHub
2. อัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้ขึ้น repo
3. ไปที่ `Settings > Pages`
4. ที่ `Build and deployment`
5. เลือก `Deploy from a branch`
6. เลือก branch `main`
7. เลือกโฟลเดอร์ `/ (root)`
8. กด `Save`

หลังจากนั้น GitHub Pages จะสร้าง URL ให้ เช่น

- `https://<your-username>.github.io/<repo-name>/`

## ก่อนออนไลน์จริง

- ทดสอบ login `admin / admin`
- ทดสอบ login ครูจริง 1 บัญชี
- ทดสอบบันทึก attendance
- ทดสอบบันทึก behavior
- ทดสอบหน้า report

## หมายเหตุ

- มีไฟล์ `.nojekyll` เพื่อให้ GitHub Pages เสิร์ฟไฟล์ตรง ๆ แบบ static
- ถ้าเปลี่ยน Apps Script deployment ในอนาคต ต้องอัปเดต `API_URL` ใน `index.html`
