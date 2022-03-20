import { useState, useEffect } from 'react';
import styles from './List.module.css';
import sunset from '../../img/sunset.jpg';

function List() {
    const [selection, setSelection] = useState(true);

    const musicSelection = (e) => {
        e.preventDefalut();
        let current = document.getElementById(e.target.id);
        if(current) {
            current.className = styles.music_selection;
        } else {
            current.className = styles.music_not_selected;
        }
        setSelection(!selection);
    }

    return (
        <div className={styles.music_list}>
            <div className={styles.music_list_item}>
                <div className={styles.music_list_img}>
                    <img src={sunset} width="100px" height="100px" alt="노을"/>
                </div>
                <div className={styles.music_list_title}>노을</div> 
                <div className={styles.music_list_singer}>사운드포엠</div>
                <button id="case1" className={selection === true ? styles.music_selection : styles.music_not_selected} onClick={musicSelection}>선택</button>
            </div>
            <div className={styles.music_list_item}>
                <div className={styles.music_list_img}>이미지</div>
                <div className={styles.music_list_title}>음악 2</div>
                <div className={styles.music_list_singer}>가수</div>
                <button id="case2" className={selection === true ? styles.music_selection : styles.music_not_selected} onClick={musicSelection}>선택</button>
            </div>
            <div className={styles.music_list_item}>
                <div className={styles.music_list_img}>이미지</div>
                <div className={styles.music_list_title}>음악 3</div>
                <div className={styles.music_list_singer}>가수</div>
                <button id="case3" className={selection === true ? styles.music_selection : styles.music_not_selected} onClick={musicSelection}>선택</button>
            </div>
            <div className={styles.music_list_item}>
                <div className={styles.music_list_img}>이미지</div>
                <div className={styles.music_list_title}>음악 4</div>
                <div className={styles.music_list_singer}>가수</div>
                <button id="case4" className={selection === true ? styles.music_selection : styles.music_not_selected} onClick={musicSelection}>선택</button>
            </div>
        </div>
    );
}

export default List;