import styles from './Var.module.css';
import { IoMdPlayCircle } from "react-icons/io";
import { IoStopCircle } from "react-icons/io5";

function Var() {
    return (
        <div className={styles.music_var}> 
            <div className={styles.time1}>3:32</div>
                <IoMdPlayCircle className={styles.icon}/>
                <IoStopCircle className={styles.icon}/>
                <div className={styles.max_time}>
                    <div className={styles.date_time}></div>
                </div>
            <div className={styles.time2}>0:00</div>
        </div>
    );
}

export default Var;