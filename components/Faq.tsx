"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function FAQ() {
  return (
    <div className="flex flex-col sm:flex-row w-full gap-2">
      <div className="w-full">
        <Accordion variant="splitted">
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="What is PrimeFLix"
            className="text-gray-600 text-sm"
          >
            PrimeFlix is a website wher you can watch your favorite movies and
            tv shows for free. This service displays video files from
            nonaffiliated third party providers. The creator of the site is not
            making any profits from the service provided. All the advertising
            shown in the player(like popups) are from the hosting sites.
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="Is PrimeFlix Safe"
            className="text-gray-600 text-sm"
          >
            PrimeFlix allows you to watch your favorite movies and TV episodes
            without worrying about identity theft, data loss. Your full name,
            emai address, or even the specifics of your payment card are not
            required. There won't be any information leaks if no information is
            exchanged. In conclusion, PrimeFlix is one of the safest websites
            for streaming free movies online.
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title="What we offer"
            className="text-gray-600 text-sm"
          >
            <ul>
              <li># User Friendly InterFace</li>
              <li># Multi-Search Functionality</li>
              <li># Multiple Sources</li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Accordion 4"
            title="I experience Bugs"
            className="text-gray-600 text-sm"
          >
            Try Clearing your cache then try again. If the bug still appears you can contact us and report the bugs. We will try to fix it.
          </AccordionItem>
        </Accordion>
      </div>

      <div className="w-full">
        <Accordion variant="splitted">
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="Why There Are Ads"
            className="text-gray-600 text-sm"
          >
            We are really sorry for the inconvenience. But we don't have any
            control over the ads shown. All the ads shown are from the providers
            who hosts the media. I highly recommend to use an Ad-Blocker it will
            give you a better experience
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="I can not access the server"
            className="text-gray-600 text-sm"
          >
            <ul>
              <li># Try clearing your cache</li>
              <li># Check your DNS </li>
              <li># Recommended Browsers: Chrome, Firefox, Edge</li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title="Disclaimer"
            className="text-gray-600 text-sm"
          >
            PrimeFlix does not host any files, it only links to 3rd party
            services. Legal issues should be taken up with the file hosts and
            providers. PrimeFlix is not responsible for any media files shown by
            the video providers.
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Accordion 4"
            title="Contact Us"
            className="text-gray-600 text-sm"
          >
            Join Our Disocrd Server 
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
