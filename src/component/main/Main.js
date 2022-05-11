import WaveWrapper from './waveWrapper/WaveWrapper';
import List from './list/List';
import Information from './Information/Information';
import Var from './var/Var';
import styles from './Main.module.css';
import music from './data/musicData.json';

function Main() {
    return (
            <div className={styles.section}>
                <WaveWrapper /> 
                <div className={styles.main}>
                    <List className={styles.List} />
                    <div className={styles.music_img}></div>
                    <Information className={styles.Information}/>
                    <Var className={styles.Var}/>
                </div>
            </div>
    );
}

export default Main;