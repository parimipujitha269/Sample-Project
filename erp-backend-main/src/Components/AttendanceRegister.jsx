import React, { useState } from "react";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const AttendanceRegister = () => {
  useGSAP(() => {
    gsap.from(".heading", {
      opacity: 0,
      duration: 1,
    });
  });

  // Sample data for students with attendance status
  const [students, setStudents] = useState([
    { name: "Jahnavi", status: "Present", date: "2024-11-01" },
    { name: "Sekhar", status: "Absent", date: "2024-11-01" },
    { name: "Satya", status: "Present", date: "2024-11-01" },
    { name: "Yash", status: "Absent", date: "2024-11-01" },
  ]);

  // Toggle attendance status
  const toggleStatus = (index) => {
    setStudents((prevStudents) => 
      prevStudents.map((student, i) =>
        i === index
          ? { ...student, status: student.status === "Present" ? "Absent" : "Present" }
          : student
      )
    );
  };

  return (
    <div className='w-full h-full bg-white p-6'>
      <h1 className='heading text-center text-red-500 font-bold font-[oswald] text-4xl mt-6 tracking-wide'>
        Attendance Register
      </h1>
      <table className='min-w-full border-collapse border border-gray-300 mt-4'>
        <thead>
          <tr>
            <th className='border border-gray-300 p-2'>Student Name</th>
            <th className='border border-gray-300 p-2'>Attendance Status</th>
            <th className='border border-gray-300 p-2'>Date</th>
            <th className='border border-gray-300 p-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td className='border border-gray-300 p-2'>{student.name}</td>
              <td className='border border-gray-300 p-2'>{student.status}</td>
              <td className='border border-gray-300 p-2'>{student.date}</td>
              <td className='border border-gray-300 p-2'>
                <button
                  onClick={() => toggleStatus(index)}
                  className={`py-1 px-4 rounded-md transition duration-200 ${
                    student.status === "Present" 
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-red-500 text-white hover:bg-red-600"
                  }`}
                >
                  {student.status === "Present" ? "Mark Absent" : "Mark Present"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceRegister;
