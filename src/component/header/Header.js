import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.title}>My Music!</div>
        </div>
    );
}

export default Header;
