import { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Shikimori Scope',
    description:
        'Explore the world of anime with Shikimori Scope, your gateway to the vast universe of Japanese animation.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className={openSans.className}>
                <main className="max-w-7xl mx-auto glassy">{children}</main>
            </body>
        </html>
    );
};

export default RootLayout;
