import About from "@/components/about"
import TinyGallery from "@/components/tinyGallery"
import InfiniteScroll from "@/components/infiniteScroll"

export default function Home() {

  return (
    <main className="flex flex-col gap-1 flex-1 items-center bg-[#02040b] md:items-start md:border-t-2 md:border-[#363535]">
      <div className="w-full flex flex-col md:flex-row">
        <About />
        <TinyGallery />
      </div>
      <InfiniteScroll />
    </main>
  )
}
