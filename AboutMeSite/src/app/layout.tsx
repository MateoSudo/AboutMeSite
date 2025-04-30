import "~/styles/globals.css";
import { FaGithub, FaLinkedin } from "react-icons/fa"; //import GitHub and Linkedin icons
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <header className="flex justify-between items-center p-4 bg-blue-700">
          <nav className="flex gap-6">
            <Link href="/" className="hover:text-purple-300">Home</Link> 
            <Link href="/projects" className="hover:text-purple-300">Projects</Link>
            <Link href="/contact" className="hover:text-purple-300">Contact</Link>
          </nav>
          <div className = "flex gap-4">
            <a
            href="https://github.com/MateoSudo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300"
            >
              <FaGithub size={24} />
            </a>
            <a //External projects can still use / since this is an external link
              href="https://www.linkedin.com/in/matthew-ragsdale-462b3016a/"
              target="_blank"
              rel="noopener noreferrer"
              className = "hover:text-purple-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
