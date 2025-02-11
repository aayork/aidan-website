import Link from "next/link";

export const Footer = () => (
  <footer className="bg-black py-28 text-center">
    <div className="container mx-auto">
      <section>
        <h4 className="text-white text-6xl mb-8">Please reach out!</h4>
        <Link
          href="mailto:york_aa19@outlook.com"
          className="border-2 border-red-800 text-red-800 px-6 py-3 rounded-3xl shadow-md hover:bg-red-800 hover:text-white transition"
        >
          EMAIL ME
        </Link>
      </section>
      <p className="mt-8 text-gray-600">&copy;2025 Aidan York</p>
    </div>
  </footer>
);
