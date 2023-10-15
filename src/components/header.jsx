import Image from "next/image"
import Link from "next/link"

import MobileMenu from "./mobileMenu"
import DesktopNavar from "./desktopNavar"
import Socials from "./socials"
import LogOut from "./LogOut"

export default function Header() {

    return (
        <header className="bg-dark gap-4 justify-center p-4 flex items-center relative md:justify-between">
            <div className="text-white flex flex-1 md:flex-none flex-col items-center justify-center gap-3 md:items-start md:ml-10">
                <Link href={"/"}>
                    <Image 
                        src="/images/logo/logo.webp"
                        width={150}
                        height={150}
                        alt="Susana gutiérrez logo"
                    />
                </Link>
                <h1 className="text-xs md:hidden">
                    Crea recuerdos que te lleven a otro mundo
                </h1>
            </div>
            <LogOut />
            <MobileMenu />
            <DesktopNavar />
            <div className="hidden md:block md:mr-10">
                <Socials />
            </div>
        </header>
    )
}