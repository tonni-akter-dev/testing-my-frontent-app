export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-40 pb-24 px-6 bg-gradient-to-br from-indigo-50 via-white to-white overflow-hidden"
    >
      {/* Background blur circle */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
          🚀 Trusted by 200+ Businesses
        </span>

        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
          We Build Digital <br className="hidden sm:block" />
          Products That{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Scale
          </span>
        </h2>

        <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10">
          From web apps to cloud infrastructure — we help startups and enterprises ship faster, smarter, and with confidence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-indigo-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-indigo-700 transition w-full sm:w-auto">
            Start Your Project
          </button>
          <button className="border border-gray-300 text-gray-700 font-semibold px-8 py-3.5 rounded-full hover:bg-gray-50 transition w-full sm:w-auto">
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
}