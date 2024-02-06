import FAQ from "@/components/Faq";
import HomeNav from "@/components/HomeNav";
import SideBar from "@/components/Sidebar";

export default function Info() {
  return (
    <main className="p-5 md:ml-20">
      <SideBar />
      <HomeNav/>
      <div>
        <h1 className="text-2xl text-center m-3">Frequently Asked Questions !</h1>
     <FAQ/>
      </div>
    </main>
  );
}
