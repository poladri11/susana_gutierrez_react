import Link from "next/link"
import Socials from "./socials"
export default function Footer() {
    return (
        <footer className="bg-dark p-5 flex items-center justify-center">
            <div className="text-white">
                <Link href={"#"} className=" border-b">
                    Cookies
                </Link>
            </div>
        </footer>
    )
}