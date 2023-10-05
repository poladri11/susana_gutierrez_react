import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className="bg-dark p-3 flex items-center relative">
            <div className="text-white flex-1 flex flex-col items-center justify-center gap-3">
                <Link href={"/"}>
                    <Image 
                        src="/images/logo/logo.webp"
                        width={150}
                        height={150}
                        alt="Susana gutiérrez logo"
                    />
                </Link>
                <h1 className="text-xs">
                    Crea recuerdos que te lleven a otro mundo
                </h1>
            </div>
            <div className="flex flex-col gap-1 absolute right-5 top-1/2 -translate-y-1/2 lg:hidden">
                <span className="w-6 h-0.5 bg-light block"></span>
                <span className="w-6 h-0.5 bg-light block"></span>
                <span className="w-6 h-0.5 bg-light block"></span>
            </div>
            <nav>
                <ul>
                    {/* <Link href={"/"}>
                        Inicio
                    </Link>
                    <Link href={"/galeria"}>
                        Galería
                    </Link>
                    <Link href={"/clases"}>
                        Clases
                    </Link>
                    <Link href={"/contacto"}>
                        Contacto
                    </Link> */}
                    
                </ul>
            </nav>
        </header>
    )
}