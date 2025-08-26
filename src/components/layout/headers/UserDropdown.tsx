import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { User, LogIn, UserPlus, LogOut } from "lucide-react";

export default function UserDropdown() {
  const [open, setOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null); // 👈 Fix here

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        title="User Menu"
      >
        <User size={22} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg">
          <ul className="py-2 text-sm text-gray-700">
            {!isAuthenticated ? (
              <>
                <li>
                  <Link
                    to="/user/login"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    <LogIn size={16} /> Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/user/register"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    <UserPlus size={16} /> Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/user/profile"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    <User size={16} /> Profile
                  </Link>
                </li>
                <li>
                  <button
                    className="flex w-full items-center gap-2 px-4 py-2 hover:bg-gray-100 text-left"
                    onClick={() => {
                      setIsAuthenticated(false);
                      setOpen(false);
                    }}
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
