import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
        <Header />
        <main id='root' className='main'>{children}</main>
        <Footer />
    </>
  )
}