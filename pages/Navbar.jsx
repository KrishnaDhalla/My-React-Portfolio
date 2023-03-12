import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const [mounted,setMounted]=useState(false)
    useEffect(()=>{
      setMounted(true)
    },[])
    if(!mounted) return null
  const currentTheme = theme === "system" ? systemTheme : theme
  return (

    <nav className=" top-0 py-5 mb-12 flex justify-between dark:text-white px-0">
          <Link href="/"><h1 className=" text-xl md:text:2xl lg:text-2xl font-burtons">Portfolio</h1></Link>  

            <ul className="flex  jusitems-center gap-4 lg:gap-0 md:gap-0">
                <Link legacyBehavior href="/Projects">
                  <a className="text-gray-600 hover:text-teal-500 dark:text-gray-200 dark:hover:text-teal-500 md:mx-5 lg:mx-5">
                    Projects
                  </a>
                </Link>
                <Link legacyBehavior href="/About">
                  <a className="text-gray-600 hover:text-teal-500 dark:text-gray-200 dark:hover:text-teal-500 md:mx-5 lg:mx-5">
                    About_Me
                  </a>
                </Link>
               {currentTheme === "dark" ? (
                <button
                  onClick={() => setTheme("light")}
                  className=" pb-2 md:pl-10 lg:pl-10 "
                >
                  <RiSunLine size={25} color="white" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme("dark")}
                  className=" pb-2 md:pl-10 lg:pl-10 "
                >
                  <RiMoonFill size={25} />
                </button>
              )}
            </ul>
          </nav>
  )
}

export default Navbar