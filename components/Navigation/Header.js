// app/components/Header.js

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "@/public/logo.svg"
import PrimaryButton from '../Buttons/PrimaryButton';

const Header = () => {
  return (
    <header className="bg-transparent text-white mt-12">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
          <Image src={Logo} alt="Logo" className="" />
          </Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link href="/team">
                <span className="hover:text-green-500">Team</span>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <span className="hover:text-green-500">Services</span>
              </Link>
            </li>
            <li>
              <Link href="/case-studies">
                <span className="hover:text-green-500">Case Studies</span>
              </Link>
            </li>
            <li>
              <Link href="/process">
                <span className="hover:text-green-500">Process</span>
              </Link>
            </li>
            <li>
              <Link href="/inquiries">
                <span className="hover:text-green-500">Inquiries</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div>
          <Link href="/contact">
            <PrimaryButton isCta={false}>Reach out</PrimaryButton>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
