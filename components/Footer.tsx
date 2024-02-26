import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="sm:px-16 py-4 px-10 flex justify-between items-center gap-2 flex-wrap rounded-lg bg-[#0f0c12]">
            <div className="flex items-center gap-5">
                <p className="text-base font-bold text-gray-300">
                    &copy; 2024 Shikimori Scope
                </p>
                <Image
                    src="assets/icons/logo.svg"
                    alt="logo"
                    width={40}
                    height={40}
                    className="object-contain"
                />
            </div>
            <div className="flex items-center gap-6">
                <Link href="https://www.tiktok.com/" target="_blank">
                    <Image
                        src="assets/icons/tiktok.svg"
                        alt="logo"
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                </Link>

                <Link href="https://www.instagram.com/" target="_blank">
                    <Image
                        src="assets/icons/instagram.svg"
                        alt="logo"
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                </Link>
                <Link href="https://www.twitter.com/" target="_blank">
                    <Image
                        src="assets/icons/twitter.svg"
                        alt="logo"
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
