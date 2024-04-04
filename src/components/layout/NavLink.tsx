import Link from "next/link";

interface NavLinkProps {
  href: string;
  label: string;
  selected?: boolean;
  onClick: () => void;
}

const NavLink = ({ href, label, selected, onClick }: NavLinkProps) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer ${selected ? "text-[#49BD88]" : ""}`}
    >
      <Link href={href}>
        <span>{label}</span>
      </Link>
    </div>
  );
};

export default NavLink;
