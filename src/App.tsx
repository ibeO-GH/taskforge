export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 px-6 py-12">
      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight">
          TaskForge
        </h1>

        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
          A full-stack, multi-client task management system where React,
          Next.js, and Vue applications share a unified backend API — designed
          to demonstrate scalable architecture, consistent business logic, and
          real-world frontend engineering patterns.
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
          <span className="px-3 py-1 text-xs rounded-full bg-blue-900/40 border border-gray-700 text-blue-300">
            Node.js API
          </span>
        </div>
      </section>

      <section className="max-w-3xl mx-auto mt-12 text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          Why TaskForge?
        </h2>

        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
          TaskForge was built to explore how different frontend frameworks can
          operate on a shared backend without duplicating logic. The goal is to
          demonstrate how architecture decisions impact scalability,
          maintainability, and developer experience in real-world applications.
        </p>
      </section>

      <section className="max-w-4xl mx-auto mt-16 space-y-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          System Architecture
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          The system is designed as a shared API architecture where multiple
          frontend clients consume a single backend service. This enables
          centralized data management, consistent validation, and reusable
          business logic while allowing each frontend to evolve independently.
        </p>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <span className="px-3 py-1 text-xs rounded-full bg-gray-800 border border-gray-700">
            React Client
          </span>
          <span className="px-3 py-1 text-xs rounded-full bg-gray-800 border border-gray-700">
            Next.js Client
          </span>
          <span className="px-3 py-1 text-xs rounded-full bg-gray-800 border border-gray-700">
            Vue Client
          </span>
          <span className="px-3 py-1 text-xs rounded-full bg-gray-800 border border-gray-700">
            Shared REST API
          </span>
          <span className="px-3 py-1 text-xs rounded-full bg-gray-800 border border-gray-700">
            MongoDB Atlas
          </span>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-16 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          Project Resources
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://github.com/ibeO-GH/taskforge"
            target="_blank"
            className="px-4 py-2 text-sm border border-gray-700 rounded-lg hover:bg-gray-800"
          >
            System Repo
          </a>

          <a
            href="https://github.com/ibeO-GH/taskforge-react"
            target="_blank"
            className="px-4 py-2 text-sm border border-gray-700 rounded-lg hover:bg-gray-800"
          >
            React App
          </a>

          <a
            href="https://github.com/ibeO-GH/taskforge-backend"
            target="_blank"
            className="px-4 py-2 text-sm border border-gray-700 rounded-lg hover:bg-gray-800"
          >
            Backend API
          </a>

          <a
            href="https://taskforge-api-z21d.onrender.com"
            target="_blank"
            className="px-4 py-2 text-sm border border-gray-700 rounded-lg hover:bg-gray-800"
          >
            Live API
          </a>
        </div>
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
            In progress — will demonstrate SSR, routing, and performance
            patterns.
          </p>
          <p className="mt-4 text-green-400 text-sm">Coming soon</p>
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
            In progress — will demonstrate reactive state management and Vue
            ecosystem patterns.
          </p>
          <p className="mt-4 text-purple-400 text-sm">Coming soon</p>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 text-sm mt-20">
        Built as a multi-framework architecture experiment — TaskForge System ©
        2026
      </footer>
    </div>
  );
}
