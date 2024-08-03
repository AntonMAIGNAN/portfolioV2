// // src/components/Projects/index.js
// import React from 'react';
// import skills from './skills.json';

// function Skills() {
//     return (
//       <div className="container mx-auto p-4">
//         {Object.keys(skills[0]).map((categoryKey, index) => {
//           const category = skills[0][categoryKey];
//           return (
//             <div key={index} className="mb-6">
//               <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
//               <ul className="grid grid-cols-2 gap-4">
//                 {category.items.map((item, idx) => (
//                   <li key={idx} className="flex items-center space-x-4">
//                     <img src={item.image} alt={item.title} className="w-10 h-10" />
//                     <span>{item.title}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
  
//   export default Skills;
export {};
