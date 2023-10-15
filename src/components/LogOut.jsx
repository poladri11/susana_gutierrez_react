"use client";
import Image from "next/image"
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";


export default function LogOut() {
    
    const router = useRouter();
    const { isAuth } = useAuth();

    const handleLogOut = () => {
        localStorage.removeItem("JWT");
        window.location.reload();
    }
    return (
        <div>
            {isAuth && 
                <Image 
                    src={"/images/icons/logout.svg"}
                    width={24}
                    height={24}
                    alt="Log out Icon"
                    className="cursor-pointer"
                    onClick={handleLogOut}
                />
}
        </div>
    )

}