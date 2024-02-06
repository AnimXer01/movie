"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { FaAngleLeft } from "react-icons/fa6";
import { Button } from "@nextui-org/react";
import Link from "next/link";
export default function Pagination({ totalPages, currentPage, tvId }: any) {


  const items = [];
  for (let i = 1; i <= totalPages; i++) {
    items.push(<Tab key={i} title={`S${i}`} href={`/tv/${tvId}/season/${i}`}></Tab>);
  }
  return (
    <div className="flex w-full flex-col p-5">
      <div className="pb-2 mb-2">
        <Link href={`/tv/${tvId}`}>
          <Button size="sm" variant="ghost">
            <FaAngleLeft size={16} /> Back
          </Button>
        </Link>
      </div>
      <Tabs
        aria-label="Dynamic tabs"
        selectedKey={currentPage}
      >
        {items}
      </Tabs>
    </div>
  );
}
