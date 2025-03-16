import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import AuthButton from "@/modules/auth/ui/components/auth-button";
import StudioUploadModal from "../studio-upload-modal";

export default function StudioNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white h-16 flex items-center px-2 pr-5 z-50 border-b shadow-md">
      {/* Menu and Logo  */}
      <div className="flex items-center gap-4">
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
        </div>
        <Link href="/studio">
          <div className="p-4 flex items-center gap-1">
            <Image src={"/logo.svg"} alt="Logo" width={32} height={32} />
            <p className="text-xl font-semibold tracking-tight">Studio</p>
          </div>
        </Link>
      </div>

      {/* Spacing  */}
      <div className="flex-1" />

      {/* Auth Button */}

      <div className="flex-shrink-0 flex items-center gap-4">
        <StudioUploadModal />
        <AuthButton />
      </div>
    </nav>
  );
}
