import React from "react";
import { Snippet } from "@nextui-org/react";
export default function Tips() {
  return (
    <Snippet
      symbol={"#"}
      hideCopyButton={true}
      variant="flat"
      color="secondary"
      className="p-8"
    >
      <span>
        Please Use An{" "}
        <span className="text-red-500 font-semibold">AD-BLOCKER</span>{" "}
        <br className="block sm:hidden" /> For Best Experience
      </span>
      <span>
        Change to a different Provier <br className="block sm:hidden" /> If
        Current doesn't work
      </span>
      <span>
       <span className="text-orange-500 font-semibold">FebBox</span>  Loading time is slow,<br className="block sm:hidden" /> Wait for sometime it will load
      </span>
      <span>
        Try changing mirrors provied
        <br className="block sm:hidden" /> within the current player also
      </span>
      
    </Snippet>
  );
}
