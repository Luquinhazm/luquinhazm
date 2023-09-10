'use client'


import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa6";



export default function ButtonBack() {
    const router = useRouter()

    return (
        <div className="my-5 w-11/12 max-w-3xl mx-auto">
            <button className="flex w-6" type='button' onClick={()=> router.back() }>
            <FaChevronLeft size={24}></FaChevronLeft>
            </button>
        </div>
    )
}

