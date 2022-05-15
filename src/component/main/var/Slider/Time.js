import { useState, useRef, useEffect } from 'react';
import './Time.module.css';
import './thumb.module.css';

function Slider({ percentage = 0, onChange, targetMusic }) {
    const [position, setPosition] = useState(0);
    const [marginLeft, setMarginLeft] = useState(0);
    const [progressBarWidth, setProgressBarWidth] = useState(0);
    const [id, setId] = useState(0);

    const rangeRef = useRef();
    const thumbRef = useRef();

    useEffect(() => {
        const rangeWidth = rangeRef.current.getBoundingClientRect().width
        const thumbWidth = thumbRef.current.getBoundingClientRect().width
        const centerThumb = (thumbWidth / 100) * percentage * -1
        const centerProgressBar =
        thumbWidth + (rangeWidth / 100) * percentage - (thumbWidth / 100) * percentage
        setPosition(percentage)
        setMarginLeft(centerThumb)
        setProgressBarWidth(centerProgressBar)
        if(targetMusic.id !== id) {
            setId(targetMusic.id);
            setPosition(0);
            setMarginLeft(0);
            setProgressBarWidth(0);
        }
    }, [percentage])

    return (
        <div className='slider-container'>
            <div
                className='progress-bar-cover'
                style={{
                width: `${progressBarWidth}px`
                }}
            ></div>
            <div
                className='thumb'
                ref={thumbRef}
                style={{
                left: `${position}%`,
                marginLeft: `${marginLeft}px`
                }}
            ></div>
            <input
                type='range'
                value={position}
                ref={rangeRef}
                step='0.01'
                className='range'
                onChange={onChange}
            />
        </div>
    )
}

export default Slider