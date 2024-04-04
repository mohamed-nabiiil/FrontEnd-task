import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import NavLink from "./NavLink";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [selectedLink, setSelectedLink] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const storedSelectedLink = localStorage.getItem("selectedLink");
    if (storedSelectedLink) {
      setSelectedLink(storedSelectedLink);
    }
  }, []);

  const handleLinkClick = (link: { href: string }) => {
    setSelectedLink(link.href);
    // Save selected link to localStorage
    localStorage.setItem("selectedLink", link.href);
    // Close the mobile menu after clicking a link
    setIsMobileMenuOpen(false);
  };
  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "ar" : "en";
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: t("Home") },
    { href: "/categories", label: t("Categories") },
    { href: "/contactus", label: t("Contact US") },
    { href: "/about", label: t("About") },
  ];

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white text-black">
      <div className="flex items-center justify-between gap-28">
        <div className="flex items-center pl-10">
          <Link href={"/"}>
            <Image
              src={"/assets/logo.svg"}
              width={100}
              height={50}
              alt="Logo"
            />
          </Link>
        </div>
        <nav className="hidden lg:block">
          <ul className="flex flex-row items-center space-x-4">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`${index !== navLinks.length - 1 ? "ml-4" : ""}`}
              >
                <NavLink
                  {...link}
                  selected={selectedLink === link.href}
                  onClick={() => handleLinkClick(link)}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center justify-between relative">
        <button
          className="lg:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle Mobile Menu"
        >
          <Image
            src="/assets/navBurger.svg"
            alt="Menu"
            width={24}
            height={24}
          />
        </button>
        {currentLanguage === "en" ? (
          <div
            onClick={toggleLanguage}
            className="flex flex-row items-center gap-1"
          >
            <span>العربية</span>
            <Image
              src={"/assets/arabicLang.svg"}
              alt="Arabic Language"
              width={24}
              height={24}
            />
          </div>
        ) : (
          <div
            onClick={toggleLanguage}
            className="flex flex-row items-center gap-1"
          >
            <span>En</span>
            <Image
              src={"/assets/EnLang.svg"}
              alt="English Language"
              width={24}
              height={24}
            />
          </div>
        )}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-[100000] opacity-50"
            onClick={closeMobileMenu} // Close menu when clicking outside
          />
        )}
        {isMobileMenuOpen && (
          <nav className="fixed top-[70px] left-0 w-full bg-white border border-gray-200 rounded-md shadow-lg">
            <ul className="flex flex-col items-center justify-center space-y-4 p-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    {...link}
                    selected={selectedLink === link.href}
                    onClick={() => {
                      handleLinkClick(link);
                    }}
                  />
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
