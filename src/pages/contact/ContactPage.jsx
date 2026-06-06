import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
  UserRound,
} from "lucide-react";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import contactImage from "../../assets/contactpage.png";
import emailjs from "@emailjs/browser";

const initialForm = {
  fullName: "",
  email: "",
  jobTitle: "",
  country: "",
  phoneCode: "+84",
  phoneNumber: "",
  companyName: "",
  companyIndustry: "",
  productInterest: "",
  message: "",
};

const jobTitles = [
  "Founder / CEO",
  "CTO / Technical Lead",
  "COO / Operations Manager",
  "Product Manager",
  "Project Manager",
  "Engineering Manager",
  "IT Manager",
  "Business Analyst",
  "Marketing Manager",
  "Sales Manager",
  "Procurement Manager",
  "Startup Founder",
  "Other",
];

const countries = [
  "Vietnam",
  "Germany ",
  "Japan",
  "Singapore",
  "South Korea",
  "Other",
];

const countryCodes = [
  { value: "+84", label: "🇻🇳 +84" }, // Vietnam
  { value: "+49", label: "🇩🇪 +49" }, // Germany
  { value: "+81", label: "🇯🇵 +81" }, // Japan
  { value: "+65", label: "🇸🇬 +65" }, // Singapore
  { value: "+82", label: "🇰🇷 +82" }, // South Korea
];

const industries = [
  "Information Technology",
  "Education",
  "E-commerce",
  "Finance",
  "Healthcare",
  "Logistics",
  "Retail",
  "Manufacturing",
  "Startup",
  "Other",
];

const interests = [
  "AI Solutions",
  "Web Development",
  "Mobile Apps",
  "Software Testing (QA)",
  "IT Outsourcing",
  "Business Analytics",
  "Remote Staffing",
  "Game Development",
  "Working Utilities",
  "Not sure yet",
];

function Field({ label, required = false, error, children }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-600">
        {label}
        {required ? <span className="text-rose-500"> *</span> : null}
      </label>
      {children}
      {error ? <p className="mt-1 text-sm text-rose-500">{error}</p> : null}
    </div>
  );
}

function Input({ error, className = "", ...props }) {
  return (
    <input
      {...props}
      className={`w-full rounded-xl border bg-white px-3 py-1.5 text-[15px] text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100 ${
        error ? "border-rose-400" : "border-slate-200"
      } ${className}`}
    />
  );
}

