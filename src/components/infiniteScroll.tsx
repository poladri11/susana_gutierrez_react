import Image from "next/image";
import Styles from "./components.module.css"

export default function InfiniteScroll() {
    return (
        <div className={`relative flex-1 w-full flex py-4 ${Styles.infiniteScroll} self-center`}>
            <ul className={`flex items-center justify-center gap-4 ${Styles.infiniteScroll_inner}`}>
                <li>
                    <Image 
                        src={"/images/bg/inf/1.webp"}
                        width={100}
                        height={100}
                        alt={"Test"}
                        className="object-cover rounded"
                        style={{height: "5rem"}}
                        loading="lazy"
                    />
                </li>
                <li>
                    <Image 
                        src={"/images/bg/inf/2.webp"}
                        width={100}
                        height={100}
                        alt={"Test"}
                        className="object-cover rounded"
                        style={{height: "5rem"}}
                    />
                </li>
                <li>
                    <Image 
                        src={"/images/bg/inf/3.webp"}
                        width={100}
                        height={100}
                        alt={"Test"}
                        className="object-cover rounded"
                        style={{height: "5rem"}}
                    />
                </li>
                <li>
                    <Image 
                        src={"/images/bg/inf/4.webp"}
                        width={100}
                        height={100}
                        alt={"Test"}
                        className="object-cover rounded"
                        style={{height: "5rem"}}
                    />
                </li>
                <li>
                    <Image 
                        src={"/images/bg/inf/5.webp"}
                        width={100}
                        height={100}
                        alt={"Test"}
                        className="object-cover rounded"
                        style={{height: "5rem"}}
                    />
                </li>
                <li>
                    <Image 
                        src={"/images/bg/inf/6.webp"}
                        width={100}
                        height={100}
                        alt={"Test"}
                        className="object-cover rounded"
                        style={{height: "5rem"}}
                    />
                </li>
                <li>
                    <Image 
                        src={"/images/bg/inf/7.webp"}
                        width={100}
                        height={100}
                        alt={"Test"}
                        className="object-cover rounded"
                        style={{height: "5rem"}}
                    />
                </li>

                <li aria-hidden={true}>
                    <Image 
                        src={"/images/bg/inf/1.webp"}
                        width={100}
                        height={100}
                        alt={"Test"}
                        className="object-cover rounded"
                        style={{height: "5rem"}}
                    />
                </li>
                <li aria-hidden={true}>
                    <Image 
                        src={"/images/bg/inf/2.webp"}
                        width={100}
                        height={100}
                        alt={"Test"}
                        className="object-cover rounded"
                        style={{height: "5rem"}}
                    />
                </li>
                <li aria-hidden={true}>
                    <Image 
                        src={"/images/bg/inf/3.webp"}
                        width={100}
                        height={100}
                        alt={"Test"}
                        className="object-cover rounded"
                        style={{height: "5rem"}}
                    />
                </li>
                <li aria-hidden={true}>
                    <Image 
                        src={"/images/bg/inf/4.webp"}
                        width={100}
                        height={100}
                        alt={"Test"}
                        className="object-cover rounded"
                        style={{height: "5rem"}}
                    />
                </li>
                <li aria-hidden={true}>
                    <Image 
                        src={"/images/bg/inf/5.webp"}
                        width={100}
                        height={100}
                        alt={"Test"}
                        className="object-cover rounded"
                        style={{height: "5rem"}}
                    />
                </li>
                <li aria-hidden={true}>
                    <Image 
                        src={"/images/bg/inf/6.webp"}
                        width={100}
                        height={100}
                        alt={"Test"}
                        className="object-cover rounded"
                        style={{height: "5rem"}}
                    />
                </li>
                <li aria-hidden={true}>
                    <Image 
                        src={"/images/bg/inf/7.webp"}
                        width={100}
                        height={100}
                        alt={"Test"}
                        className="object-cover rounded"
                        style={{height: "5rem"}}
                    />
                </li>

            </ul>
        </div>
    )
}