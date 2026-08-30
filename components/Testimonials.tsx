const reviews = [
  {
    name: "Rahim Khan",
    role: "CEO, Startify",
    text: "NexaIT transformed our idea into a fully working product in weeks, not months. Outstanding quality.",
  },
  {
    name: "Sara Ahmed",
    role: "Product Manager, Bloomly",
    text: "Their team communicates clearly and delivers exactly what was promised. Highly professional.",
  },
  {
    name: "Karim Hasan",
    role: "Founder, ShopEase",
    text: "Best development agency we've worked with. Fast, reliable, and genuinely cares about our success.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          We&apos;ve helped businesses of all sizes bring their vision to life.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition"
          >
            <p className="text-gray-600 leading-relaxed mb-6">
              &ldquo;{r.text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                {r.name.charAt(0)}
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 text-sm">{r.name}</h4>
                <p className="text-gray-400 text-xs">{r.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}