import React from "react";

export default function About() {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Project</h2>
      <p className="text-gray-700 mb-4">
        This project was created to help developers understand and implement responsive design using Tailwind CSS. Many developers struggle with making their websites adaptable to different screen sizes, and this project provides real-world examples to bridge that gap.
      </p>
      <p className="text-gray-700 mb-4">
        The project includes interactive components like a responsive navbar, grid layout, and a help section to guide developers. By exploring the provided Tailwind CSS snippets, developers can see how simple utility classes can be used to create flexible and mobile-friendly designs.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">How It Helps Developers</h3>
      <p className="text-gray-700 mb-4">
        This project provides a hands-on approach to mastering responsive design. Instead of just reading documentation, developers can experiment with different layouts and observe how Tailwind CSS makes the process easier. The Help section contains useful code snippets that can be copied and tested instantly.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Tech Stack Used</h3>
      <ul className="list-disc pl-5 text-gray-700">
        <li><span className="font-semibold">React.js</span> - For building reusable and interactive UI components.</li>
        <li><span className="font-semibold">Tailwind CSS</span> - For a utility-first approach to styling and responsiveness.</li>
        <li><span className="font-semibold">Vite</span> - For fast development and optimized builds.</li>
      </ul>

      <p className="text-gray-700 mt-4">
        This combination of technologies ensures a smooth development experience and helps developers build modern, scalable, and responsive web applications efficiently.
      </p>
    </div>
  );
}
