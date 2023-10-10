import Link from "next/link"
export default function Footer() {
    return (
        <footer className="bg-dark p-2 flex items-center justify-center">
            <div className="text-white">
                <Link href={"#"} className=" border-b">
                    Cookies
                </Link>
            </div>
        </footer>
    )
}