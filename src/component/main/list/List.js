import { useState, useEffect } from 'react';
import styles from './List.module.css';
import sunset from '../../img/sunset.jpg';

function List() {
    const [selection1, setSelection1] = useState(false); //처음 노래만 체크
    const [selection2, setSelection2] = useState(true);
    const [selection3, setSelection3] = useState(true);
    const [selection4, setSelection4] = useState(true);

    const musicSelection = (e) => {
        //e.preventDefalut();
        let current = document.getElementById(e.target.id);
        if(current.id === "case1") {
            if(current.className === styles.music_selection) {
                setSelection1(!selection1);
            }
        } else if(current.id === "case2") {
            if(current.className === styles.music_selection) setSelection2(!selection2);
        } else if(current.id === "case3") {
            if(current.className === styles.music_selection) setSelection3(!selection3);
        } else if(current.id === "case4") {
            if(current.className === styles.music_selection) setSelection4(!selection4);
        }
    }

    return (
        <div className={styles.music_list}>
            <div className={styles.music_list_item}>
                <div className={styles.music_list_img}>
                    <img src={sunset} width="100px" height="100px" alt="노을"/>
                </div>
                <div className={styles.music_list_title}>노을</div> 
                <div className={styles.music_list_singer}>사운드포엠</div>
                <button id="case1" className={selection1 === true ? styles.music_selection : styles.music_not_selected} onClick={musicSelection}>선택</button>
            </div>
            <div className={styles.music_list_item}>
                <div className={styles.music_list_img}>이미지</div>
                <div className={styles.music_list_title}>음악 2</div>
                <div className={styles.music_list_singer}>가수</div>
                <button id="case2" className={selection2 === true ? styles.music_selection : styles.music_not_selected} onClick={musicSelection}>선택</button>
            </div>
            <div className={styles.music_list_item}>
                <div className={styles.music_list_img}>이미지</div>
                <div className={styles.music_list_title}>음악 3</div>
                <div className={styles.music_list_singer}>가수</div>
                <button id="case3" className={selection3 === true ? styles.music_selection : styles.music_not_selected} onClick={musicSelection}>선택</button>
            </div>
            <div className={styles.music_list_item}>
                <div className={styles.music_list_img}>이미지</div>
                <div className={styles.music_list_title}>음악 4</div>
                <div className={styles.music_list_singer}>가수</div>
                <button id="case4" className={selection4 === true ? styles.music_selection : styles.music_not_selected} onClick={musicSelection}>선택</button>
            </div>
        </div>
    );
}

export default List;