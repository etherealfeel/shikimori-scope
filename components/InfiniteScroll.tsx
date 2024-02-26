'use client';
import { fetchAnime } from '@app/action';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import AnimeCard, { AnimeProp } from './AnimeCard';

let page = 2;

const InfiniteScroll = () => {
    const [data, setData] = useState<AnimeProp[]>([]);
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            fetchAnime(page).then((res) => {
                setData([...data, ...res]);
                page++;
            });
        }
    }, [inView, data]);

    return (
        <>
            <section className="sm:p-16 py-16 px-8 flex flex-col gap-10">
                <div className="grid place-items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
                    {data.map((item: AnimeProp) => (
                        <AnimeCard key={item.id} anime={item} />
                    ))}
                </div>
            </section>
            <section className="flex justify-center items-center w-full">
                <div ref={ref}>
                    <Image
                        src="assets/icons/spinner.svg"
                        alt="spinner"
                        width={75}
                        height={75}
                        className="object-contain"
                    />
                </div>
            </section>
        </>
    );
};

export default InfiniteScroll;
