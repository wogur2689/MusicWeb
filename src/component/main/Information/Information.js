import styles from './Information.module.css';

function Information() {
    return (   
    <div className={styles.music_information}>
        <div className={styles.music_title}>노래 제목 : 노을</div>
        <div className={styles.music_singer}>가수 : 사운드포엠</div>
        <div className={styles.music_lyrics}>가사</div>
    </div>
    );
}

export default Information;
