import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "Top AI Trends Transforming Software Development in 2026",
    date: "Jan 12, 2026",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200",
    featured: true,
  },
  {
    id: 2,
    title:
      "How AI Chatbots Are Redefining Customer Experience Across Digital Platforms",
    date: "Jan 10, 2026",
    image: "https://images.unsplash.com/photo-1677442135136-760c813028c0?w=400",
  },
  {
    id: 3,
    title:
      "Why Voice Technology and AI Assistants Are Becoming the Next Big Shift",
    date: "Jan 08, 2026",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=400",
  },
  {
    id: 4,
    title:
      "Best Practices for Scaling Modern Web Applications to Millions of Users",
    date: "Jan 05, 2026",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400",
  },
  {
    id: 5,
    title:
      "The Future of Mobile Applications in the Age of Artificial Intelligence",
    date: "Jan 02, 2026",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400",
  },
];

export default function Blog() {
  const featured = blogs.find((b) => b.featured);
  const others = blogs.filter((b) => !b.featured).slice(0, 4);

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-blue-500">BLOGS</span>
          </h2>
          <p className="text-gray-500 font-bold max-w-2xl mx-auto">
            Stay updated with the latest trends in technology,
            <br />
            AI, and software development.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT - FEATURED */}
          <motion.div
  className="group cursor-pointer"
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-80 object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <p className="text-sm text-gray-400 mt-4">{featured.date}</p>

            <h3 className="text-2xl font-bold mt-2 group-hover:text-blue-500 transition">
              {featured.title}
            </h3>
          </motion.div>

          {/* RIGHT - LIST */}
          <div className="flex flex-col gap-6">
{others.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="flex gap-4 items-center group cursor-pointer"
  >
                {/* IMAGE */}
                <div className="w-28 h-20 overflow-hidden rounded-lg shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div>
                  <p className="text-xs text-gray-400">{item.date}</p>

                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-500 transition line-clamp-2">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button className="bg-blue-500 text-white hover:bg-blue-600 px-8 py-3">
            View all blog posts →
          </Button>
        </div>
      </Container>
    </section>
  );
}
