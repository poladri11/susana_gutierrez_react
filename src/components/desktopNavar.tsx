"use client";
import Link from "next/link"
import { useAuth } from "@/context/AuthContext"

export default function DesktopNavar() {

    const { isAuth } = useAuth();

    const navarAnimation = "after:transition-all after:content-[''] after:bg-slate-50 after:block after:w-0 after:hover:w-full after:h-px after:hover:bg-slate-400"


    return(
        <nav className="hidden md:flex md:mr-10 md:flex-1 justify-center">
            <ul className="text-white flex gap-8">
                <li>
                    <Link href={"/"}  className={navarAnimation}>
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link href={"/galeria"} className={navarAnimation}>
                        Galería
                    </Link>
                </li>
                <li>
                    <Link href={"/clases"} className={navarAnimation}>
                        Clases
                    </Link>
                </li>
                <li>
                    <Link href={"/contacto"} className={navarAnimation}>
                        Contacto
                    </Link>
                </li>
                {isAuth &&
                    <li>
                        <Link href={"/admin"} className={navarAnimation}>
                            Administración
                        </Link>
                    </li>
                }
            </ul>
        </nav>
    )
}