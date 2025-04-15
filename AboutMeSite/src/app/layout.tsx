import "~/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <header className="flex justify-between p-4 bg-gray-800">
          <nav className="flex gap-4">
            <a href="/" className="hover:text-purple-300">Home</a>
            <a href="/projects" className="hover:text-purple-300">Projects</a>
            <a href="/contact" className="hover:text-purple-300">Contact</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
