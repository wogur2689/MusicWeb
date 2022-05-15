import React from 'react';
import styles from './Button.module.css'

function Button({ play, isPlaying }) {
    return (
      <div className={styles.btnContainer}>
        <div onClick={play} className={isPlaying ? styles.btnStop : styles.btnPlay}></div>
      </div>
    )
}
export default Button;