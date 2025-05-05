export default function Projects() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
        <div className="container flex flex-col items-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            My <span className="text-purple-300">Projects</span>
          </h1>
          <p className="text-lg text-center max-w-2xl">
            Here are some of the projects I&apos;ve worked on:
          </p>
          <ul className="list-disc text-left">
            <li>Project 1: AI Trading Application</li>
            <li>Project 2: Android Job Offer Application</li>
            <li>Project 3: Yet another amazing project</li>
          </ul>
        </div>
      </main>
    );
  }