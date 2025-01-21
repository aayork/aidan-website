import Link from "next/link";

export const Footer = () => (
  <footer className="ds-footer text-center">
    <div className="container">
      <section>
        <h4>Feel free to contact me!</h4>
        <Link href="mailto:york_aa19@outlook.com" className="ds-button">
          Email
        </Link>
      </section>
      <p>&copy;2025 Aidan York</p>
    </div>
  </footer>
);
