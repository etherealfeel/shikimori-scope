import React from 'react';
import Image from 'next/image';
import { MotionDiv } from './MotionDiv';

export interface AnimeProp {
    id: string;
    name: string;
    image: {
        original: string;
    };
    kind: string;
    episodes: number;
    episodes_aired: number;
    score: string;
}

interface Prop {
    anime: AnimeProp;
    index: number;
}

const variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

const AnimeCard = ({ anime, index }: Prop) => {
    return (
        <MotionDiv
            className="max-w-sm rounded relative w-full"
            variants={variants}
            initial="hidden"
            animate="visible"
            viewport={{ amount: 0 }}
            transition={{
                delay: index * 0.2,
                duration: 0.5,
                ease: 'easeInOut',
            }}
        >
            <div className="relative w-full sm:h-[30vh] h-[45vh]">
                <Image
                    src={`https://shikimori.one${anime.image.original}`}
                    alt={anime.name}
                    fill
                    className="rounded-t-lg"
                />
            </div>
            <div className="py-2 px-4 rounded-b-lg bg-[#0f0c12]">
                <div className="py-4 flex flex-col gap-3">
                    <div className="flex justify-between items-center gap-1">
                        <h2 className="font-bold text-white text-md line-clamp-1 w-full">
                            {anime.name}
                        </h2>
                        <div className="py-1 px-2 bg-white rounded-sm">
                            <p className="text-[#0f0c12] text-sm font-bold capitalize">
                                {anime.kind}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center justify-between">
                        <div className="flex flex-row gap-2 items-center">
                            <Image
                                src="assets/icons/episodes.svg"
                                alt="episodes"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                            <p className="text-base text-white font-bold">
                                EP: {anime.episodes || anime.episodes_aired}
                            </p>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <Image
                                src="assets/icons/star.svg"
                                alt="star"
                                width={20}
                                height={20}
                                className="object-contain"
                            />
                            <p className="text-base font-bold text-[#ffdb49]">
                                {anime.score}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </MotionDiv>
    );
};

export default AnimeCard;
