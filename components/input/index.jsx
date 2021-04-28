import styles from './index.module.scss'

const Input = ({ type, name, title }) => {
  return (
    <div className={styles.Input}>
      <input
        className={styles.Input_text}
        type={type}
        name={name}
        id={name}
        required
      />
      <label className={styles.Input_label} htmlFor={name}>
        <span className={styles.Input_span}>{title}</span>
      </label>
    </div>
  )
}

export default Input
