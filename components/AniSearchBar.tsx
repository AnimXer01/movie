"use client";
import { Button, Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoSearchCircle, IoSearchCircleOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { FaDiscord } from "react-icons/fa6";
export default function AniSearchBar() {
  const router = useRouter();
  const [value, setValue] = useState("");

  const handleInputChange = (event: any) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    router.push(`/anime/search/${encodeURIComponent(value)}`);
  };
  return (
    <div className=" w-[80%] sm:w-[40%] p-5 rounded-2xl">
      <h1 className="text-center text-2xl font-medium p-2  text-white">
        PrimeFlix
      </h1>
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
          placeholder="Search Anime"
          size="sm"
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
          type="search"
          onChange={handleInputChange}
        />
      </form>
      
    </div>
  );
}
