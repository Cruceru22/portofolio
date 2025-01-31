'use client'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
export default function Header() {
    useGSAP(()=>{
        gsap.to('#Avatar', {
            opacity:1,
            delay:0.5
        })
    }, [])
    return(
        <div className="flex justify-center p-10">
            <Link href="https://x.com/andreicruceruu" id="Avatar" className="opacity-0">
                <Avatar>
                    <AvatarImage src="https://utfs.io/f/95265fbd-8a6d-4821-aac8-135f6771c190-hrn76i.png"/>
                    <AvatarFallback>...</AvatarFallback>
                </Avatar>
            </Link>
        </div>
    )
}