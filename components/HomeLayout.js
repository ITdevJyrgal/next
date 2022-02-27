import Header from './header/header'
import Footer from "./footer/footer";

export default function HomeLayout({children}) {
return (
    <>
        <Header/>
        <main>{children}</main>
        <Footer/>
    </>
)
}