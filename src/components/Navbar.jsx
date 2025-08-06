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
    <header className="h-16 bg-[#f7f8fa] shadow px-6 flex items-center justify-between fixed w-full z-50">
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
<circle cx="11.5" cy="7.6665" r="2.375" stroke="#083DF5" strokeLinecap="round"/>
<path d="M13.2124 6.23942C13.3999 5.9147 13.6795 5.65286 14.0158 5.48702C14.3521 5.32118 14.73 5.25878 15.1017 5.30772C15.4735 5.35667 15.8224 5.51475 16.1043 5.76197C16.3862 6.0092 16.5885 6.33448 16.6855 6.69666C16.7825 7.05884 16.77 7.44167 16.6495 7.79673C16.529 8.15179 16.3059 8.46314 16.0084 8.6914C15.7109 8.91966 15.3524 9.05459 14.9783 9.07911C14.6041 9.10363 14.2311 9.01666 13.9064 8.82918" stroke="#083DF5"/>
<path d="M9.78757 6.23942C9.60009 5.9147 9.32053 5.65286 8.98424 5.48702C8.64795 5.32118 8.27003 5.25878 7.89828 5.30772C7.52652 5.35667 7.17763 5.51475 6.89572 5.76197C6.61381 6.0092 6.41154 6.33448 6.3145 6.69666C6.21745 7.05884 6.22998 7.44167 6.35051 7.79673C6.47104 8.15179 6.69415 8.46314 6.99162 8.6914C7.2891 8.91966 7.64758 9.05459 8.02174 9.07911C8.3959 9.10363 8.76892 9.01666 9.09365 8.82918" stroke="#083DF5"/>
<path d="M11.4999 11.979C15.172 11.979 16.2858 14.7698 16.6236 16.4629C16.7617 17.1549 16.1986 17.729 15.493 17.729H7.50684C6.80115 17.729 6.23806 17.1549 6.37616 16.4629C6.714 14.7698 7.82782 11.979 11.4999 11.979Z" stroke="#083DF5" strokeLinecap="round"/>
<path d="M14.8543 11.021V10.521H14.8543L14.8543 11.021ZM18.4002 14.4331L18.8801 14.2929L18.8801 14.2929L18.4002 14.4331ZM17.2762 15.813V16.313H17.2764L17.2762 15.813ZM16.4647 15.813L15.9844 15.9519L16.0888 16.313H16.4647V15.813ZM12.5447 12.063L12.1756 11.7258L11.5552 12.4049L12.4625 12.5562L12.5447 12.063ZM14.8543 11.021V11.521C15.7586 11.521 16.4099 11.9291 16.9001 12.5166C17.4017 13.1176 17.7225 13.8965 17.9203 14.5733L18.4002 14.4331L18.8801 14.2929C18.6643 13.5541 18.2947 12.627 17.668 11.8759C17.0299 11.1112 16.1151 10.521 14.8543 10.521V11.021ZM18.4002 14.4331L17.9203 14.5733C18.0221 14.9221 17.7599 15.3128 17.276 15.313L17.2762 15.813L17.2764 16.313C18.3039 16.3126 19.2021 15.395 18.8801 14.2929L18.4002 14.4331ZM17.2762 15.813V15.313H16.4647V15.813V16.313H17.2762V15.813ZM16.4647 15.813L16.945 15.674C16.4927 14.1106 15.3673 12.0268 12.627 11.5698L12.5447 12.063L12.4625 12.5562C14.6537 12.9216 15.5811 14.5579 15.9844 15.9519L16.4647 15.813ZM12.5447 12.063L12.9139 12.4002C13.391 11.8779 14.0103 11.521 14.8543 11.521L14.8543 11.021L14.8543 10.521C13.6803 10.521 12.8063 11.0353 12.1756 11.7258L12.5447 12.063Z" fill="#083DF5"/>
<path d="M8.14557 11.021V10.521H8.14552L8.14557 11.021ZM10.4542 12.063L10.5365 12.5562L11.4437 12.4047L10.8233 11.7257L10.4542 12.063ZM6.53522 15.813V16.313H6.91108L7.01553 15.9519L6.53522 15.813ZM4.59967 14.4331L4.11974 14.2929L4.11972 14.2929L4.59967 14.4331ZM8.14557 11.021V11.521C8.98904 11.521 9.60785 11.8781 10.0851 12.4003L10.4542 12.063L10.8233 11.7257C10.1928 11.0358 9.31943 10.521 8.14557 10.521V11.021ZM10.4542 12.063L10.3718 11.5698C7.63246 12.0273 6.5071 14.1108 6.05491 15.674L6.53522 15.813L7.01553 15.9519C7.4187 14.5582 8.34613 12.9219 10.5365 12.5562L10.4542 12.063ZM6.53522 15.813V15.313H5.72467V15.813V16.313H6.53522V15.813ZM5.72467 15.813V15.313C5.24035 15.313 4.97783 14.9218 5.07962 14.5733L4.59967 14.4331L4.11972 14.2929C3.79772 15.3955 4.69719 16.313 5.72467 16.313V15.813ZM4.59967 14.4331L5.0796 14.5734C5.27736 13.8966 5.59824 13.1177 6.09981 12.5167C6.59005 11.9292 7.24145 11.5211 8.14562 11.521L8.14557 11.021L8.14552 10.521C6.88484 10.5211 5.97011 11.1113 5.33202 11.876C4.70527 12.627 4.33562 13.5541 4.11974 14.2929L4.59967 14.4331Z" fill="#083DF5"/>
</svg>
                    <span className="text-[#414141] font-semibold font-sora text-[16px]">Teams</span>
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
                    <span className="text-[#414141] font-semibold font-sora text-[16px]">Users</span>
                  </Link>
                </NavigationMenuItem>

                {/* Org Name & Members */}
                <div className="flex flex-col pl-10 space-y-1.5">
                  <Link href="/" className="font-bold text-[#1F1F1F] text-[18px] font-sora">Organization Name</Link>
                  <div className="flex ">
                    <div className="text-[12px] text-[#414141] font-Roboto">Members:</div>
                    <div className="text-[#083DF5] text-[12px] font-roboto ml-1">100</div>
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
         <Link className='text-base font-semibold text-[#414141] font-sora' href='/'>Name Surname</Link>
         <Badge variant="secondary " className="bg-[#7695ff] text-xs text-[#F7F8FA] dark:bg-blue-600 font-roboto">Super Admin</Badge>
         </div>
         </div>
      </div>
    </nav>
    </header>
    
  )
}

export default Navbar
