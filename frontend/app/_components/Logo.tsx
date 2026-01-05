"use client";

import Image from "next/image";
export default function Logo() {
	return <Image className="h-auto! relative!" fill src="/logo.jpg" alt="Egypt beatbox logo." style={{objectFit: "contain"}} />
}