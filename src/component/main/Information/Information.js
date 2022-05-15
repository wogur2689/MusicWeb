import styles from './Information.module.css';

function Information({targetMusic}) {
    return (   
    <div className={styles.music_information}>
        <div className={styles.music_title}>노래 제목 : {targetMusic.title}</div>
        <div className={styles.music_singer}>가수 : {targetMusic.singer}</div>
    </div>
    );
}

export default Information;
