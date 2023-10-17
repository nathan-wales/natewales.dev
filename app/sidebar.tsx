import Link from "next/link"

//unless we end up storing the SVGs locally, I don't think it makes sense to extract generating these buttons into a helper method.
export default function SideBar() {
  return (
    <nav className="flex flex-col text-xs bg-stone-900 text-white items-start h-screen w-14">
      <ul className="w-3/4 mx-auto space-y-3">
        <li className="flex flex-col text-center rounded-md bg-zinc-800 border-orange-800 border mt-2" >
          <Link href="/">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <p>home</p>
          </Link>
        </li>
        <li className="flex flex-col text-center rounded-md bg-zinc-800 border-orange-800 border">
          <Link href="/projects">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <p>proj</p>
          </Link>
        </li>
        <li className="flex flex-col text-center rounded-md bg-zinc-800 border-orange-800 border">  
          <Link href="/posts">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
            <p>posts</p>
          </Link>
        </li>      
      </ul>
    </nav>
  )
}


