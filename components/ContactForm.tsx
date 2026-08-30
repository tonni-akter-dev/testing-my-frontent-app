"use client";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Let&apos;s Build Something Great
        </h2>
        <p className="text-gray-500">
          Tell us about your project — we usually reply within 24 hours.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto flex flex-col gap-4"
      >
        <input
          {...register("name", { required: true })}
          placeholder="Your Name"
          className="border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="Your Email"
          className="border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />
        <textarea
          {...register("message", { required: true })}
          placeholder="Tell us about your project..."
          rows={5}
          className="border border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
        />
        <button className="bg-indigo-600 text-white font-semibold py-3.5 rounded-xl hover:bg-indigo-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}