"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import React from "react"

const items = [
  {
    title: "Organization Analytics",
    url: "/dashboard",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3.66669" y="3.6665" width="5.5" height="6.41667" rx="1" stroke="#7795FF" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="3.66669" y="13.75" width="5.5" height="4.58333" rx="1" stroke="#7795FF" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="12.8333" y="3.6665" width="5.5" height="4.58333" rx="1" stroke="#7795FF" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="12.8333" y="11.9165" width="5.5" height="6.41667" rx="1" stroke="#7795FF" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Team Analytics",
    url: "/team",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<circle cx="11" cy="7.3335" r="2" stroke="#7795FF" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M12.8733 6.10433C13.0257 5.84027 13.2531 5.62734 13.5266 5.49248C13.8 5.35762 14.1073 5.30689 14.4096 5.34669C14.7119 5.38648 14.9957 5.51503 15.2249 5.71608C15.4542 5.91712 15.6186 6.18163 15.6976 6.47615C15.7765 6.77067 15.7663 7.08198 15.6683 7.37072C15.5703 7.65945 15.3888 7.91263 15.1469 8.09825C14.905 8.28387 14.6135 8.39359 14.3092 8.41353C14.005 8.43347 13.7016 8.36274 13.4376 8.21028" stroke="#7795FF" strokeWidth="1.5"/>
<path d="M9.12671 6.10433C8.97425 5.84027 8.74692 5.62734 8.47345 5.49248C8.19998 5.35762 7.89266 5.30689 7.59036 5.34669C7.28805 5.38648 7.00434 5.51503 6.77509 5.71608C6.54585 5.91712 6.38137 6.18163 6.30245 6.47615C6.22353 6.77067 6.23372 7.08198 6.33174 7.37072C6.42975 7.65945 6.61117 7.91263 6.85308 8.09825C7.09498 8.28387 7.3865 8.39359 7.69076 8.41353C7.99502 8.43347 8.29836 8.36274 8.56242 8.21028" stroke="#7795FF" strokeWidth="1.5"/>
<path d="M10.9999 11.4585C14.4724 11.4585 15.5532 14.0676 15.8896 15.6918C16.0327 16.3828 15.4695 16.9585 14.7638 16.9585H7.23603C6.53033 16.9585 5.96714 16.3828 6.11026 15.6918C6.44665 14.0676 7.52743 11.4585 10.9999 11.4585Z" stroke="#7795FF" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M14.2088 10.5415L14.2089 9.7915H14.2088V10.5415ZM17.5828 13.7466L18.3012 13.531L18.3012 13.531L17.5828 13.7466ZM16.4637 15.1255V15.8755H16.464L16.4637 15.1255ZM15.7479 15.1255L15.0274 15.3339L15.1841 15.8755H15.7479V15.1255ZM11.9998 11.5386L11.4461 11.0327L10.5155 12.0513L11.8764 12.2783L11.9998 11.5386ZM14.2088 10.5415L14.2087 11.2915C14.9663 11.2916 15.5122 11.6232 15.9378 12.1238C16.3805 12.6444 16.6761 13.3346 16.8645 13.9622L17.5828 13.7466L18.3012 13.531C18.0844 12.8089 17.7135 11.8966 17.0806 11.1522C16.4307 10.3877 15.4921 9.79162 14.2089 9.7915L14.2088 10.5415ZM17.5828 13.7466L16.8645 13.9622C16.8964 14.0687 16.8731 14.1541 16.8127 14.2264C16.7457 14.3065 16.6241 14.3754 16.4634 14.3755L16.4637 15.1255L16.464 15.8755C17.6249 15.8751 18.6896 14.8251 18.3012 13.531L17.5828 13.7466ZM16.4637 15.1255V14.3755H15.7479V15.1255V15.8755H16.4637V15.1255ZM15.7479 15.1255L16.4683 14.917C16.0225 13.376 14.8933 11.261 12.1233 10.7988L11.9998 11.5386L11.8764 12.2783C13.8224 12.6031 14.6549 14.0464 15.0274 15.3339L15.7479 15.1255ZM11.9998 11.5386L12.5535 12.0444C12.9683 11.5904 13.4915 11.2915 14.2088 11.2915V10.5415V9.7915C12.996 9.7915 12.0909 10.3269 11.4461 11.0327L11.9998 11.5386Z" fill="#7795FF"/>
<path d="M7.79207 10.5415L7.79215 9.7915H7.79207V10.5415ZM10.0001 11.5386L10.1236 12.2783L11.4844 12.0512L10.5538 11.0327L10.0001 11.5386ZM6.25203 15.1255V15.8755H6.81581L6.97249 15.3339L6.25203 15.1255ZM4.41707 13.7466L3.69873 13.531L3.69872 13.531L4.41707 13.7466ZM7.79207 10.5415L7.792 11.2915C8.50887 11.2916 9.03149 11.5904 9.4464 12.0445L10.0001 11.5386L10.5538 11.0327C9.90925 10.3273 9.00485 9.79162 7.79215 9.7915L7.79207 10.5415ZM10.0001 11.5386L9.8766 10.7988C7.10683 11.2611 5.97743 13.376 5.53158 14.9171L6.25203 15.1255L6.97249 15.3339C7.34494 14.0465 8.17761 12.6032 10.1236 12.2783L10.0001 11.5386ZM6.25203 15.1255V14.3755H5.53719V15.1255V15.8755H6.25203V15.1255ZM5.53719 15.1255V14.3755C5.37644 14.3755 5.25452 14.3065 5.1874 14.2263C5.12683 14.1539 5.10353 14.0685 5.13542 13.9622L4.41707 13.7466L3.69872 13.531C3.31015 14.8258 4.37641 15.8755 5.53719 15.8755V15.1255ZM4.41707 13.7466L5.13541 13.9622C5.32377 13.3346 5.61955 12.6445 6.0624 12.1238C6.48819 11.6231 7.03432 11.2915 7.79207 11.2915V10.5415V9.7915C6.50872 9.7915 5.56992 10.3875 4.91976 11.152C4.28668 11.8964 3.91551 12.8087 3.69873 13.531L4.41707 13.7466Z" fill="#7795FF"/>
</svg>
    ),
  },
  {
    title: "Eployee Analytics",
    url: "/employee",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<path d="M16.439 19.4859C16.2407 18.3862 15.5695 17.3842 14.5504 16.6664C13.5313 15.9486 12.2339 15.564 10.8998 15.5843C9.56563 15.6045 8.28584 16.0283 7.29883 16.7766C6.31182 17.5248 5.6849 18.5466 5.53487 19.6515" stroke="#7795FF" strokeWidth="1.5"/>
<ellipse cx="11" cy="9.1665" rx="2.75" ry="2.75" stroke="#7795FF" strokeWidth="1.5" strokeLinecap="round"/>
<rect x="2.58331" y="2.5835" width="16.8333" height="16.8333" rx="3.25" stroke="#7795FF" strokeWidth="1.5"/>
</svg>
    ),
  },
  {
    title: "Learning Analytics",
    url: "/learning",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<rect x="3.66669" y="2.75" width="14.6667" height="16.5" rx="2" fill="#7795FF"/>
<path d="M7.79169 5.9585L14.2084 5.9585" stroke="#F7F8FA" strokeLinecap="round"/>
<path d="M7.79169 8.7085L11.4584 8.7085" stroke="#F7F8FA" strokeLinecap="round"/>
<path d="M7.79169 11.4585L13.2917 11.4585" stroke="#F7F8FA" strokeLinecap="round"/>
<path d="M3.66669 17.4168C3.66669 16.4043 4.4875 15.5835 5.50002 15.5835H15.5834C16.2811 15.5835 16.63 15.5835 16.9139 15.4974C17.5531 15.3035 18.0533 14.8033 18.2472 14.1641C18.3334 13.8802 18.3334 13.5313 18.3334 12.8335V15.2502C18.3334 17.1358 18.3334 18.0786 17.7476 18.6644C17.1618 19.2502 16.219 19.2502 14.3334 19.2502H5.50002C4.4875 19.2502 3.66669 18.4294 3.66669 17.4168Z" fill="#F7F8FA"/>
</svg>
    ),
  },
  {
    title: "Feedback Plan Analytics",
    url: "/feedback",
     icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
<path d="M15 0.750007V0.750007C16.5188 0.750006 17.75 1.98122 17.75 3.5L17.75 5.46429C17.75 5.73084 17.75 5.86412 17.7005 5.96694C17.6513 6.06899 17.569 6.15134 17.4669 6.20048C17.3641 6.25 17.2308 6.25 16.9643 6.25L12.25 6.25M15 0.750007V0.750007C13.4812 0.750006 12.25 1.98122 12.25 3.5L12.25 6.25M15 0.750007L5.25 0.750006C3.36438 0.750006 2.42157 0.750006 1.83579 1.33579C1.25 1.92158 1.25 2.86439 1.25 4.75001L1.25 17.25L4 16.3333L6.75 17.25L9.5 16.3333L12.25 17.25L12.25 6.25" stroke="#7795FF" strokeWidth="1.5"/>
</svg>
    ),
  },
  {
    title: "Report List",
    url: "/report",
    icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
<rect x="4.58331" y="3.6665" width="12.8333" height="15.5833" rx="2" stroke="#7795FF" strokeWidth="1.5"/>
<path d="M8.25 8.25H13.75" stroke="#7795FF" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M8.25 11.9165H13.75" stroke="#7795FF" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M8.25 15.5835H11.9167" stroke="#7795FF" strokeWidth="1.5" strokeLinecap="round"/>
</svg>
    ),
  },
]

const AppSidebar = () => {
  const pathname = usePathname()

  return (
    <div className="mt-60">
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <div className="mt-24">
                <SidebarMenu>
                  {items.map((item) => {
  const isActive = pathname === item.url

  return (
    <SidebarMenuItem
      key={item.title}
      className={isActive ? "bg-blue-500 text-white rounded" : "hover:bg-[#EDEDED] text-muted-foreground"}
    >
      <SidebarMenuButton asChild>
        <Link href={item.url} className="flex items-center gap-2 px-3 py-2 rounded-md w-full">
          <item.icon />
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
})}

                </SidebarMenu>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  )
}

export default AppSidebar
