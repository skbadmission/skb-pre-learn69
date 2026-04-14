import { fetchSheet } from "./api.js";

let students = [];

export async function loadStudents(){
  students = await fetchSheet("students");
}

export function getStudents(){
  return students;
}