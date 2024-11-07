"use client"

import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const font = Poppins({
    subsets: ['latin'],
    weight: ['400', '700', '200', '300', '500', '600', '800', '900'],
});

export const Logoo = () => {

    const pathname = usePathname()
    return (
        <Link href={"/"}>
            <div className="items-center gap-2 p-3 lg:p-5  flex">
                <Image
                    src={"/twitch.svg"}
                    height={50}
                    width={50}
                    alt="Twitch logo"
                    className=''
                />
                <div className=" flex-col hidden lg:flex items-center">
                    <h1 className={`${font.className} text-2xl font-bold text-purple-600`}>
                        Twitch
                    </h1>
                    <p className={`${font.className} text-sm font-light text-gray-500`}>
                        {pathname === "/" ? "Buddy" : "Dashbored"}
                    </p>
                </div>
            </div>
        </Link>
    );
};
