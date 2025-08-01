'use client'
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image'
import Link from 'next/link'
import { LogOut, Settings, User } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="h-16 bg-white shadow px-6 flex items-center justify-between fixed w-full z-50">
      <nav className="">
      <div className="flex items-center justify-between w-full">
        {/* Left Side: Logo and Menu */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Image
            src="/logo.png"
            width={185}
            height={450}
            alt="Logo of Learnup Ai"
          />

          {/* Navigation */}
          <div className="flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-7">
                {/* Teams Item */}
                <NavigationMenuItem>
                  <Link
                    href="/"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22 22" fill="none" className="text-[#3866fb]">
                      <rect x="3.66669" y="3.6665" width="5.5" height="6.41667" rx="1" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      <rect x="3.66669" y="13.75" width="5.5" height="4.58333" rx="1" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      <rect x="12.8333" y="3.6665" width="5.5" height="4.58333" rx="1" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      <rect x="12.8333" y="11.9165" width="5.5" height="6.41667" rx="1" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[#414141] font-semibold font-[Sora] text-[16px]">Teams</span>
                  </Link>
                </NavigationMenuItem>

                {/* Users Item */}
                <NavigationMenuItem>
                  <Link
                    href="/"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                      <circle cx="10" cy="7.16683" r="2.83333" stroke="#083DF5" strokeLinecap="round" />
                      <path d="M4.25075 13.9592C4.78696 12.4677 6.33932 11.75 7.92427 11.75H12.0757C13.6607 11.75 15.213 12.4677 15.7492 13.9592C15.9709 14.5757 16.155 15.2985 16.2224 16.098C16.2527 16.4569 15.958 16.75 15.5978 16.75H4.40217C4.04199 16.75 3.7473 16.4569 3.77759 16.098C3.84504 15.2985 4.02913 14.5757 4.25075 13.9592Z" stroke="#083DF5" strokeLinecap="round" />
                    </svg>
                    <span className="text-[#414141] font-semibold font-[Sora] text-[16px]">Users</span>
                  </Link>
                </NavigationMenuItem>

                {/* Org Name & Members */}
                <div className="flex flex-col pl-10">
                  <Link href="/" className="font-bold text-[#1F1F1F] text-[18px] font-[Sora]">Organization Name</Link>
                  <div className="flex">
                    <div className="text-[12px] text-[#414141] font-[Roboto]">Members:</div>
                    <div className="text-[#083DF5] text-[12px] font-[Roboto] ml-1">100</div>
                  </div>
                </div>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Right Side: Avatar */}
        <div className='items-center gap-4 flex'>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="w-14 h-14 bg-transparent">
              <AvatarFallback className="p-0 w-full h-full bg-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 61 61" fill="none" className="rounded-full object-cover">
                  <circle cx="30.5" cy="30.5" r="23.5" fill="#7795FF" />
                  <path
                    d="M36.8467 23.3594V39H34.7627L26.8887 26.9365V39H24.8154V23.3594H26.8887L34.7949 35.4551V23.3594H36.8467Z"
                    fill="#F7F8FA"
                  />
                </svg>
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="h-[1.2rem] w-[1.2rem] mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className='flex flex-col'>
         <Link className='text-[16px] font-semibold text-[#414141] font-[Sora]' href='/'>Name Surname</Link>
         <Badge variant="secondary " className="bg-[#7695ff] text-[12px] text-[#F7F8FA] dark:bg-blue-600 font-[Roboto]">Super Admin</Badge>
         </div>
         </div>
      </div>
    </nav>
    </header>
    
  )
}

export default Navbar
