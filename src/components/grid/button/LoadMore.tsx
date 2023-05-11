import styles from './loadmore.module.css';

function LoadButton({ loadMoreCards }: any) {
    return (
        <div className={styles.buttonContainer}>
            <button
                className={styles.load}
                onTouchStart={loadMoreCards}
                onClick={loadMoreCards}
            >
                Load More
            </button>
        </div>
    );
}

export default LoadButton;
