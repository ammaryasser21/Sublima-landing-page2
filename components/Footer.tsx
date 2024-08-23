import Image from "next/image";
import Link from "next/link";
import React from "react";
import xLogo from "@/public/x.svg";
import FacebookLogo from "@/public/facebook.svg";
import linkLogo from "@/public/link.svg";

interface FooterLink {
  label: string;
  href: string;
  badge?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const sections: FooterSection[] = [
  {
    title: "Products",
    links: [
      { label: "Sitesprint", href: "#" },
      { label: "Boardly", href: "#", badge: true },
      { label: "Vistadash", href: "#" },
      { label: "Lumina", href: "#" },
      { label: "Spectra", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "#" },
      { label: "Community", href: "#" },
      { label: "Live chat", href: "#" },
      { label: "Guides", href: "#" },
      { label: "Feedback", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Partnerships", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Disclaimer", href: "#" },
      { label: "Accessibility", href: "#" },
      { label: "Cookie", href: "#" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full grid place-items-center">
      <div className="container px-4 xl:px-0 xl:w-[1216px] xl:gap-0 gap-12 flex xl:flex-row flex-col justify-between py-16">
        <Image
          src="/logo.png"
          alt="Logo"
          className="h-[100%]"
          width={32}
          height={32}
        />

        <div className="Links flex flex-row flex-wrap gap-8">
          {sections.map((section) => (
            <div key={section.title} className="w-[116px] sm:w-[176px]">
              <h3 className="font-medium text-gray-700">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li
                    key={link.label}
                    className="text-gray-600 hover:text-gray-900 flex items-center"
                  >
                    <a href={link.href}>{link.label}</a>
                    {link.badge && (
                      <span className="ml-2 px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                        Badge
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container px-4 xl:px-0 xl:w-[1216px] flex sm:flex-row sm:gap-0 gap-6 flex-col sm:justify-between py-8 sm:items-center">
        <p className="text-[#4B5563] text-base">
          © 2024 Sublima, Inc. All rights reserved.
        </p>
        <div className="flex flex-row gap-4">
          {[xLogo, FacebookLogo, linkLogo].map((platform, index) => (
            <Link
              key={index}
              href="#"
              className="size-[20px] grid place-items-center"
            >
              <Image src={platform} alt="social" width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
