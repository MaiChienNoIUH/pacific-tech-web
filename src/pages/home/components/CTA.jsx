import { useState } from "react";
import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";
import heroImg from "../../../assets/contact.png";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function CTA() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // update form
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // validate từng field
    setErrors((prev) => {
      let newErrors = { ...prev };

      if (name === "name") {
        if (!value.trim()) newErrors.name = "Please enter your name";
        else delete newErrors.name;
      }

      if (name === "email") {
        if (!value.trim()) {
          newErrors.email = "Please enter your email";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          newErrors.email = "Invalid email format";
        } else {
          delete newErrors.email;
        }
      }

      if (name === "message") {
        if (!value.trim()) newErrors.message = "Please enter your message";
        else delete newErrors.message;
      }

      return newErrors;
    });
  };

  // validate
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please enter your message";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsLoading(true);

    try {
      await emailjs.send(
        "service_bdo3glt",
        "template_7jct7na",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "oszaavOkNtalhDq03",
      );

      setIsLoading(false);
      setIsSubmitted(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log("Email send error:", error);
      setIsLoading(false);
      alert("Failed to send message");
    }
  };

  return (
    <section className="relative py-24 bg-linear-to-br from-[#0b1a3a] to-[#0f2c6b] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/20 blur-3xl rounded-full"></div>

      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={heroImg}
              alt="contact"
              className="w-full object-contain opacity-90"
            />

            <div className="absolute bottom-5 right-5 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 py-6 rounded-2xl shadow-2xl">
              <h3 className="text-4xl font-bold mb-2">Hi!</h3>
              <p className="text-gray-200 text-sm leading-relaxed max-w-xs">
                Building smarter, scalable solutions to drive your digital
                future forward.
              </p>
            </div>
          </motion.div>

          {/* RIGHT PANEL (FORM / SUCCESS SCREEN) */}
          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 min-h-125 flex flex-col justify-center"
            initial={{ opacity: 0, y: -100, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
          >
            {!isSubmitted ? (
              // GIAO DIỆN FORM ĐIỀN THÔNG TIN
              <>
                <p className="text-blue-500 font-bold mb-2 pb-2 uppercase text-md tracking-wide">
                  Contact Us
                </p>

                <h2 className="text-3xl font-bold mb-6 leading-snug">
                  Let’s build smarter solutions for what’s next
                </h2>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  {/* NAME */}
                  <div>
                    <label className="text-sm text-gray-600">Full name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Your full name"
                      className={`w-full mt-1 px-4 py-2 border rounded-lg outline-none transition-all duration-200
                      ${
                        errors.name
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-300 focus:border-blue-500"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1 pt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="text-sm text-gray-600">Email</label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Your email"
                      className={`w-full mt-1 px-4 py-2 border rounded-lg outline-none transition-all duration-200
                      ${
                        errors.email
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-300 focus:border-blue-500"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 pt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="text-sm text-gray-600">
                      Tell us about your project
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Your message"
                      className={`w-full mt-1 px-4 py-2 border rounded-lg outline-none transition-all duration-200
                      ${
                        errors.message
                          ? "border-red-500 focus:border-red-500"
                          : "border-gray-300 focus:border-blue-500"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* BUTTON */}
                  <Button
                    type="submit"
                    className="w-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </>
            ) : (
              // GIAO DIỆN THÔNG BÁO THÀNH CÔNG (Y CHANG ẢNH CỦA BẠN)
              <motion.div
                className="text-center flex flex-col items-center justify-center py-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Icon Check 3D giả lập bằng gradient */}
                <div className="relative w-32 h-32 flex items-center justify-center rounded-full bg-radial from-[#64c5f9] to-[#36a6f1] shadow-[inset_0_-8px_12px_rgba(0,0,0,0.15),0_15px_25px_rgba(54,166,241,0.4)] mb-8">
                  <svg
                    className="w-14 h-14 text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.2)]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>

                <h2 className="text-4xl font-extrabold text-[#23a2f3] mb-4">
                  Thank you!
                </h2>
                <p className="text-gray-600 text-md max-w-sm leading-relaxed mb-8">
                  Thank you for your submission. We have received your
                  information and will get back to you shortly.
                </p>

                {/* Nút quay lại để test hoặc gửi form khác nếu cần */}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-sm font-medium text-gray-400 hover:text-blue-500 transition-colors underline cursor-pointer"
                >
                  Go back to form
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
