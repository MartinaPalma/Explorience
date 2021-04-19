import styles from './index.module.scss'
import Link from 'next/link'

const encodeTitleToURL = (string) => string.toLowerCase().replaceAll(' ', '-')

const reduceImageSize = (imgPath) =>
  imgPath && `${imgPath}?fit=crop&h=150&max-w=150`

const Figurine = ({ endPoint, data }) => {
  return (
    <div className={styles.figurine}>
      <h5 className={styles.figurine_name}>
        {data.name || data?.verticals[0]?.name}
      </h5>
      <p className={styles.figurine_star}>
        {endPoint === 'cities'
          ? data.activities_count
          : data.verticals[0]?.relevance}
      </p>

      <Link
        href={{
          pathname: `/${endPoint === 'cities' ? `city/${data.id}` : data.uuid}`,
          query: { id: data.id || data.uuid, uuid: data.uuid, city: data.city },
        }}
        as={`/${
          endPoint === 'cities'
            ? `city/${data.name}`
            : encodeTitleToURL(data.title)
        }`}
      >
        <img
          className={styles.figurine_image}
          src={
            reduceImageSize(data.cover_image_url) ||
            'http://unsplash.it/300/300?gravity=center'
          }
          alt={data.name || data.title}
        />
      </Link>
    </div>
  )
}

export default Figurine
