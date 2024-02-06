"use client"
import React, { useState } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Input,
  Avatar,
} from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaDiscord, FaHouse } from "react-icons/fa6";
import { BiSolidDonateHeart } from "react-icons/bi";
import {Button, ButtonGroup} from "@nextui-org/react";


export default function Nav() {
  const router = useRouter();
  const [value,setValue] = useState("")

  const handleInputChange = (event:any) => {
    setValue(event.target.value);
  }
  const handleSubmit = (event:any) => {
    event.preventDefault();
    router.push(`/search/${encodeURIComponent(value)}`)
  }
  return (
    <Navbar maxWidth="full">
      <NavbarContent as="div" className="items-center" justify="start">
        <form onSubmit={handleSubmit}>
        <Input
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focused=true]:bg-default-200/50",
              "dark:group-data-[focused=true]:bg-default/60",
              "!cursor-text",
            ],  
          }}
          placeholder="Search"
          size="sm"
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
          type="search"
          onChange={handleInputChange}
        /></form>
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="end">
        <Link href={'/'}>
        <Button size="sm" variant="flat" color="primary">
        <FaHouse size={16}/>Home
        </Button>
        </Link>
        <Link href={'https://discord.gg/GbW6gzAKgc'}>
        <Button size="sm" variant="flat" color="secondary">
        <FaDiscord size={16}/> Discord
        </Button>
        </Link>
      </NavbarContent>
    </Navbar>
  );
}


