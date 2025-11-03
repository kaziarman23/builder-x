const COMPONENTS = [
  { key: "Navbar", title: "Navbar", example: "Logo | Links | Cart" },
  { key: "Hero", title: "Hero", example: "Big headline + CTA" },
  { key: "Banner", title: "Banner", example: "Promotional banner" },
  { key: "NewCourse", title: "New Course", example: "Highlighted new course" },
  {
    key: "AvailableCourses",
    title: "Available Courses",
    example: "Course grid",
  },
];

// function ComponentLibrary({ onAdd }) {
//   return (
//     <div className="p-4">
//       <h3 className="font-semibold mb-2">Component Library</h3>
//       <ul className="space-y-2">
//         {COMPONENTS.map((c) => (
//           <li
//             key={c.key}
//             className="p-2 border rounded-lg flex justify-between items-center"
//           >
//             <div>
//               <div className="font-medium">{c.title}</div>
//               <div className="text-sm text-gray-500">{c.example}</div>
//             </div>
//             <button
//               className="px-3 py-1 bg-black border text-white hover:bg-white hover:text-black font-bold rounded-xl cursor-pointer"
//               onClick={() => onAdd(c.key)}
//             >
//               Add
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export {  COMPONENTS };
