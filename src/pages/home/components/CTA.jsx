import { useState } from "react";
import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";
import heroImg from "../../../assets/contact.png";

export default function CTA() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

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
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("Form data:", form);
    alert("Submitted successfully");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="relative py-24 bg-linear-to-br from-[#0b1a3a] to-[#0f2c6b] overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/20 blur-3xl rounded-full"></div>

      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="relative hidden md:block">
            <img
              src={heroImg}
              alt="contact"
              className="w-full object-contain opacity-90"
            />

            <div className="absolute bottom-5 right-5 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-8 py-6 rounded-2xl shadow-2xl">
              <h3 className="text-4xl font-bold mb-2">Hi!</h3>
              <p className="text-gray-200 text-sm leading-relaxed max-w-xs">
                Building smarter, scalable solutions to drive your digital future forward.
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
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
                  <p className="text-red-500 text-sm mt-1 pt-1">{errors.name}</p>
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
                  <p className="text-red-500 text-sm mt-1 pt-1">{errors.email}</p>
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
                className="w-full bg-blue-500 text-white hover:bg-blue-600"
              >
                Send Message
              </Button>

            </form>
          </div>

        </div>
      </Container>
    </section>
  );
}