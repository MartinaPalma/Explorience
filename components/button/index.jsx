import styles from './index.module.scss'

const Button = ({ type, text }) => {
  return (
    <button className={styles.Button} type={type}>
      {text}
    </button>
  )
}

export default Button
