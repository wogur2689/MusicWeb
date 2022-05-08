import { useState } from 'react';
import styles from './List.module.css';
import music from '../data/musicData.json';

function List() {
    const [selection, setSelection] = useState(true);

    const musicSelection = (e) => {
        let current = document.getElementById(e.target.id);
        console.log(current.id);
        setSelection(!selection);
    }

    return (
        <div className={styles.music_list}>
            {music.music.map((music) => (
                <div key={music.id} className={styles.music_list_item}>
                    <div className={styles.music_list_img}>
                        <img src={`${process.env.PUBLIC_URL}/data/${music.img}`} width="100px" height="100px" alt="사진"/>
                    </div>
                    <div className={styles.music_list_title}>{music.title}</div>
                    <div className={styles.music_list_singer}>{music.singer}</div>
                    <label>
                        <input type="radio" id={`case` + music.id} className={selection === true ? styles.music_selection : styles.music_not_selected} onClick={musicSelection} name="music"/>선택
                    </label>
                </div>
            ))}
        </div>
    );
}

export default List;