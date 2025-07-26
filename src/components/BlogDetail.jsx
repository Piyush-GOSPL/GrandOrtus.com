import React from "react";

const BlogDetail = ({
  image,
  title,
  date,
  intro,
  sections,
  note,
  conclusion,
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 mt-20">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-90 object-cover rounded-xl mb-8"
        />
      )}

      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        {title}
      </h1>
      <p className="text-sm text-gray-500 mb-8">{date}</p>

      <p className="text-gray-700 text-lg mb-6">{intro}</p>

      {sections.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-2xl font-semibold text-[#0090d2] mb-3">
            {section.heading}
          </h2>
          <div className="space-y-4 text-gray-700">
            {section.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      ))}

      {note && (
        <div className="text-gray-800 mb-6 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
          <p className="font-semibold">Note:</p>
          <p className="mt-2">{note.text}</p>
          <ul className="list-disc list-inside mt-2 ml-4 text-gray-700">
            {note.points.map((pt, i) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>
        </div>
      )}

      {/* <h2 className="text-2xl font-semibold text-[#0090d2] mb-3">💡 Conclusion</h2>
      <p className="text-gray-700 text-lg">{conclusion}</p> */}
    </div>
  );
};

export default BlogDetail;
