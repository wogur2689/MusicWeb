import styles from './Var.module.css';
import { IoMdPlayCircle } from "react-icons/io";
import { IoStopCircle } from "react-icons/io5";
import { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

function Var() {

    const [play, setPlay] = useState(false);

    function playing () {
        setPlay(play => !play)
        if(play === true) {
            
        }
    }

    return (
        <div className={styles.music_var}> 
            <div className={styles.time1}>3:32</div>
                <div className={styles.icons}>
                    {play ? <IoMdPlayCircle className={styles.icon}/> : <IoStopCircle className={styles.icon}/>}
                    <button className={styles.playButton} onClick={playing}></button> 
                </div>
                <div className={styles.max_time}>
                    <div className={styles.date_time}></div>
                </div>
            <div className={styles.time2}>0:00</div>
        </div>
    );
}

export default Var;

