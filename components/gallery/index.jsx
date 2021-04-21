import styles from './index.module.scss'

const Gallery = ({ figurines }) => (
  <div className={styles.gallery}>
    {figurines.title}
    <div class="container">
      <img src={figurines.cover_image_url} alt="test" />
      <div class="box sm box-shadow-dark"></div>
    </div>
  </div>
)

export default Gallery
