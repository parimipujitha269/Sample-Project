import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CareerChoice = () => {
  useGSAP(() => {
    gsap.from(".heading", {
      opacity: 0,
      duration: 1,
    });
  });

  // Sample data for dropdown options
  const branches = ["Computer Science", "Electronics", "Mechanical", "Civil", "Biotechnology"];
  const specializations = {
    "Computer Science": ["AI & Machine Learning", "Software Engineering", "Cybersecurity"],
    Electronics: ["VLSI Design", "Embedded Systems", "Robotics"],
    Mechanical: ["Automotive Engineering", "Thermal Engineering", "Robotics"],
    Civil: ["Structural Engineering", "Environmental Engineering", "Geotechnical Engineering"],
    Biotechnology: ["Genomics", "Bioinformatics", "Microbiology"],
  };
  const addOns = ["Data Science Certification", "Project Management", "3D Printing Course", "Bioinformatics Training", "Embedded Systems Workshop"];

  // State for selected values
  const [selectedOptions, setSelectedOptions] = useState(
    branches.map(branch => ({
      branch,
      specialization: specializations[branch][0],
      addOn: addOns[0],
    }))
  );

  // Handler to update selected values
  const handleSelectionChange = (index, type, value) => {
    setSelectedOptions(prevOptions =>
      prevOptions.map((option, i) =>
        i === index ? { ...option, [type]: value } : option
      )
    );
  };

  return (
    <div className='w-full h-full bg-white p-6'>
      <h1 className='heading text-center text-red-500 font-bold font-[oswald] text-4xl mt-6 tracking-wide'>
        Career Choice
      </h1>
      <table className='min-w-full border-collapse border border-gray-300 mt-4'>
        <thead>
          <tr>
            <th className='border border-gray-300 p-2'>Branch</th>
            <th className='border border-gray-300 p-2'>Specialization</th>
            <th className='border border-gray-300 p-2'>Add-ons</th>
          </tr>
        </thead>
        <tbody>
          {selectedOptions.map((option, index) => (
            <tr key={index}>
              <td className='border border-gray-300 p-2'>
                <select
                  value={option.branch}
                  onChange={e => handleSelectionChange(index, "branch", e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {branches.map(branch => (
                    <option key={branch} value={branch}>{branch}</option>
                  ))}
                </select>
              </td>
              <td className='border border-gray-300 p-2'>
                <select
                  value={option.specialization}
                  onChange={e => handleSelectionChange(index, "specialization", e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {(specializations[option.branch] || []).map(spec => (
                    <option key={spec} value={spec}>{spec}</option>
                  ))}
                </select>
              </td>
              <td className='border border-gray-300 p-2'>
                <select
                  value={option.addOn}
                  onChange={e => handleSelectionChange(index, "addOn", e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {addOns.map(addOn => (
                    <option key={addOn} value={addOn}>{addOn}</option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CareerChoice;
