import Style from '../styles/Loader.module.css'

export default function Loader() {
  return (
    <span className={Style.load}>
      <span className={Style.line}></span>
      <span className={Style.line}></span>
      <span className={Style.line}></span>
    </span>
  )
}
