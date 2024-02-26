import Image from 'next/image';

const Hero = () => {
    return (
        <header className="bg-hero bg-center bg-cover bg-no-repeat px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
            <div className="flex-1 flex flex-col gap-10">
                <Image
                    src="assets/icons/logo.svg"
                    alt="logo"
                    width={80}
                    height={80}
                    className="object-contain"
                />
                <h1 className="sm:text-6xl text-5xl text-gray-300 lg:max-w-lg font-bold leading-[120%]">
                    Discover{' '}
                    <span className="cyan-gradient">Top-Rated Series </span>
                    and Dive into the World of Anime Excellence
                </h1>
            </div>
            <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
                <Image
                    src="/assets/images/hero.png"
                    alt="hero"
                    fill
                    className="object-contain"
                />
            </div>
        </header>
    );
};

export default Hero;
