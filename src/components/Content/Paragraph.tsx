// Paragraph.jsx
export default function Paragraph({ title, text, titleStyle, textStyle }) {
  // Split the text into paragraphs by double line breaks
  const paragraphs = text.split(/\n\s*\n/);

  return (
    <div className="w-full">
      {title && (
        <h2 className={`text-2xl font-bold mb-4 ${titleStyle}`}>
          {title}
        </h2>
      )}
      {paragraphs.map((para: string, idx: number) => (
        <p
          key={idx}
          className={`text-lg text-gray-800 leading-relaxed mb-4 ${textStyle}`}
        >
          {para}
        </p>
      ))}
    </div>
  );
}
