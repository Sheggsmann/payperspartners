import Link from "next/link";
import Image from "next/image";
import styles from "@/styles";

function Footer() {
  return (
    <div className="bg-black py-12">
      <div className={`${styles.boxWidth} mx-auto px-6 md:px-0`}>
        <div className="flex flex-row items-center justify-between">
          <div>
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={100} height={70} />
            </Link>
          </div>

          <ul className="list-none sm:flex hidden justify-end items-center">
            <Link
              href="/pricing"
              className="font-semibold text-base mr-10 cursor-pointer text-white"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="font-semibold text-base mr-10 cursor-pointer text-white"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="font-semibold text-base cursor-pointer text-white"
            >
              Contact Us
            </Link>
          </ul>
        </div>

        <div className="my-8 h-[0.5px] bg-white/20"></div>

        <div className="flex flex-row items-center text-white text-xs gap-8">
          <p>&copy; {new Date().getFullYear()} Paypers Partners Limited</p>
          <p>Terms</p>
          <p>Privacy</p>
        </div>
      </div>
    </div>
  );
}

export { Footer };
