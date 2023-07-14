import { header, link } from './Header.css'

export const Header = () => {
  return (
    <nav className={header}>
      <img src='/logo.gif' alt='Logo Hacker News' />
      <a className={link} href='/'>
        Hacker News
      </a>
    </nav>
  )
}