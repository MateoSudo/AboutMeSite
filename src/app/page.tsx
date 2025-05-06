export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-blue-800 text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Matthew Ragsdale
        </h1>
        <p className="text-lg text-center max-w-2xl">
        Hello! I&apos;m a results-driven Technology Manager leading a high-performing DevSecOps team focused on building secure, scalable, and intelligent enterprise solutions.
        This site highlights my leadership experience, technical projects, and strategic contributions across cloud infrastructure, automation, and AI-powered platforms. 
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <a
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="/projects"
          >
            <h3 className="text-2xl font-bold">Projects →</h3>
            <p>Check out the projects I&apos;ve worked on.</p>
          </a>
          <a
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="/contact"
          >
            <h3 className="text-2xl font-bold">Contact →</h3>
            <p>Get in touch with me for collaborations or questions.</p>
          </a>
        </div>
      </div>
    </main>
  );
}
