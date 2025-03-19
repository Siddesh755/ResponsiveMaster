import { useState } from "react";

const examples = [
  {
    title: "Responsive Grid",
    code: `<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  <div className="bg-blue-500 p-4 text-white">Item 1</div>
  <div className="bg-blue-500 p-4 text-white">Item 2</div>
  <div className="bg-blue-500 p-4 text-white">Item 3</div>
</div>`,
  },
  {
    title: "Responsive Navbar",
    code: `<nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
  <div className="text-lg font-bold">Brand</div>
  <ul className="hidden md:flex space-x-4">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <button className="md:hidden p-2 bg-gray-700 rounded">Menu</button>
</nav>`,
  },
  {
    title: "Responsive Card",
    code: `<div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
  <img src="https://via.placeholder.com/300" alt="Example" className="w-full h-48 object-cover" />
  <div className="p-4">
    <h2 className="text-lg font-bold">Card Title</h2>
    <p className="text-gray-600">This is a responsive card.</p>
  </div>
</div>`,
  },
];

export default function Help() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Tailwind CSS Responsive Examples</h2>
      <div className="flex space-x-4 mb-4">
        {examples.map((example, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`px-4 py-2 rounded ${
              selected === index ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {example.title}
          </button>
        ))}
      </div>
      <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
        <code>{examples[selected].code}</code>
      </pre>
    </div>
  );
}
