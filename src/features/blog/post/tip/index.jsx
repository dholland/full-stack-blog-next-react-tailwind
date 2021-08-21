export default function Tip({ children, heading }) {
  return (
    <div className="p-8 bg-gray-800 border-l-4 border-blue-500">
      {heading && <h3 className="mb-2 font-bold tracking-wider">{heading}</h3>}
      {children}
    </div>
  );
}
