"use client";

import UserIcon from "@/components/icons/UserIcon";
import ZCSLogo from "@/components/icons/ZCSLogo";
import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between p-5 bg-white items-center gap-5">
      <Link href="/dashboard">
        <ZCSLogo className="max-w-[5.625rem] h-auto text-primary [&_.cloud]:text-black" />
      </Link>

      <Dropdown radius="sm">
        <DropdownTrigger>
          <Button radius="sm" startContent={<UserIcon />}>
            Account
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Account Menu">
          <DropdownItem key="new">Lorem Text</DropdownItem>
          <DropdownItem key="copy">Ipsum text</DropdownItem>
          <DropdownItem key="edit">Hello Text</DropdownItem>
          <DropdownItem key="delete" className="text-primary" color="primary">
            Sign Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Header;
