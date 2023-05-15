import Link from 'next/link'
import React from 'react'
import MovieCard from '../components/MovieCard';
import styles from '../styles/common.module.css'

const Movies = async() => {
  await new Promise(resolve=>setTimeout(resolve,2000))
  let datas
  const url = process.env.RAPID_URL;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_KEY,
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
 datas  = result.titles
	// console.log(datas);
} catch (error) {
	console.error(error);
}
  return (
    <>
    <section className={styles.movieSection}>
      <div className={styles.container}>
      <h1>Movies & Series</h1>
      <div className={styles.card_section}>
      {
        datas.map((data)=>{
          return <MovieCard key={data.jawSummary.id} {...data}/>
        }

        )
      }
      </div>
      </div>
      </section>
    </>
  )
}

export default Movies