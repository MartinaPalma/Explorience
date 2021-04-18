import Link from 'next/link'
import styles from './index.module.scss'

const getActivityUrlTitle = (fullURL) => {
  const splittedURL = fullURL.split('/')
  return splittedURL[splittedURL.length - 2]
}

function CardActivity({ image, code, relevance, uuid, city, allData }) {
  const pathName = city ? getActivityUrlTitle(city.url) : ''
  return (
    <article className={styles.CardActivity}>
      <h5 className={styles.relevance}>{allData.verticals[0]?.name}</h5>
      <Link
        href={{
          pathname: `/[name]`,
          query: { uuid: uuid, city: city },
        }}
        as={`/${pathName}`}
      >
        <img src={image} alt={code} />
      </Link>
      {relevance ? (
        <p style={{ color: '#171717' }}>{relevance / 10 / 2}</p>
      ) : null}
    </article>
  )
}

export default CardActivity
