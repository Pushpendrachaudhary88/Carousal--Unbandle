"use client";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  size?: number;
};

export default function Logo({ size = 36 }: LogoProps) {
  return (
    <Link href="/" aria-label="Home" className="flex items-center gap-2">
      <Image src="/logo.svg" alt="StreamNow" width={size} height={size} priority />
      <span className="text-lg font-semibold tracking-tight hidden sm:block">
        Stream<span className="text-red-500">Now</span>
      </span>
    </Link>
  );
}

