import styles from '../styles/Home.module.css';
import Image from 'next/image';
const CardDisplay = ({movieData}) => {
    console.log("===moviedata===",movieData)
    const url = movieData.url;
    const name = movieData.name;
    const description = movieData.description
    console.log('url name',url,name)
    return (
        <div>
            <div className={styles.cardContainer}>

                <div className={styles.cardDisplay}>
                    <div className={styles.imageDisplay}>
                        <Image src={url} alt={name} width="600px" height="200px"/>
                    </div>
                    <div className={styles.nameDisplay}>
                        {name}
                    </div>
                    <div className={styles.descriptionDisplay}>
                        {description}
                    </div>
                </div>

            </div>
        </div>
    )
}
export default CardDisplay;
