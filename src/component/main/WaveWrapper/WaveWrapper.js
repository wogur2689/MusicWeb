import styles from './WaveWrapper.module.css';

function WaveWrapper() {
    return (
        <div className={styles.waveWrapper}>
            <div className={styles.waveWrapperInner1}>
                <div className={styles.waveTop}></div>
            </div>
            <div className={styles.waveWrapperInner2}>
                <div className={styles.waveMiddle}></div>
            </div>
            <div className={styles.waveWrapperInner3}>
                <div className={styles.waveBottom}></div>
            </div>
        </div>
    );
}

export default WaveWrapper;