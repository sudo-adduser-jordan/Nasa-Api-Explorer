import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import React, { useState } from 'react';

import Layout from '../components/Layout';
import Search from '../components/Search';

import styles from '../styles/pages/VideoPage.module.css';

// json to typescript converter
export interface Root {
    collection: Collection;
}

export interface Collection {
    version: string;
    href: string;
    items: Item[];
    metadata: Metadata;
    links: Link2[];
}

export interface Item {
    href: string;
    data: Daum[];
    links: Link[];
}

export interface Daum {
    center: string;
    title: string;
    keywords?: string[];
    location?: string;
    nasa_id: string;
    date_created: string;
    media_type: string;
    description_508?: string;
    description?: string;
    album?: string[];
    photographer?: string;
    secondary_creator?: string;
}

export interface Link {
    href: string;
    rel: string;
    render: string;
}

export interface Metadata {
    total_hits: number;
}

export interface Link2 {
    rel: string;
    prompt: string;
    href: string;
}

type Cards = {
    key: number;
    href: string;
    title: string;
};

type Card = {
    href: string;
    title: string;
};

// fetch image data
export const getStaticProps: GetStaticProps<{ root: Root }> = async () => {
    let searchInput = 'ship';
    // let searchInput = "blackhole"

    let searchString = `https://images-api.nasa.gov/search?q=${searchInput}&media_type=video`;

    const res = await fetch(searchString);
    const root: Root = await res.json();

    return {
        props: {
            root,
        },
    };
};

// page
const VideoPage = ({
    root,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
    // const [cards, setCards] = React.useState([]);

    // const updatedCardsArray = [...cards, newCards];

    // setCards(updatedCardsArray);

    const cards: Cards[] = [];

    const loadImages = () => {
        let total = root.collection.items.length;

        for (let i = 0; i < total; i++) {
            cards.push({
                key: i,
                href: root.collection.items[i].links[0].href,
                title: root.collection.items[i].data[0].title,
            });
        }
    };
    loadImages();

    const showLoadButton = () => {
        let total = root.collection.metadata.total_hits;
        if (total >= 100) {
            return (
                <button
                    className={styles.load}
                    onClick={() => {
                        fetchMoreImages();
                    }}
                >
                    Load More
                </button>
            );
        }
    };

    const fetchMoreImages = async () => {
        let count = 1;

        let searchInput = 'ship';
        let searchString = `https://images-api.nasa.gov/search?q=${searchInput}&media_type=video&page=${count}`;

        const res = await fetch(searchString);
        const root: Root = await res.json();

        const total = root.collection.items.length;

        for (let i = 0; i < 100; i++) {
            // console.log(root.collection.items[i].links[0].href)
            cards.push({
                key: i,
                href: root.collection.items[i].links[0].href,
                title: root.collection.items[i].data[0].title,
            });
        }
    };

    return (
        <>
            <section className={styles.container}>
                <Search input={''} />
                <div className={styles.gridContainer}>
                    <div className={styles.grid}>
                        {cards.map((card) => (
                            <Card
                                key={card.key}
                                href={card.href}
                                title={card.title}
                            />
                        ))}
                    </div>

                    {showLoadButton()}
                </div>
            </section>
        </>
    );
};

// card
const Card = ({ href, title }: Card) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={href} alt='' />
                </div>

                <div className={styles.description}>Title</div>
            </div>
        </>
    );
};

// layout
VideoPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

export default VideoPage;
