import Navbar from "./Navbar";
import Topbar from "./Topbar";

export default function Header() {
  return (
    <header className="w-full">
      <Topbar />
      <Navbar />
    </header>
  );
}
