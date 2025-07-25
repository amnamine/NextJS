import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 dark:from-[#0a0a23] dark:via-[#1a1a40] dark:to-[#2d0036] flex flex-col items-center justify-between p-6 sm:p-12 font-[family-name:var(--font-geist-sans)] transition-colors duration-700 animate-gradient-bg">
      <header className="w-full max-w-4xl mx-auto flex flex-col items-center gap-4 mt-8 animate-fade-in">
        <span className="inline-block animate-float">
          <Image
            className="dark:invert drop-shadow-lg animate-fade-in"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-center mt-4 text-foreground bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-slide-down">Welcome to Next.js</h1>
        <p className="text-lg sm:text-xl text-center text-gray-700 dark:text-gray-200 max-w-2xl mt-2 animate-fade-in delay-100">
          Next.js is a powerful React framework for building fast, scalable, and user-friendly web applications. It combines the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.
        </p>
      </header>

      <main className="w-full max-w-4xl mx-auto flex flex-col gap-16 mt-12">
        {/* Section Divider */}
        <div className="w-full flex justify-center mb-2 animate-fade-in delay-200">
          <svg className="w-full max-w-lg h-6" viewBox="0 0 500 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10 Q125 0 250 10 T500 10" stroke="url(#gradient1)" strokeWidth="4" fill="none"/>
            <defs>
              <linearGradient id="gradient1" x1="0" y1="0" x2="500" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#60a5fa"/>
                <stop offset="0.5" stopColor="#a78bfa"/>
                <stop offset="1" stopColor="#f472b6"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 animate-fade-in delay-300">
          {[
            {
              icon: "/file.svg",
              title: "File-based Routing",
              desc: (
                <>
                  Create pages by adding files to the <code className="bg-black/10 dark:bg-white/10 px-1 rounded">pages</code> or <code className="bg-black/10 dark:bg-white/10 px-1 rounded">app</code> directory. Routing is automatic and intuitive.
                </>
              ),
              border: "from-blue-300 to-blue-500",
              anim: "animate-zoom-in",
              iconAnim: "animate-tilt",
            },
            {
              icon: "/globe.svg",
              title: "Hybrid Rendering",
              desc: "Choose between Static Generation (SSG) and Server-side Rendering (SSR) on a per-page basis for optimal performance and SEO.",
              border: "from-purple-300 to-purple-500",
              anim: "animate-bounce-in",
              iconAnim: "animate-float",
            },
            {
              icon: "/window.svg",
              title: "API Routes",
              desc: "Build your backend with ease. API routes let you create RESTful endpoints as simple JavaScript functions, right inside your Next.js app.",
              border: "from-pink-300 to-pink-500",
              anim: "animate-zoom-in",
              iconAnim: "animate-tilt",
            },
            {
              icon: "/vercel.svg",
              title: "Instant Deployment",
              desc: "Deploy globally in seconds with Vercel, the creators of Next.js. Enjoy zero-config deployments, previews, and edge functions.",
              border: "from-yellow-300 to-pink-400",
              anim: "animate-bounce-in",
              iconAnim: "animate-float",
            },
          ].map((card, i) => (
            <div
              key={card.title}
              className={`bg-white/60 dark:bg-black/40 rounded-2xl shadow-xl p-6 flex flex-col items-center text-center border-2 border-transparent hover:border-gradient-to-r hover:${card.border} transition-all duration-300 hover:scale-105 hover:shadow-2xl group relative overflow-hidden ${card.anim} delay-${400 + i * 100}`}
              style={{ borderImage: `linear-gradient(to right, var(--tw-gradient-stops)) 1` }}
            >
              <span className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${card.border} opacity-20 rounded-full blur-2xl z-0`}></span>
              <span className={card.iconAnim + " z-10 inline-block"}>
                <Image src={card.icon} alt={card.title} width={40} height={40} className="mb-2 dark:invert" />
              </span>
              <h2 className="text-xl font-semibold mb-2 z-10">{card.title}</h2>
              <p className="text-gray-700 dark:text-gray-200 z-10">{card.desc}</p>
            </div>
          ))}
        </section>

        {/* Section Divider */}
        <div className="w-full flex justify-center animate-fade-in delay-600">
          <svg className="w-full max-w-md h-6" viewBox="0 0 400 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10 Q100 0 200 10 T400 10" stroke="url(#gradient2)" strokeWidth="3" fill="none"/>
            <defs>
              <linearGradient id="gradient2" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a78bfa"/>
                <stop offset="0.5" stopColor="#f472b6"/>
                <stop offset="1" stopColor="#facc15"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <section className="flex flex-col items-center gap-6 animate-fade-in delay-700">
          <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Why Choose Next.js?</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
            {[
              "⚡ Blazing fast performance out of the box",
              "🔒 Built-in security and best practices",
              "🔍 SEO-friendly by default",
              "🛠️ Developer experience you’ll love",
            ].map((item, i) => (
              <li
                key={item}
                className={`bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 rounded-xl p-4 text-gray-700 dark:text-gray-200 border border-transparent hover:border-pink-400 transition-all duration-300 animate-zoom-in delay-${800 + i * 100}`}
              >
                <span className="inline-block animate-float">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section Divider */}
        <div className="w-full flex justify-center animate-fade-in delay-900">
          <svg className="w-full max-w-sm h-6" viewBox="0 0 300 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10 Q75 0 150 10 T300 10" stroke="url(#gradient3)" strokeWidth="2" fill="none"/>
            <defs>
              <linearGradient id="gradient3" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f472b6"/>
                <stop offset="0.5" stopColor="#60a5fa"/>
                <stop offset="1" stopColor="#a78bfa"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <section className="flex flex-col items-center gap-4 mt-8 animate-fade-in delay-1000">
          <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">Get Started with Next.js</h2>
          <p className="text-center text-gray-700 dark:text-gray-200 max-w-xl">Ready to build your next project? Check out the official documentation or try the interactive tutorial to learn more.</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              className="rounded-full border-2 border-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center text-base h-12 px-6 min-w-44 font-semibold animate-glow animate-pulse-strong animate-ripple"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              📚 Read the Docs
            </a>
            <a
              className="rounded-full border-2 border-transparent bg-gradient-to-r from-pink-400 via-blue-400 to-purple-400 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center text-base h-12 px-6 font-semibold animate-glow animate-pulse-strong animate-ripple"
              href="https://nextjs.org/learn"
              target="_blank"
              rel="noopener noreferrer"
            >
              🚀 Start Learning
            </a>
          </div>
        </section>
      </main>

      <footer className="w-full max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between py-8 border-t border-gray-200 dark:border-gray-800 mt-16 text-sm text-gray-500 dark:text-gray-400 animate-fade-in delay-1100">
        <span>Powered by <a href="https://nextjs.org" className="underline hover:text-foreground">Next.js</a> & <a href="https://vercel.com" className="underline hover:text-foreground">Vercel</a></span>
        <span>© {new Date().getFullYear()} Next.js Landing Page Example</span>
      </footer>
    </div>
  );
}
