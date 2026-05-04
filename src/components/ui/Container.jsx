export default function Container({ children }) {
  return (
    <div className="w-[85%] max-w-350 mx-auto px-6">
      {children}
    </div>
  );
}