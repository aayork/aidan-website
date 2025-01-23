import Link from "next/link";

export const Footer = () => (
  <footer className="ds-footer text-center">
    <div className="container">
      <section>
        <h4 className="m-4">Please reach out!</h4>
        <Link href="mailto:york_aa19@outlook.com" className="ds-button">
          Email Me
        </Link>
      </section>
      <p className="m-4">&copy;2025 Aidan York</p>
    </div>
  </footer>
);
