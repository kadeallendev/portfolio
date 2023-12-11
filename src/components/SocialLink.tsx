import React from "react";
import Link from "next/link";

interface SocialLinkProps {
  link: string; // The URL of the link
  children: React.ReactNode; // The content of the link
}

export default function SocialLink({ link, children }: SocialLinkProps) {
  return (
    <Link href={link} target="_blank">
      {children}
    </Link>
  );
}
