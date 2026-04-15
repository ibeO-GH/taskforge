export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 px-6 py-12">
      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight">
          TaskForge
        </h1>

        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
          A multi-framework task management system showcasing how the same
          product can be engineered across React, Next.js, and Vue — built for
          scalability, architecture clarity, and real-world frontend design.
        </p>

        <div className="flex justify-center gap-3 pt-4">
          <span className="px-3 py-1 text-xs rounded-full bg-gray-800 border border-gray-700">
            React
          </span>
          <span className="px-3 py-1 text-xs rounded-full bg-gray-800 border border-gray-700">
            Next.js
          </span>
          <span className="px-3 py-1 text-xs rounded-full bg-gray-800 border border-gray-700">
            Vue
          </span>
        </div>
      </section>

      <section className="max-w-3xl mx-auto mt-12 text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          Why TaskForge?
        </h2>

        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
          TaskForge was built to explore how a single product can be implemented
          across multiple frontend frameworks while maintaining consistent
          functionality and user experience. It highlights architectural
          decisions, state management strategies, and UI scalability across
          React, Next.js, and Vue.
        </p>
      </section>

      {/* FRAMEWORK CARDS */}
      <section className="max-w-6xl mx-auto mt-20 grid gap-6 sm:grid-cols-3">
        {/* React */}
        <a
          href="https://taskforge-react-sable.vercel.app/"
          target="_blank"
          className="group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition"
        >
          <h2 className="text-xl font-semibold group-hover:text-blue-400">
            TaskForge React
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Full-feature implementation with drag & drop, filtering, pagination,
            and IndexedDB persistence.
          </p>
          <p className="mt-4 text-blue-400 text-sm">Open →</p>
        </a>

        {/* Next.js */}
        <a
          href="https://your-nextjs-deployment-link.com"
          target="_blank"
          className="group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-green-500 transition"
        >
          <h2 className="text-xl font-semibold group-hover:text-green-400">
            TaskForge Next.js
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            SSR-focused version demonstrating routing, server rendering, and
            performance-first architecture.
          </p>
          <p className="mt-4 text-green-400 text-sm">Open →</p>
        </a>

        {/* Vue */}
        <a
          href="https://your-vue-deployment-link.com"
          target="_blank"
          className="group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition"
        >
          <h2 className="text-xl font-semibold group-hover:text-purple-400">
            TaskForge Vue
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Composition API implementation showing reactive state management and
            Vue ecosystem patterns.
          </p>
          <p className="mt-4 text-purple-400 text-sm">Open →</p>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 text-sm mt-20">
        Built as a frontend architecture showcase — TaskForge System © 2026
      </footer>
    </div>
  );
}
