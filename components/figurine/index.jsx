import styles from './index.module.scss'
import Link from 'next/link'

import { encodeTitleToURL } from '../../utils/utils'

import Loader from '../loader'

const Figurine = ({ endPoint, data }) => {
  return (
    <>
      {typeof data !== undefined ? (
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
              pathname: `/${
                endPoint === 'cities' ? `city/${data.id}` : data.uuid
              }`,
              query: {
                id: data.id || data.uuid,
                uuid: data.uuid,
                city: data.city,
              },
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
                data.cover_image_url
                  ? data.cover_image_url + '?fit=crop&h=225'
                  : 'https://dummyimage.com/350.jpg'
              }
              alt={data.name || data.title}
            />
          </Link>
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Figurine
