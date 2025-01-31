"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import profilePic from "../../../utils/Images/profilx.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
export default function Header() {
  useGSAP(() => {
    gsap.to("#Avatar", {
      opacity: 1,
      delay: 0.5,
    });
  }, []);
  return (
    <div className="flex justify-center p-10">
      <Link
        href="https://x.com/andreicruceruu"
        id="Avatar"
        className="opacity-0"
      >
        <Avatar>
          <AvatarImage src={profilePic.src} />
          <AvatarFallback>...</AvatarFallback>
        </Avatar>
      </Link>
    </div>
  );
}
