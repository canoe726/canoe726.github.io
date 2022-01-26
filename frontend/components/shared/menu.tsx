import Link from 'next/link'

const Menu = () => {
  return (
    <header>
      <div className='header'>
        <Link href='/'>
          <h2>This is for developer</h2>
        </Link>
      </div>
    </header>
  )
}

export default Menu