function Select({ error, className = "", children, ...props }) {
  return (
    <div className="relative">
      <select
        {...props}
        className={`w-full appearance-none rounded-xl border bg-white px-3 pr-10 py-1.5 text-[15px] text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100 ${
          error ? "border-rose-400" : "border-slate-200"
        } ${className}`}
      >
        {children}
      </select>

      <ChevronDown
        size={16}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
      />
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => {
      const nextErrors = { ...prev };

      if (name === "fullName" && value.trim()) delete nextErrors.fullName;
      if (name === "email" && /^\S+@\S+\.\S+$/.test(value))
        delete nextErrors.email;
      if (name === "companyName" && value.trim()) delete nextErrors.companyName;
      if (name === "message" && value.trim()) delete nextErrors.message;

      return nextErrors;
    });
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.fullName.trim())
      nextErrors.fullName = "Please enter your full name.";
    if (!form.email.trim()) nextErrors.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      nextErrors.email = "Email format is not valid.";

    if (!form.companyName.trim())
      nextErrors.companyName = "Please enter your company name.";
    if (!form.message.trim())
      nextErrors.message = "Please share a short message.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsLoading(true);

    try {
      await emailjs.send(
        "service_bdo3glt",
        "template_7jct7na",
        {
          name: form.fullName,
          email: form.email,
          job_title: form.jobTitle || "-",
          country: form.country || "-",
          phone: `${form.phoneCode} ${form.phoneNumber}`.trim(),
          company: form.companyName,
          industry: form.companyIndustry || "-",
          interest: form.productInterest || "-",
          message: form.message,
        },
        "oszaavOkNtalhDq03"
      );

      setIsSubmitted(true);
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message");
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_32%),linear-gradient(135deg,#ffffff_0%,#f7fbff_45%,#dff0ff_100%)] text-slate-900">
      <Navbar />

      <main className="pt-28 pb-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="rounded-4xl bg-white/75 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-8 lg:p-10"
            >
              <div className="mb-8 max-w-2xl">
                <p className="inline-flex rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold text-sky-700">
                  Contact Pacific Tech
                </p>
                <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl mb-3!">
                  How can we help?
                </h1>
                <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                  Share a few details about your project and we&apos;ll help you
                  map the right team, solution, and next steps.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field
                      label="Your full name"
                      required
                      error={errors.fullName}
                    >
                      <Input
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        error={errors.fullName}
                      />
                    </Field>

                    <Field label="Your email" required error={errors.email}>
                      <Input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        error={errors.email}
                      />
                    </Field>

                    <Field label="Job title" error={errors.jobTitle}>
                      <Select
                        name="jobTitle"
                        value={form.jobTitle}
                        onChange={handleChange}
                        error={errors.jobTitle}
                      >
                        <option value="">Job title</option>
                        {jobTitles.map((jobTitle) => (
                          <option key={jobTitle} value={jobTitle}>
                            {jobTitle}
                          </option>
                        ))}
                      </Select>
                    </Field>

                    <Field label="Country" error={errors.country}>
                      <Select
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        error={errors.country}
                      >
                        <option value="">Country</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </Select>
                    </Field>

                    <Field label="Phone Number" error={errors.phoneNumber}>
                      <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-3">
                        <Select
                          name="phoneCode"
                          value={form.phoneCode}
                          onChange={handleChange}
                          error={errors.phoneCode}
                        >
                          {countryCodes.map((code) => (
                            <option key={code.value} value={code.value}>
                              {code.label}
                            </option>
                          ))}
                        </Select>
                        <Input
                          name="phoneNumber"
                          inputMode="tel"
                          value={form.phoneNumber}
                          onChange={handleChange}
                          placeholder="Phone Number"
                          error={errors.phoneNumber}
                        />
                      </div>
                    </Field>

                    <Field
                      label="Company Name"
                      required
                      error={errors.companyName}
                    >
                      <Input
                        name="companyName"
                        value={form.companyName}
                        onChange={handleChange}
                        placeholder="Company Name"
                        error={errors.companyName}
                      />
                    </Field>

                    <Field
                      label="Company industry"
                      error={errors.companyIndustry}
                    >
                      <Select
                        name="companyIndustry"
                        value={form.companyIndustry}
                        onChange={handleChange}
                        error={errors.companyIndustry}
                      >
                        <option value="">Company industry</option>
                        {industries.map((industry) => (
                          <option key={industry} value={industry}>
                            {industry}
                          </option>
                        ))}
                      </Select>
                    </Field>

                    <Field
                      label="Product / Solution of Interest"
                      error={errors.productInterest}
                    >
                      <Select
                        name="productInterest"
                        value={form.productInterest}
                        onChange={handleChange}
                        error={errors.productInterest}
                      >
                        <option value="">Product / Solution of Interest</option>
                        {interests.map((interest) => (
                          <option key={interest} value={interest}>
                            {interest}
                          </option>
                        ))}
                      </Select>
                    </Field>
                  </div>

                  <Field label="Your message" required error={errors.message}>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Your message"
                      className={`w-full rounded-2xl border bg-white px-4 py-4 text-[15px] text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100 ${
                        errors.message ? "border-rose-400" : "border-slate-200"
                      }`}
                    />
                  </Field>

                  <div className="flex flex-col gap-5 pt-1 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-slate-500">
                      Your information is secure and will never be shared with
                      third parties.
                    </p>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-500 px-8 py-2 text-white shadow-lg shadow-sky-500/20 hover:bg-sky-600"
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Sending...
                        </span>
                      ) : (
                        <>
                          <Send size={16} />
                          Send
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-130 flex-col items-center justify-center rounded-3xl border border-sky-100 bg-sky-50/70 px-8 py-12 text-center"
                >
                  <CheckCircle2
                    className="text-emerald-500"
                    size={64}
                    strokeWidth={1.6}
                  />
                  <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-950">
                    Thanks for reaching out.
                  </h2>
                  <p className="mt-3 max-w-lg text-base leading-7 text-slate-600">
                    We have received your details and will get back to you as
                    soon as possible.
                  </p>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-8 inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-2 text-sm font-semibold text-white transition hover:scale-105 cursor-pointer"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </motion.section>

            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.12 }}
              className="relative"
            >
              <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-sky-300/30 blur-3xl" />
              <div className="absolute -bottom-8 right-0 h-48 w-48 rounded-full bg-blue-300/30 blur-3xl" />

              <div className="relative overflow-hidden rounded-4xl bg-white shadow-[0_30px_90px_rgba(15,23,42,0.14)] ring-1 ring-slate-200/70">
                <img
                  src={contactImage}
                  alt="Team collaboration"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-x-4 bottom-4 rounded-3xl border border-white/40 bg-white/70 p-4 shadow-lg backdrop-blur-md">
                  <div className="flex items-start gap-3">
                    <div className="rounded-2xl bg-sky-500 p-3 text-white shadow-lg shadow-sky-500/20">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Fast response
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        We usually reply within one business day and can guide
                        you to the right team quickly.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold text-slate-600">
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">
                      <UserRound size={14} />
                      Dedicated support
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">
                      <Phone size={14} />
                      Discovery call
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2">
                      <MapPin size={14} />
                      Global clients
                    </span>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
