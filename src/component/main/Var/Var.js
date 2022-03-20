import styles from './Var.module.css';
import { useState, useRef } from 'react';
import song from "../../data/노을.mp3";
import ControlPanel from "./Control/Control";
import Slider from './Slider/Time';

function Var() {
    const [percentage, setPercentage] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)

    const audioRef = useRef()

    const onChange = (e) => {
        const audio = audioRef.current
        audio.currentTime = (audio.duration / 100) * e.target.value
        setPercentage(e.target.value)
    }

    const play = () => {
        const audio = audioRef.current
        audio.volume = 0.1

        if (!isPlaying) {
        setIsPlaying(true)
        audio.play()
        }

        if (isPlaying) {
        setIsPlaying(false)
        audio.pause()
        } 
    }

    const getCurrDuration = (e) => {
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
        const time = e.currentTarget.currentTime

        setPercentage(+percent)
        setCurrentTime(time.toFixed(2))
    }

    return (
        <div className={styles.music_var}> 
            <audio
                ref={audioRef}
                onTimeUpdate={getCurrDuration}
                onLoadedData={(e) => {
                setDuration(e.currentTarget.duration.toFixed(2))
                }}
                src={song}
            ></audio>
            <ControlPanel
                play={play}
                isPlaying={isPlaying}
                duration={duration}
                currentTime={currentTime}
            />
            <Slider percentage={percentage} onChange={onChange} />
        </div>
    );
}

export default Var;

/*
return (
        <div className={styles.music_var}> 
            <div className={styles.time1}>3:32</div>
            <Slider percentage={percentage} onChange={onChange} />
                <audio ref={audioPlayer} onTimeUpdate={getCurrDuration} onLoadedData={(e) => {
         setDuration(e.currentTarget.duration.toFixed(2))
        }} src={song}></audio>
            <ControlPanel
            play={play}
            isPlaying={isPlaying}
            duration={duration}
            currentTime={currentTime}
        />
                <div className={styles.max_time}>
                    <div className={styles.date_time}></div>
                </div>
            <div className={styles.time2}>0:00</div>
        </div>
    );*/