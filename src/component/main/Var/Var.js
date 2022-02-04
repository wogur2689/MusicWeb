import styles from './Var.module.css';

function Var() {
    return (
        <div className={styles.music_var}> 
            <div className={styles.time1}>3:32</div>
                <div className={styles.max_time}>
                    <div className={styles.date_time}></div>
                </div>
            <div className={styles.time2}>0:00</div>
        </div>
    );
}

export default Var;