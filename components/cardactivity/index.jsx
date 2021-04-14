import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './index.module.scss'

const getActivityUrlTitle = (fullURL) => {
  const splittedURL = fullURL.split('/')
  return splittedURL[splittedURL.length - 2]
}

function CardActivity({ image, code, relevance, uuid, city, allData }) {
  const router = useRouter()

  return (
    <article className={styles.CardActivity}>
      <h5 className={styles.relevance}>{code}</h5>
      <Link
        href={{
          pathname: `/activity/${getActivityUrlTitle(city.url)}`,
          query: { uuid: uuid },
        }}
        as={`/activity/${getActivityUrlTitle(city.url)}`}
      >
        <img src={image} alt={code} />
      </Link>
      <p style={{ color: '#171717' }}>{relevance / 10 / 2}</p>
    </article>
  )
}

export default CardActivity
