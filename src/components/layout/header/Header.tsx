import Navbar from "./Navbar";
import Topbar from "./Topbar";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <Topbar />
      <Navbar />
    </header>
  );
}
