import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ServiceCard({ icon: Icon, title, description, path }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.25 }}
      className="
        group relative overflow-hidden rounded-3xl
        border border-white/10
        bg-white/3 backdrop-blur-xl
        p-8
        cursor-pointer
      "
    >
      {/* hover effect */}
      <div
        className="
          absolute inset-0 opacity-0
          group-hover:opacity-100
          transition duration-500
          bg-linear-to-br
          from-blue-500/10
          via-blue-500/5
          to-blue-600/15
        "
      />

      <div className="relative z-10">
        {/* icon */}
        <div className="
          w-16 h-16 rounded-2xl
          border border-blue-500/20
          bg-blue-500/10
          flex items-center justify-center
          mb-7
        ">
          <Icon className="text-blue-400" size={30} />
        </div>

        {/* title */}
        <h3 className="text-2xl font-semibold mb-4 text-[#0b1a3a]">
          {title}
        </h3>

        {/* description */}
        <p className="text-gray-500 leading-relaxed mb-8">
          {description}
        </p>

        {/* CTA */}
        <button className="
          flex items-center gap-2
          text-blue-500 font-medium
          transition-all
          group-hover:gap-4
        ">
          Learn More
          <ArrowUpRight size={18} />
        </button>
      </div>
    </motion.div>
  );
}