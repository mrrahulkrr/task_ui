"use client"
import {NextUIProvider} from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NavProfile from '../../components/ui/NavProfile'
import React from "react";
function Navbar() {
  return (
    <NextUIProvider>
    <main className="  h-full py-6 bg-black w-full flex flex-col md:flex text-white  ">
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <button
              className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors
                focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-[200px] justify-between"
                            >
                    <img className="aspect-square h-full " alt="image" src="image le.png"/>
                    <p>Alica Kosh</p>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L12 6L18 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18 12L12 18L6 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

                </svg>

                 </button>
            <div className="flex items-center space-x-4 lg:space-x-7 mx-6">
              <Link
                href={"/chai"}
                className="text-sm font-medium  transition-colors hover:text-primary"
              >
                Overview
              </Link>
              <Link
                href={"/chai"}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Customers
              </Link>
              <Link
                href={"/chai"}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Products
              </Link>
              <Link
                href={"/chai"}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Settings
              </Link>
            </div>
            <div className="ml-auto flex items-center space-x-4">
            <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:w-[100px] lg:w-[300px] " type="text" placeholder="Enter some text here"  />

            {/* <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-8 rounded-full"> */}
                {/* <p className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8"> */}
                <NavProfile />
                {/* </p> */}
            {/* </button> */}
            </div>

          </div>
        </div>
      </div>
    </main>
    </NextUIProvider>
  );
}
export default Navbar;
