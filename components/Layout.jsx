import Footer from "./Footer";
import Navbar from "./Navbar";

import ScrollToTopButton from "./ScrollToTopButton";
export default function Layout({ children, footerData, navbarData }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
