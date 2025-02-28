import { Github, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-4 bg-gray-900 text-white flex items-center justify-center gap-2">
      <p>Made with ❤️ by Jerin</p>
      <a
        href="https://www.instagram.com/jerin.javascript"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-500 transition"
      >
        <Instagram size={20} />
      </a>
      <a
        href="https://github.com/jerinjacob007/ask-a-date"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-500 transition"
      >
        <Github size={20} />
      </a>
    </footer>
  );
}
