import styles from './card.module.css';
import Link from 'next/link';
import Image from 'next/image';

export type MarsCard = {
    href: string;
    date: string;
    sol: number;
};

function MarsCard({ href, date, sol }: MarsCard) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.image}>
                    <Image src={href} width={250} height={250} alt='' />
                </div>
                <div className={styles.date}>Date: {date}</div>
                <div className={styles.sol}>Sol: {sol}</div>
                <Link className={styles.details} href={`/`}>
                    Details &rarr;
                </Link>
            </div>
        </>
    );
}

export default MarsCard;
