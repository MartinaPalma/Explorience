import styles from './index.module.scss'
import Link from 'next/link'

const encodeTitleToURL = (URL) => URL.toLowerCase().replaceAll(' ', '-')

const Figurine = ({ data }) => {
  return (
    <div className={styles.figurine}>
      <h5>{data.name || data.title}</h5>
      <p>{data.activities_count || data.verticals[0].relevance}</p>
      <Link
        href={{
          pathname: `/${data.id || data.uuid}`,
          query: { id: data.id || data.uuid },
        }}
        as={`/${data.name || encodeTitleToURL(data.title)}`}
      >
        <img
          src={data.image || data.cover_image_url}
          alt={data.name || data.title}
        />
      </Link>
    </div>
  )
}

export default Figurine
