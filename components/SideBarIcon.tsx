import Link from "next/link";

const SideBarIcon = ({ icon, text,link }: any) => (
  
    <Link href={link} className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip md:group-hover:scale-100">{text}</span>
    </Link>
  
);

export default SideBarIcon;
