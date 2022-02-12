import styles from './Var.module.css';
import { IoMdPlayCircle } from "react-icons/io";
import { IoStopCircle } from "react-icons/io5";
import { useState } from 'react';
import {Howl, Howler} from 'howler';

/*
document.querySelector(".btn1").addEventListener("click", function () {
    var audio1 = new Audio("sound1.mp3");
    audio1.loop = false; // 반복재생하지 않음
    audio1.volume = 0.5; // 음량 설정
    audio1.play(); // sound1.mp3 재생
  });
*/
function Var() {

    const [play, setPlay] = useState(false);
    const sound = new Howl({
        src: ['../../data/노을.mp3'],
        volume: 5.0
    });

    function playing () {
        setPlay(play => !play)
        if(play === true) {
            sound.play();
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