import Link from 'next/link'
import styles from './styles/common.module.css'
const NotFoundPage = () => {
  return (
<section className={styles.container}>
    <div className={styles.error_page}>
        <h1>404</h1>
        <h2>Not Found</h2>
        <p>Could not find the requested resource</p>
        <Link href="/">
            <button>
            Go back to Home Page
            </button>
        </Link>
    </div>
</section>  )
}

export default NotFoundPage