"use client"
import {useState, useEffect} from 'react'
import {useTheme} from 'next-themes'
import {BiSolidMoon, BiSolidSun} from 'react-icons/bi'

export default function ThemeSwitcher(){
    const [mounted, setMounted] = useState(false)
    const {theme,setTheme} = useTheme()

    useEffect(()=>{
        setMounted(true)
    },[])
    if(!mounted){
        return null
    }

    return(
        <div className='flex gap-8'>
        <button onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}
        className='bg-zinc-200 dark:bg-zinc-700 p-2 rounded-full'
        >
            {theme === 'light'?
            <BiSolidMoon size={26}/>: 
            <BiSolidSun size={26}/>}
        </button>
            
        </div>
    )
} 