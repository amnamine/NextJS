import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 flex flex-col items-center justify-between p-6 sm:p-12 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full max-w-4xl mx-auto flex flex-col items-center gap-4 mt-8">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-4xl sm:text-5xl font-bold text-center mt-4 text-foreground">Welcome to Next.js</h1>
        <p className="text-lg sm:text-xl text-center text-gray-600 dark:text-gray-300 max-w-2xl mt-2">
          Next.js is a powerful React framework for building fast, scalable, and user-friendly web applications. It combines the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.
        </p>
      </header>

      <main className="w-full max-w-4xl mx-auto flex flex-col gap-12 mt-12">
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white/80 dark:bg-black/40 rounded-xl shadow p-6 flex flex-col items-center text-center">
            <Image src="/file.svg" alt="File-based Routing" width={40} height={40} className="mb-2 dark:invert" />
            <h2 className="text-xl font-semibold mb-2">File-based Routing</h2>
            <p className="text-gray-600 dark:text-gray-300">Create pages by adding files to the <code className="bg-black/10 dark:bg-white/10 px-1 rounded">pages</code> or <code className="bg-black/10 dark:bg-white/10 px-1 rounded">app</code> directory. Routing is automatic and intuitive.</p>
          </div>
          <div className="bg-white/80 dark:bg-black/40 rounded-xl shadow p-6 flex flex-col items-center text-center">
            <Image src="/globe.svg" alt="Hybrid Rendering" width={40} height={40} className="mb-2 dark:invert" />
            <h2 className="text-xl font-semibold mb-2">Hybrid Rendering</h2>
            <p className="text-gray-600 dark:text-gray-300">Choose between Static Generation (SSG) and Server-side Rendering (SSR) on a per-page basis for optimal performance and SEO.</p>
          </div>
          <div className="bg-white/80 dark:bg-black/40 rounded-xl shadow p-6 flex flex-col items-center text-center">
            <Image src="/window.svg" alt="API Routes" width={40} height={40} className="mb-2 dark:invert" />
            <h2 className="text-xl font-semibold mb-2">API Routes</h2>
            <p className="text-gray-600 dark:text-gray-300">Build your backend with ease. API routes let you create RESTful endpoints as simple JavaScript functions, right inside your Next.js app.</p>
          </div>
          <div className="bg-white/80 dark:bg-black/40 rounded-xl shadow p-6 flex flex-col items-center text-center">
            <Image src="/vercel.svg" alt="Vercel Deployment" width={40} height={40} className="mb-2 dark:invert" />
            <h2 className="text-xl font-semibold mb-2">Instant Deployment</h2>
            <p className="text-gray-600 dark:text-gray-300">Deploy globally in seconds with Vercel, the creators of Next.js. Enjoy zero-config deployments, previews, and edge functions.</p>
          </div>
        </section>

        <section className="flex flex-col items-center gap-6">
          <h2 className="text-2xl font-bold text-center">Why Choose Next.js?</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
            <li className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-gray-700 dark:text-gray-200">⚡ Blazing fast performance out of the box</li>
            <li className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-gray-700 dark:text-gray-200">🔒 Built-in security and best practices</li>
            <li className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-gray-700 dark:text-gray-200">🔍 SEO-friendly by default</li>
            <li className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-gray-700 dark:text-gray-200">🛠️ Developer experience you’ll love</li>
          </ul>
        </section>

        <section className="flex flex-col items-center gap-4 mt-8">
          <h2 className="text-2xl font-bold text-center">Get Started with Next.js</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 max-w-xl">Ready to build your next project? Check out the official documentation or try the interactive tutorial to learn more.</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-base h-12 px-6 min-w-44 font-semibold"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              📚 Read the Docs
            </a>
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-base h-12 px-6 font-semibold"
              href="https://nextjs.org/learn"
              target="_blank"
              rel="noopener noreferrer"
            >
              🚀 Start Learning
            </a>
          </div>
        </section>
      </main>

      <footer className="w-full max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between py-8 border-t border-gray-200 dark:border-gray-800 mt-16 text-sm text-gray-500 dark:text-gray-400">
        <span>Powered by <a href="https://nextjs.org" className="underline hover:text-foreground">Next.js</a> & <a href="https://vercel.com" className="underline hover:text-foreground">Vercel</a></span>
        <span>© {new Date().getFullYear()} Next.js Landing Page Example</span>
      </footer>
    </div>
  );
}
