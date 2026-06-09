import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Clock3, Tag, UserRound } from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Container from "../../components/ui/Container";
import { getBlogBySlug, getRelatedBlogs } from "./blogData";

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#f4f6fa] text-slate-900">
        <Navbar />
        <main className="pt-32 pb-20">
          <Container>
            <section className="rounded-3xl bg-white p-12 text-center shadow-sm ring-1 ring-slate-200">
              <h1 className="text-4xl font-black">Blog post not found</h1>
              <p className="mt-4 text-slate-500">
                The article you requested is not available.
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

  const relatedBlogs = getRelatedBlogs(blog.slug, blog.category, 3);
  const detailSections = useMemo(() => {
    const generatedSections = [
      {
        heading: "Implementation checklist",
        bullets: blog.takeaways.slice(0, 3),
      },
      {
        heading: "Key focus areas",
        paragraphs: [
          `This article touches on ${blog.tags.join(", ")} and shows how those themes connect to delivery, governance, and scale.`,
          "The practical value comes from applying the ideas in small, measurable steps rather than treating them as one-time changes.",
        ],
      },
      {
        heading: "Practical rollout steps",
        bullets: [
          "Start with one narrow use case and validate the outcome.",
          "Add monitoring so the team can see what changed.",
          "Expand only after the first slice proves stable.",
        ],
      },
    ];

    return [...blog.sections, ...generatedSections];
  }, [blog.sections, blog.tags, blog.takeaways]);

  const tocItems = useMemo(
    () =>
      detailSections.map((section, index) => ({
        id: `${slugify(section.heading)}-${index}`,
        label: section.heading,
      })),
    [detailSections],
  );
  const [activeChapter, setActiveChapter] = useState(tocItems[0]?.id ?? "");

  useEffect(() => {
    setActiveChapter(tocItems[0]?.id ?? "");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              first.boundingClientRect.top - second.boundingClientRect.top,
          );

        if (visibleEntries[0]) {
          setActiveChapter(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-15% 0px -70% 0px",
        threshold: 0.2,
      },
    );

    tocItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [tocItems]);

  return (
    <div className="min-h-screen bg-[#f4f6fa] text-slate-900">
      <Navbar />

      <main className="pt-28 pb-20">
        <Container>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-700"
            >
              <ArrowLeft size={16} />
              Back to blog
            </Link>

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              {blog.category}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
            {/* TOC */}
            <aside className="lg:sticky lg:top-24">
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h2 className="text-2xl font-black text-slate-900">
                  Article Content
                </h2>

                <div className="mt-6 space-y-4">
                  {tocItems.map((item, index) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();

                        history.replaceState(null, "", `#${item.id}`);

                        document.getElementById(item.id)?.scrollIntoView({
                          behavior: "auto",
                          block: "start",
                        });
                      }}
                      className={`flex items-start gap-3 rounded-2xl px-3 py-2 text-sm leading-6 transition ${
                        activeChapter === item.id
                          ? "bg-sky-50 font-semibold text-sky-700 ring-1 ring-sky-100"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <span
                        className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[11px] transition ${
                          activeChapter === item.id
                            ? "border-sky-500 bg-sky-500 text-white"
                            : "border-slate-300 text-transparent"
                        }`}
                      >
                        <Check size={11} strokeWidth={4} />
                      </span>

                      <span>
                        Chapter {index + 1}. {item.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            {/* Content */}
            <div>
              <article>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden rounded-4xl bg-white shadow-sm ring-1 ring-slate-200"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-80 w-full object-cover md:h-95"
                  />

                  <div className="p-6 pt-3! md:p-10">
                    <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-400">
                      <span>{blog.date}</span>

                      <span className="inline-flex items-center gap-2">
                        <Clock3 size={14} />
                        {blog.readTime}
                      </span>

                      <span className="inline-flex items-center gap-2">
                        <UserRound size={14} />
                        {blog.author}
                      </span>
                    </div>

                    <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-slate-950 md:text-5xl">
                      {blog.title}
                    </h1>

                    <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
                      {blog.intro}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {blog.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-600 ring-1 ring-sky-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <div className="mt-8 space-y-8 rounded-4xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-10">
                  {detailSections.map((section, index) => (
                    <section
                      key={section.heading}
                      id={tocItems[index].id}
                      className="scroll-mt-20"
                    >
                      <h2 className="text-3xl font-black text-slate-950">
                        {section.heading}
                      </h2>

                      <div className="mt-4 space-y-4 text-base leading-8 text-slate-600">
                        {section.paragraphs?.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>

                      {section.bullets ? (
                        <ul className="mt-5 space-y-3">
                          {section.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex gap-3 text-slate-600"
                            >
                              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-sky-500" />
                              <span className="leading-8">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </section>
                  ))}

                  <section className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200">
                    <h2 className="flex items-center gap-2 text-2xl font-black text-slate-950">
                      <Tag size={20} />
                      Key takeaways
                    </h2>

                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      {blog.takeaways.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl bg-white px-4 py-3 text-slate-600 ring-1 ring-slate-200"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Tags
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3">
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-600 ring-1 ring-sky-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>
              </article>

              {/* Category */}
              <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Category
                </p>

                <h3 className="mt-3 text-3xl font-black text-slate-950">
                  {blog.category}
                </h3>

                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                  This article belongs to our {blog.category.toLowerCase()}{" "}
                  series and explores practical strategies, implementation
                  insights, and industry perspectives related to this topic.
                </p>

                <Link
                  to={`/blog/category/${blog.category
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")}`}
                  className="mt-6 inline-flex rounded-xl bg-sky-500 px-5 py-2 font-semibold text-white hover:scale-105 active:scale-95 transition hover:bg-sky-600"
                >
                  View all articles
                </Link>
              </section>

              {/* Related Articles */}
              {relatedBlogs.length > 0 && (
                <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                  <div className="mb-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Related Articles
                    </p>

                    <h3 className="mt-2 text-3xl font-black text-slate-950">
                      Continue Reading
                    </h3>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {relatedBlogs.map((related) => (
                      <Link
                        key={related.slug}
                        to={`/blog/${related.slug}`}
                        className="group overflow-hidden rounded-3xl bg-white ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="overflow-hidden">
                          <img
                            src={related.image}
                            alt={related.title}
                            className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                        </div>

                        <div className="p-5">
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                            {related.date}
                          </p>

                          <h4 className="text-lg font-black leading-7 text-slate-900 transition group-hover:text-sky-600">
                            {related.title}
                          </h4>

                          <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                            {related.excerpt}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
