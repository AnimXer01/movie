
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Input,
  Avatar,
} from "@nextui-org/react";

import Link from "next/link";

import { FaDiscord, FaHouse } from "react-icons/fa6";
import { BiSolidDonateHeart } from "react-icons/bi";
import {Button, ButtonGroup} from "@nextui-org/react";


export default function HomeNav() {

  return (
    <Navbar maxWidth="full">
      <NavbarContent as="div" className="items-center" justify="start">
      <Link href={'/'}>
        <Button size="sm" variant="flat" color="primary">
        <FaHouse size={16}/>Home
        </Button>
        </Link>
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="end">
      <Link href={"https://discord.gg/GbW6gzAKgc"}>
            <Button size="sm" variant="flat" color="secondary"><FaDiscord size={16}/>Discord</Button>
        </Link>
        <Link href={'https://ko-fi.com/primeflix'}>
        <Button size="sm" variant="flat" color="warning">
        <BiSolidDonateHeart size={16}/> Donate
        </Button>
        </Link>
      </NavbarContent>
    </Navbar>
  );
}


