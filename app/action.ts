'use server';

export const fetchAnime = async (page: number) => {
    const res = await fetch(
        `https://shikimori.one/api/animes?page=${page}&limit=20&order=popularity`
    );

    const data = await res.json();
    return data;
};
