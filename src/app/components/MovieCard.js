import Link from 'next/link'
import styles from '../styles/common.module.css'
import Image from 'next/image'

const MovieCard = (data) => {
    const {id, type, title, synopsis} = data.jawSummary
    // const {imageURL}= data
    // console.log("imageURL", imageURL)
    // console.log("title", title)
  return (
    <div className={styles.card}>
        <div className={styles.card_image}>
            <Image  src={data.jawSummary.backgroundImage.url} alt={title} width={260} height={200}/>
        </div>
        <div className={styles.card_data}>
            <h2>{title.substring(0,18)}</h2>
            <p>{`${synopsis.substring(0,66)}...`}</p>
            <Link href={`/movies/${id}`}>
                <button>
                    Read More
                </button>
            </Link>
        </div>

    </div>
  )
}

export default MovieCard