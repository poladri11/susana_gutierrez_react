import Image from "next/image";

export default function Socials() {
    return (
        <div>
            <ul className="flex gap-2">
                <li>
                    <a className="hover:opacity-80" href="#" target="_blank">
                        <Image 
                            src={"/images/socials/instagram.svg"}
                            width={18}
                            height={18}
                            alt="Instagram Icon"
                        />
                    </a>
                </li>
                <li>
                    <a className="hover:opacity-80" href="#" target="_blank">
                        <Image 
                            src={"/images/socials/facebook.svg"}
                            width={18}
                            height={18}
                            alt="facebook Icon"
                        />
                    </a>
                </li>
                <li>
                    <a className="hover:opacity-80" href="#" target="_blank">
                        <Image 
                            src={"/images/socials/email.svg"}
                            width={20}
                            height={20}
                            alt="Instagram Icon"
                        />
                    </a>
                </li>
                <li>
                    <a className="hover:opacity-80" href="#" target="_blank">
                        <Image 
                            src={"/images/socials/whatsapp.svg"}
                            width={20}
                            height={20}
                            alt="WhatsApp Icon"
                        />
                    </a>
                </li>
            </ul>
        </div>
    )
}