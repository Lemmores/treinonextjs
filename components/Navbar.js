import Link from 'next/link'

import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <ul className={styles.navbar}>
       <p>
        <img src = "/images/logo.png" width= "100px"
  height = "100px" object-fit = "fill" alt="icone" />
      </p>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/todos">Todos</Link>
      </li>
      <li>
        <Link href="/products">Produtos</Link>
      </li>
      <li>
        <Link href="/about">Sobre</Link>
      </li>
      <li>
        <Link href="/contact">Contato</Link>
      </li>
     
    </ul>
  )
}
