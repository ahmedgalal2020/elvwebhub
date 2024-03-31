import Link from "next/link"
import { usePathname } from "next/navigation"
const NavLink = ({link}) => {
    const pathName = usePathname();
  return (
    <Link className={`rounded p-2 ${pathName === link.url && "bg-custom-p1 text-white "}`} href={link.url} key={link.title}>{link.title}</Link>
  )
}

export default NavLink