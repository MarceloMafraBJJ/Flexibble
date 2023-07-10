import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = {};

  return (
    <nav className="py-5 px-8 border-b gap-4 flexBetween">
      <div className="gap-10 flex-1 flexStart ">
        <Link href="/">
          <Image
            src={"logo.svg"}
            alt={"logo Flexibble"}
            width={115}
            height={43}
          />
        </Link>

        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map(({ href, key, text }) => (
            <Link href={href} key={key}>
              {text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        {session ? (
          <>
            userPhoto
            <Link href={"create-project"}>Share work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
