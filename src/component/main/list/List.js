import styles from './List.module.css';

function List() {
    return (
        <div className={styles.music_list}>
            <div className={styles.music_list_item}>
                <div className={styles.music_list_img}>이미지</div>
                <div className={styles.music_list_title}>음악 1</div> 
                <div className={styles.music_list_singer}>가수</div>
                <div className={styles.music_list_date}>발매년도</div>
            </div>
            <div className={styles.music_list_item}>
                <div className={styles.music_list_img}>이미지</div>
                <div className={styles.music_list_title}>음악 2</div>
                <div className={styles.music_list_singer}>가수</div>
                <div className={styles.music_list_date}>발매년도</div>
            </div>
            <div className={styles.music_list_item}>
                <div className={styles.music_list_img}>이미지</div>
                <div className={styles.music_list_title}>음악 3</div>
                <div className={styles.music_list_singer}>가수</div>
                <div className={styles.music_list_date}>발매년도</div>
            </div>
            <div className={styles.music_list_item}>
                <div className={styles.music_list_img}>이미지</div>
                <div className={styles.music_list_title}>음악 4</div>
                <div className={styles.music_list_singer}>가수</div>
                <div className={styles.music_list_date}>발매년도</div>
            </div>
        </div>
    );
}

export default List;