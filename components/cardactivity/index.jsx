import Link from 'next/link'
import styles from './index.module.scss'

const getActivityUrlTitle = (fullURL) => {
  const splittedURL = fullURL.split('/')
  return splittedURL[splittedURL.length - 2]
}

const getActivityUrlTitles = (fullURL) => {
  const splittedURL = fullURL.split('-')
  const oneMore = splittedURL.splice(1, splittedURL.length - 2)
  return oneMore.join('/').replaceAll('/', '-')
}

function CardActivity({ image, code, relevance, uuid, city, allData }) {
  return (
    <article className={styles.CardActivity}>
      <h5 className={styles.relevance}>{code}</h5>
      <Link
        href={{
          pathname: `/${getActivityUrlTitle(city.url)}`,
          query: { uuid: uuid },
        }}
        as={`/${getActivityUrlTitles(allData.url) || city}`}
      >
        <img src={image} alt={code} />
      </Link>
      <p style={{ color: '#171717' }}>{relevance / 10 / 2}</p>
    </article>
  )
}

export default CardActivity
