import Link from "next/link"

export default function SideBar() {
  return (
    <div className="flex flex-col text-xs">
      <Link href="/">home</Link>
      <Link href="/projects">proj</Link>
      <Link href="/posts">posts</Link>
    </div>
  )
}