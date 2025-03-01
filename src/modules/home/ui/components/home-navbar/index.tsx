import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import SearchInput from "./search-input";
import AuthButton from "@/modules/auth/ui/components/auth-button";

export default function HomeNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white h-16 flex items-center px-2 pr-5 z-50">
      {/* Menu and Logo  */}
      <div className="flex items-center gap-4">
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
        </div>
        <Link href="/">
          <div className="p-4 flex items-center gap-1">
            <Image src={"/logo.svg"} alt="Logo" width={32} height={32} />
            <p className="text-xl font-semibold tracking-tight">MyTube</p>
          </div>
        </Link>
      </div>

      {/* Search Bar  */}
      <div className="flex-1 flex justify-center max-w-[720px] mx-auto">
        <SearchInput />
      </div>

      {/* Auth Button */}

      <div className="flex-shrink-0 flex items-center gap-4">
        <AuthButton />
      </div>
    </nav>
  );
}
