import Image from "next/image";
import Navbar from "./chai/page";

export default function Home() {
  return (
    // <NextUIProvider>
      <main className="  h-full py-6 bg-black w-full flex flex-col md:flex text-white  ">
        <Navbar/>
      </main>
    // </NextUIProvider>
  );
}
