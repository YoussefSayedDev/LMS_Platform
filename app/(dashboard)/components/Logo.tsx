import logoImage from "@/app/assets/logo.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  classImage?: string;
  classHeading?: string;
}

const Logo = ({ classImage, classHeading }: LogoProps) => {
  return (
    <div>
      <Link href="/">
        <div className="flex items-center justify-center gap-5">
          <Image
            src={logoImage}
            width={35}
            height={35}
            alt="Logo"
            className={`rounded-full ${classImage}`}
          />
          <h1
            className={cn("text-3xl font-bold text-foreground", classHeading)}
          >
            Learnify.
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
