export default function Container({ children }) {
  return (
    <div className="w-[85%] max-w-[1400px] mx-auto px-6">
      {children}
    </div>
  );
}