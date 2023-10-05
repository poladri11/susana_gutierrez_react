import About from "@/components/about"
import TinyGallery from "@/components/tinyGallery"
import Link from "next/link"

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center bg-light">
      <About />
      <Link 
        href={"/about"}
      >
        About
      </Link>
      <TinyGallery />
    </main>
  )
}
