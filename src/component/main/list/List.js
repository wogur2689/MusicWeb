import styles from './List.module.css';
import sunset from '../../img/sunset.jpg';

function List() {
    return (
        <div className={styles.music_list}>
            <div className={styles.music_list_item}>
                <div className={styles.music_list_img}>
                    <img src={sunset} width="100px" height="100px" alt="노을"/>
                </div>
                <div className={styles.music_list_title}>노을</div> 
                <div className={styles.music_list_singer}>사운드포엠</div>
            </div>
            <div className={styles.music_list_item}>
                <div className={styles.music_list_img}>이미지</div>
                <div className={styles.music_list_title}>음악 2</div>
                <div className={styles.music_list_singer}>가수</div>
            </div>
            <div className={styles.music_list_item}>
                <div className={styles.music_list_img}>이미지</div>
                <div className={styles.music_list_title}>음악 3</div>
                <div className={styles.music_list_singer}>가수</div>
            </div>
            <div className={styles.music_list_item}>
                <div className={styles.music_list_img}>이미지</div>
                <div className={styles.music_list_title}>음악 4</div>
                <div className={styles.music_list_singer}>가수</div>
            </div>
        </div>
    );
}

export default List;