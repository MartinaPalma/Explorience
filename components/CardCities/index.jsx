import Link from 'next/link'
import styles from './index.module.scss'

const CardCities = ({ activities_count, name, image, id }) => {
  return (
    <article className={styles.CardCities}>
      <h5>{name}</h5>
      <p>{activities_count}</p>
      <Link
        href={{
          pathname: `/city/[name]`,
          query: { id: id },
        }}
        as={`/city/${name} `}
      >
        <img src={image} alt={name} />
      </Link>
    </article>
  )
}

export default CardCities
