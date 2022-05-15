import { useState } from 'react';
import WaveWrapper from './waveWrapper/WaveWrapper';
import List from './list/List';
import Information from './Information/Information';
import Var from './var/Var';
import styles from './Main.module.css';
import music from './data/musicData.json';

function Main() {
    const [targetMusic, setTargetMusic] = useState(
        {"id": 0, 
        "title" : "선택되지 않음", 
        "singer": "선택되지 않음",
        "src": "music/sunset.mp3",
        "img": "img/sunset.jpg"}
    );

    const dataFunction = (e) => {
        setTargetMusic(music.music.find(element => 
            element.id === e
        ));
    };

    return (
        <div className={styles.section}>
            <WaveWrapper /> 
            <div className={styles.main}>
                <List dataFunction={dataFunction} className={styles.List} />
                <div className={styles.music_img}>
                    <img src={`${process.env.PUBLIC_URL}/data/${targetMusic.img}`} width="100%" height="100%" alt="사진" />
                </div>
                <Information className={styles.Information}/>
                <Var className={styles.Var}/>
            </div>
        </div>
    );
}

export default Main;