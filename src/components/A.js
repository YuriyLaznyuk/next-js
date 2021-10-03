import Link from 'next/link';
import style from '../style/A.module.scss'
export default function A({text,href}) {
  return(
    <Link href={href}>
      <a className={style.link}>{text}</a>
    </Link>
  )
}