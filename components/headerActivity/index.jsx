import styles from './index.module.scss'

const HeaderActivity = ({ activity }) => {
  return (
    <div className={styles.HeaderActivity}>
      <div className={styles.HeaderActivity_bgr}></div>
      <img
        src={activity.cover_image_url}
        alt={activity.title}
        className={styles.HeaderActivity_image}
      />
      <h1 className={styles.HeaderActivity_title}>{activity.title}</h1>
    </div>
  )
}
export default HeaderActivity
