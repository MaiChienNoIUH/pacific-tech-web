import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import { blogCategoryGroups, blogPosts, blogTabs } from "./blogData";

function normalizeText(value) {
  return value.toLowerCase();
}

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState("AI Solutions");
  const [query, setQuery] = useState("");

  const filteredBlogs = useMemo(() => {
    const keyword = normalizeText(query.trim());
    const byTab = blogPosts.filter((blog) => blog.category === activeTab);

    if (!keyword) return byTab;

    return byTab.filter((blog) => {
      return (
        normalizeText(blog.title).includes(keyword) ||
        normalizeText(blog.slug).includes(keyword) ||
        normalizeText(blog.date).includes(keyword) ||
        normalizeText(blog.category).includes(keyword)
      );
    });
  }, [activeTab, query]);

  const featuredBlog =
    filteredBlogs.find((blog) => blog.featured) ?? filteredBlogs[0];
  const sideBlogs = filteredBlogs
    .filter((blog) => blog.id !== featuredBlog?.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-[#f4f6fa] text-slate-900">
      <Navbar />

      <main className="pt-28 pb-20">
        <Container>
          <section className="mb-10">
            <h1 className="text-center text-5xl font-black tracking-tight">
              BLOG
            </h1>
          </section>

          <section className="mb-10 grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
            <div className="overflow-x-auto no-scrollbar">
              <div className="inline-flex min-w-max gap-3 rounded-2xl bg-white/70 p-2 ring-1 ring-slate-200/80">
                {blogTabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-xl px-4 py-1.5 text-base font-semibold transition cursor-pointer ${
                      activeTab === tab
                        ? "bg-sky-100 text-sky-600"
                        : "text-slate-500 hover:bg-slate-100"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <label className="group relative block">
              <span className="sr-only">Search blogs</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 pr-12 text-base outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
              />
              <Search
                size={20}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition group-focus-within:text-sky-500"
              />
            </label>
          </section>

          {featuredBlog ? (
            <section className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(380px,0.95fr)]">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="group"
              >
                <Link
                  to={`/blog/${featuredBlog.slug}`}
                  className="block overflow-hidden rounded-3xl"
                >
                  <img
                    src={featuredBlog.image}
                    alt={featuredBlog.title}
                    className="h-96 w-full object-cover transition duration-500 group-hover:scale-[1.01]"
                  />
                </Link>
                <p className="mt-3 text-xl font-semibold text-slate-400">
                  {featuredBlog.date}
                </p>
                <Link to={`/blog/${featuredBlog.slug}`}>
                  <h2 className="mt-2 text-5xl font-black leading-tight text-slate-900 transition group-hover:text-sky-600 md:text-4xl">
                    {featuredBlog.title}
                  </h2>
                </Link>
                <p className="mt-4 max-w-4xl text-base leading-7 text-slate-600">
                  {featuredBlog.excerpt}
                </p>
              </motion.article>

              <div className="flex flex-col gap-6">
                {sideBlogs.map((blog, index) => (
                  <motion.article
                    key={blog.id}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    className="group grid grid-cols-[168px_minmax(0,1fr)] gap-4"
                  >
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="block overflow-hidden rounded-xl"
                    >
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="h-28 w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    </Link>

                    <div>
                      <p className="mb-2 text-2xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                        {blog.type}
                      </p>
                      <p className="text-sm font-semibold text-slate-400">
                        {blog.date}
                      </p>
                      <Link to={`/blog/${blog.slug}`}>
                        <h3 className="text-3xl font-bold leading-snug text-slate-900 transition group-hover:text-sky-600 md:text-[1.07rem]">
                          {blog.title}
                        </h3>
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          ) : (
            <section className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
              <h2 className="text-2xl font-bold text-slate-900">
                No matching blog posts
              </h2>
              <p className="mt-3 text-slate-500">
                Try another keyword to continue searching.
              </p>
            </section>
          )}

          {/* Gradient hero - separated from category lists */}
          <section className="mt-18 overflow-hidden rounded-3xl bg-linear-to-br from-[#071329] via-[#0c2147] to-[#20a4e6] p-12 text-white shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
            <div className="text-center">
              <h2 className="text-3xl! md:text-5xl! font-black! leading-7!">
                Explore our solutions
              </h2>

              <div className="mt-12">
                <Link to="/services" className="inline-block">
                  <button className="rounded-xl bg-[#14a1f0] px-6 py-2.5 text-white font-semibold shadow-md hover:bg-[#09a0e6] hover:scale-105 active:scale-95 transition cursor-pointer">
                    Explore more
                  </button>
                </Link>
              </div>
            </div>
          </section>

          {/* Category lists - in a separate white container */}
          <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
            <div className="flex flex-col gap-12">
              {blogCategoryGroups.map((group) => (
                <article
                  key={group.id}
                  className="border-t border-slate-200 pt-12 first:border-t-0 first:pt-0"
                >
                  <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                    <h3 className="text-2xl text-slate-900 md:text-4xl font-bold">
                      {group.name}
                    </h3>

                    <Link
                      to={`/blog/category/${group.id}`}
                      className="group inline-flex items-center gap-1 text-sm font-semibold text-sky-600 transition-all duration-300 hover:text-sky-700"
                    >
                      <span className="relative">
                        {group.linkText}
                        <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-sky-600 transition-all duration-300" />
                      </span>

                      <ArrowRight
                        size={15}
                        className="transition-all duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>

                  <div className="grid gap-5 md:grid-cols-3">
                    {group.articles.map((article) => (
                      <Link
                        key={`${group.id}-${article.date}-${article.title}`}
                        to={`/blog/${article.slug}`}
                        className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                        </div>

                        <div className="p-5">
                          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                            {article.date}
                          </p>
                          <h4 className="text-lg font-black leading-7 text-slate-900 transition group-hover:text-sky-600">
                            {article.title}
                          </h4>
                          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                            {article.excerpt}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
