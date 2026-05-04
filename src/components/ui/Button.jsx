// export default function Button({ children, className = "" }) {
//   return (
//     <button className={`px-6 py-3 rounded bg-black text-white ${className}`}>
//       {children}
//     </button>
//   );
// }
export default function Button({ children, variant = "primary" }) {
  const base = "px-6 py-3 rounded-lg font-medium transition";

  const styles = {
    primary: "bg-black text-white hover:bg-gray-800",
    outline: "border border-black hover:bg-black hover:text-white",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}