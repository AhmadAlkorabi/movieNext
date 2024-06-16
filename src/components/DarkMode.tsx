'use client'

import { MdLightMode, MdDarkMode } from "react-icons/md"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";
export default function DarkMode() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted,setMounted]= useState(false);
    useEffect(() => {
      setMounted(true)
    }, [])
    
    const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <div>
        {mounted&&
            (currentTheme==='dark'?
            <MdLightMode onClick={()=>setTheme('light')} className="text-lg cursor-pointer hover:text-amber-500"/>:
            <MdDarkMode onClick={()=>setTheme('dark')} className="text-lg cursor-pointer hover:text-amber-500"/>

        )}
      </div>
  )
}
