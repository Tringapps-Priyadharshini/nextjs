import Link from 'next/link';
import styles from '../styles/Home.module.css';
const CustomPage = () => {
    return(
        <div className={styles.customPage}>
            <div className={styles.notFound}>The Requested Page Is Not Found</div>
            <Link className={styles.homeBtn} href = "/home" as = "/">Go to Home</Link>
        </div>
    )
}
export default CustomPage;