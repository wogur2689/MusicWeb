import styles from './Var.module.css';
import { useState, useRef } from 'react';
import ControlPanel from "./Control/Control";
import Slider from './Slider/Time';

function Var({targetMusic}) {
    const [percentage, setPercentage] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [id, setId] = useState(0);
    const song = `${process.env.PUBLIC_URL}/data/${targetMusic.src}`;
    console.log(targetMusic.src);

    if(targetMusic.id !== id) {
        setId(targetMusic.id);
        setIsPlaying(false);
    }

    const audioRef = useRef()

    const onChange = (e) => {
        const audio = audioRef.current
        audio.currentTime = (audio.duration / 100) * e.target.value
        setPercentage(e.target.value)
    }

    const play = () => {
        const audio = audioRef.current
        audio.volume = 0.5

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
        const audio = audioRef.current
        const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
        const time = e.currentTarget.currentTime

        setPercentage(+percent)
        setCurrentTime(time.toFixed(2))

        //무한반복
        if(e.currentTarget.currentTime === e.currentTarget.duration)
            audio.play();
    }

    return (
        <div className={styles.music_var}> 
            {<audio
                ref={audioRef}
                onTimeUpdate={getCurrDuration}
                onLoadedData={(e) => {
                setDuration(e.currentTarget.duration.toFixed(2))
                }}
                src={song}
            ></audio> }
            <ControlPanel
                play={play}
                isPlaying={isPlaying}
                targetMusic={targetMusic}
                duration={duration}
                currentTime={currentTime}
            />
            <Slider percentage={percentage} onChange={onChange} targetMusic={targetMusic}/>
        </div>
    );
}

export default Var;