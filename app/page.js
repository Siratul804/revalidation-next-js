import { MdOutlineCreateNewFolder } from "react-icons/md";
import { FaUserShield } from "react-icons/fa6";

import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div className='flex justify-center bg-white items-center h-screen ' >
      <Link href="/ctrl/create" className='text-black text-xl font-mono hover:text-red-500 flex '  >
      <MdOutlineCreateNewFolder size={65}  />
      </Link>
      <Link href="/ctrl/role" className='text-black text-xl font-mono hover:text-red-500 flex pl-5 '  >
      <FaUserShield size={65}  />
      </Link>
    </div>
    </>
  )
}
