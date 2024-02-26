import React from 'react';
import AnimeCard, { AnimeProp } from '@/components/AnimeCard';
import { fetchAnime } from './action';
const Home = async () => {
    const data = await fetchAnime(1);
    return (
        <section className="sm:p-16 py-16 px-8 flex flex-col gap-10">
            <h1 className="text-2xl text-white font-bold">
                Explore Anime World
            </h1>
            <div className="grid place-items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12">
                {data.map((item: AnimeProp) => (
                    <AnimeCard key={item.id} anime={item} />
                ))}
            </div>
        </section>  
    );
};

export default Home;
