import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, X, Upload, CheckCircle2 } from "lucide-react";

const jobs = [
  {
    title: "Frontend Developer",
    type: "Full-time",
    location: "TPHCM",
  },
  {
    title: "Backend Engineer (Java/Spring)",
    type: "Full-time",
    location: "TPHCM",
  },
  {
    title: "QA Automation Engineer",
    type: "Remote",
    location: "Hà Nội",
  },
  {
    title: "AI Engineer",
    type: "Full-time",
    location: "Hà Nội",
  },
  {
    title: "Senior Frontend Engineer",
    type: "Part-time",
    location: "Đà Nẵng",
  },
];

export default function OpenPositions() {
  const [selectedJob, setSelectedJob] = useState(null);

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");

  const [showLocation, setShowLocation] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: null,
  });

  const [toast, setToast] = useState({
    show: false,
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const locations = ["TPHCM", "Đà Nẵng", "Hà Nội"];

  useEffect(() => {
    if (!toast.show) return;

    const timer = setTimeout(() => {
      setToast({
        show: false,
        message: "",
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, [toast.show]);

  const filteredJobs = jobs.filter((job) => {
    const matchSearch = job.title.toLowerCase().includes(search.toLowerCase());

    const matchLocation = location === "All" || job.location === location;

    return matchSearch && matchLocation;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    setFormData((prev) => ({
      ...prev,
      resume: file,
    }));

    setErrors((prev) => ({
      ...prev,
      resume: "",
    }));
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    if (!formData.resume) {
      newErrors.resume = "Resume is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const uploadToCloudinary = async (file) => {
    try {
      const data = new FormData();

      data.append("file", file);
      data.append("upload_preset", "pacific_cv");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dhtscuujo/auto/upload",
        {
          method: "POST",
          body: data,
        },
      );

      const result = await res.json();

      if (!result.secure_url) {
        throw new Error("Upload failed");
      }

      return result.secure_url;
    } catch (err) {
      console.log("Cloudinary error:", err);
      return "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setIsSubmitting(true);

      // 1. upload CV
      let resumeUrl = "";

      if (formData.resume) {
        resumeUrl = await uploadToCloudinary(formData.resume);
      }

      const fullName = `${formData.firstName} ${formData.lastName}`.trim();

      // 2. gửi email
      await emailjs.send(
        "service_bdo3glt",
        "template_fdrvhkv",
        {
          job: selectedJob?.title,
          name: fullName,
          email: formData.email,
          phone: formData.phone,
          resume: resumeUrl,
        },
        "oszaavOkNtalhDq03",
      );

      setToast({
        show: true,
        message: "Nộp đơn thành công!",
      });

      setSelectedJob(null);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        resume: null,
      });

      setErrors({});
    } catch (err) {
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setSelectedJob(null);

    setErrors({});

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      resume: null,
    });
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <section className="py-20 bg-[#f5f7fb] relative overflow-hidden">
      <Container>
        {/* TITLE */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl! !md:text-5xl font-extrabold mb-4">
            Job Listing
          </h2>

          {/* FILTER */}
          <div className="grid md:grid-cols-[1fr_200px] gap-4 mt-16 w-full">
            {/* SEARCH */}
            <div className="bg-white border border-gray-300 rounded-xl px-4 h-11 flex items-center shadow-[0_4px_14px_rgba(0,0,0,0.04)]">
              <input
                type="text"
                placeholder="Search position..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 outline-none text-gray-800 font-medium placeholder:text-gray-400 text-sm"
              />

              <Search size={18} className="text-[#1d4ed8]" />
            </div>

            {/* LOCATION */}
            <div className="relative">
              <button
                onClick={() => setShowLocation(!showLocation)}
                className="w-full bg-white border border-gray-300 rounded-xl px-4 h-11 flex items-center justify-between shadow-[0_4px_14px_rgba(0,0,0,0.04)] hover:border-blue-400 transition"
              >
                <span className="font-medium text-gray-800 text-sm">
                  {location === "All" ? "All locations" : location}
                </span>

                <ChevronDown
                  size={18}
                  className={`text-[#1d4ed8] transition ${
                    showLocation ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {showLocation && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 10,
                    }}
                    className="absolute top-13 left-0 w-full bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden z-30"
                  >
                    <button
                      onClick={() => {
                        setLocation("All");
                        setShowLocation(false);
                      }}
                      className="w-full text-left px-4 py-2.5 hover:bg-blue-50 transition font-medium text-sm"
                    >
                      All locations
                    </button>

                    {locations.map((item) => (
                      <button
                        key={item}
                        onClick={() => {
                          setLocation(item);
                          setShowLocation(false);
                        }}
                        className="w-full text-left px-4 py-2.5 hover:bg-blue-50 transition font-medium text-sm"
                      >
                        {item}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* JOB LIST */}
        <div className="space-y-4 w-full">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl px-6 py-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              {/* LEFT */}
              <div>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-lg font-medium">
                    {job.type}
                  </span>

                  <span className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-lg font-medium">
                    {job.location}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#16226b]">
                  {job.title}
                </h3>
              </div>

              {/* BUTTON */}
              <Button
                onClick={() => setSelectedJob(job)}
                className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-2.5 rounded-lg text-sm"
              >
                Apply now
              </Button>
            </motion.div>
          ))}

          {/* EMPTY */}
          {filteredJobs.length === 0 && (
            <div className="text-center py-16 text-gray-500 font-medium">
              No positions found.
            </div>
          )}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedJob && (
            <motion.div
              onClick={closeModal}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* BOX */}
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden"
                initial={{
                  opacity: 0,
                  y: -80,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -40,
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.35,
                }}
              >
                {/* HEADER */}
                <div className="flex items-center justify-between px-6 py-4 border-b">
                  <h3 className="text-2xl font-semibold">
                    Apply for {selectedJob.title}
                  </h3>

                  <button
                    onClick={closeModal}
                    className="text-gray-300 hover:text-black transition hover:scale-105 active:scale-95 duration-300 cursor-pointer"
                  >
                    <X size={28} />
                  </button>
                </div>

                {/* FORM */}
                <div className="p-6">
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* NAME */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          First name <span className="text-red-500">*</span>
                        </label>

                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="First name"
                          className="w-full mt-1.5 border border-gray-300 rounded-lg px-4 h-11 outline-none focus:border-blue-500"
                        />

                        {errors.firstName && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.firstName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700">
                          Last name <span className="text-red-500">*</span>
                        </label>

                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Last name"
                          className="w-full mt-1.5 border border-gray-300 rounded-lg px-4 h-11 outline-none focus:border-blue-500"
                        />

                        {errors.lastName && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Email <span className="text-red-500">*</span>
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full mt-1.5 border border-gray-300 rounded-lg px-4 h-11 outline-none focus:border-blue-500"
                      />

                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* PHONE */}
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Phone <span className="text-red-500">*</span>
                      </label>

                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        className="w-full mt-1.5 border border-gray-300 rounded-lg px-4 h-11 outline-none focus:border-blue-500"
                      />

                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* RESUME */}
                    <div>
                      <label className="text-sm font-medium text-gray-700">
                        Resume <span className="text-red-500">*</span>
                      </label>

                      <label className="mt-2 border-2 border-dashed border-gray-300 rounded-xl h-32 flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 transition">
                        <Upload size={30} className="text-sky-400 mb-2" />

                        <p className="text-sm text-gray-600">
                          Upload a file or drag and drop here
                        </p>

                        {formData.resume && (
                          <p className="text-xs text-blue-600 mt-2 font-medium">
                            {formData.resume.name}
                          </p>
                        )}

                        <input
                          type="file"
                          className="hidden"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                        />
                      </label>

                      {errors.resume && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.resume}
                        </p>
                      )}
                    </div>

                    {/* BUTTON */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-500 text-white hover:bg-blue-600 h-11 rounded-lg text-base disabled:opacity-60"
                    >
                      {isSubmitting ? "Submitting..." : "Apply"}
                    </Button>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {toast.show && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="fixed bottom-6 right-6 z-9999 w-[320px]"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-blue-100 bg-white">
                {/* TOP GRADIENT BAR */}
                <div className="h-1 w-full bg-linear-to-r from-blue-500 to-cyan-400" />

                <div className="p-4 flex gap-3 items-start">
                  {/* ICON */}
                  <div className="mt-0.5">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-md">
                      <CheckCircle2 className="text-white" size={20} />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800 mb-1">
                      Thông báo
                    </p>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {toast.message}
                    </p>
                  </div>
                </div>

                {/* GLOW EFFECT */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-400/20 blur-2xl rounded-full" />
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-cyan-400/20 blur-2xl rounded-full" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
