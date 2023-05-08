// 'use client';
import Link from 'next/link';
import Search from '../../components/search/Search';
import styles from './video.module.css';
import { Root, Card } from './types';
import getVideoProps from '../../lib/getVideoProps';
export const metadata = {
    title: 'Video Library',
    description: 'Video Library Page',
};
async function Page() {
    const data: Root = await getVideoProps();
    const items = data.collection.items;

    const content = (
        <section className={styles.container}>
            <div className={styles.title}>Image Library</div>
            <Search />
            <div className={styles.gridContainer}>
                <div className={styles.grid}>
                    {items.map((item, i) => (
                        <Card
                            key={i}
                            href={item.links[0].href}
                            date={item.data[0].date_created.slice(0, 10)}
                            title={item.data[0].title}
                        />
                    ))}
                </div>
            </div>
        </section>
    );

    return content;
}

const Card = ({ href, date, title }: Card) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={href} alt='' />
                </div>
                <div className={styles.date}>{date}</div>
                <div className={styles.cardTitle}>{title}</div>
                <Link
                    className={styles.details}
                    href={`/image-library/${title}`}
                >
                    Details
                </Link>
            </div>
        </>
    );
};

export default Page;
