import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const Card = ({data}) => {
    console.log(data)
    const router = useRouter();
    const handleMovie = (id) => {
        router.push('/displayMovie/'+id)
    }
    return (
        <div>
            <div className={styles.container}>
                AMAZON PRIME
            </div>
            <div className={styles.cardContainer}>
            {
                data.map((data) => {
                    console.log(data)
                    return (
                        <div key = {data.id} className={styles.card}>
                            <div className = {styles.movieImage}>
                                <Image src={data.url} alt={data.name} width = "200px" height = "200px" onClick={()=>handleMovie(data.id)} />
                            </div>
                            <div className={styles.movieName}>
                                {data.name}
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Card;