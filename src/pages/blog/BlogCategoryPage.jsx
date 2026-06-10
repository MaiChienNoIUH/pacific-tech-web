import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Search } from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Container from "../../components/ui/Container";
import { getBlogCategoryBySlug, getBlogsByCategoryName } from "./blogData";

const categoryDescriptions = {
  "AI Solutions":
    "Explore AI solutions, chatbots, voicebots, voice recognition, and intelligent technologies that help businesses improve efficiency and accelerate growth.",

  "Software Engineering":
    "Discover software architecture, web development, mobile applications, scalable systems, and engineering best practices for modern digital products.",

  "Insights & Success Stories":
    "Read industry insights, digital transformation journeys, real-world case studies, and success stories from organizations adopting innovative technologies.",

  "Mobile & QA":
    "Learn about mobile app development, software testing, quality assurance, release management, and strategies for delivering exceptional user experiences.",
};

export default function BlogCategoryPage() {
  const { categorySlug } = useParams();
  const category = getBlogCategoryBySlug(categorySlug);

  if (!category) {
    return (
      <div className="min-h-screen bg-[#f4f6fa] text-slate-900">
        <Navbar />
        <main className="pt-32 pb-20">
          <Container>
            <section className="rounded-3xl bg-white p-12 text-center shadow-sm ring-1 ring-slate-200">
              <h1 className="text-4xl font-black">Category not found</h1>
              <p className="mt-4 text-slate-500">
                The category you requested is not available.
              </p>
              <Link
                to="/blog"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-600"
              >
                <ArrowLeft size={16} />
                Back to blog
              </Link>
            </section>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }

  const categoryBlogs = getBlogsByCategoryName(category.name);

  return (
    <div className="min-h-screen bg-[#f4f6fa] text-slate-900">
      <Navbar />

      <main className="pt-28 pb-20">
        <Container>
          <div className="mb-4 lg:mb-8 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-700"
            >
              <ArrowLeft size={16} />
              Back to blog
            </Link>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              All articles
            </p>
          </div>

          <section className="overflow-hidden rounded-4xl bg-linear-to-br from-[#071329] via-[#0c2147] to-[#20a4e6] p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.18)] md:p-12">
            <div className="max-w-6xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-200/90">
                {category.name}
              </p>
              <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
                All {category.name} articles
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-100/85 md:text-lg">
                {categoryDescriptions[category.name]}
              </p>
            </div>
          </section>

          <section className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {categoryBlogs.map((blog, index) => (
              <Link key={blog.slug} to={`/blog/${blog.slug}`} className="block">
                <motion.article
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                      {blog.date}
                    </p>

                    <h2 className="mt-3 text-lg! font-black! leading-7! text-slate-900 transition group-hover:text-sky-600!">
                      {blog.title}
                    </h2>

                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
                      {blog.excerpt}
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-sky-600">
                        <Search size={12} />
                        Detail page
                      </span>

                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                        {blog.readTime}
                      </span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
