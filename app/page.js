import { MdOutlineCreateNewFolder } from "react-icons/md";
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div className='flex justify-center bg-white items-center h-screen ' >
      <Link href="/ctrl/create" className='text-black text-xl font-mono hover:text-red-500 flex '  >
      <MdOutlineCreateNewFolder size={65}  />
      
      </Link>
    </div>
    </>
  )
}
