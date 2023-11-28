import React from "react";

interface SocialLinkProps {
  link: string; // The URL of the link
  children: React.ReactNode; // The content of the link
}

export default function SocialLink({ link, children }: SocialLinkProps) {
  return (
    <a href={link} target="_blank" className="text-2xl font-bold text-blue-400">
      {children}
    </a>
  );
}
