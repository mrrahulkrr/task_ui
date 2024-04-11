import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import Image from "next/image";

export default function NavProfile() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button type="button" className="pr-3 pl-2"
          variant="Bordered"
        >
          <img className="rounded-full h-10" src="https://ui.shadcn.com/avatars/01.png" alt="profile" />

        </Button>
      </DropdownTrigger>
      <DropdownMenu className="rounded-2xl border-2 border-slate-800 text-white pt-5"  aria-label="Static Actions">
        <DropdownItem className="border-x-2 hover:border-slate-400"  key="login">Profile</DropdownItem>
        <DropdownItem className="border-x-2 hover:border-slate-400" key="sign up">Settings</DropdownItem>
        <DropdownItem className="border-x-2 hover:border-slate-400" key="about">Logout</DropdownItem>
        {/* <DropdownItem  key="contact" className="text-danger border-x-2 hover:border-slate-400" color="danger">
          Contact
        </DropdownItem> */}
      </DropdownMenu>
    </Dropdown>
  );
}
