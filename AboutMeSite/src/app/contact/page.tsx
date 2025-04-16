export default function Contact() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
        <div className="container flex flex-col items-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Contact <span className="text-purple-300">Me</span>
          </h1>
          <p className="text-lg text-center max-w-2xl">
            Feel free to reach out to me for collaborations or questions!
          </p>
          <form className="flex flex-col gap-4 w-full max-w-md">
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-md bg-white/10 px-4 py-2 text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="rounded-md bg-white/10 px-4 py-2 text-white"
            />
            <textarea
              placeholder="Your Message"
              className="rounded-md bg-white/10 px-4 py-2 text-white"
            />
            <button
              type="submit"
              className="rounded-md bg-purple-500 px-4 py-2 text-white hover:bg-purple-700"
            >
              Send
            </button>
          </form>
        </div>
      </main>
    );
  }