import Link from "next/link"
import useLocalStorage from "use-local-storage";
import Hero from "../hero/hero";
import About from "../about/about";
import AboutUs from "../aboutus/aboutus";
import Services from "../services/services";
import Job from "../job/job";
import Out from "../out/out";
import Reviews from "../reviews/reviews";
import Question from "../question/question";

export default function Header() {
    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }
    return (
<div>

        <header className="header"  data-theme={theme}>
            <div className="container">
                <div className="header-general ">
                    <div style={{
                        cursor:"pointer"
                    }}>
                        <Link href={"/"}><h1 className="header-general__logo ">ZeroWaste</h1></Link>
                    </div>
                    <div style={{
                        display:"flex",
                        alignItems:"center"
                    }}>
                        <h1  className="header-general__nav ">Главная</h1>
                        <h1 className="header-general__nav  ">О нас</h1>
                        <h1 className="header-general__nav  ">Услуги</h1>
                        <button className="header-general__off" onClick={switchTheme}>off</button>

                        <button className="header-general__btn ">
                            <span className="header-general__btn__text">Свяжитесь с нами</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    <Hero  data-theme={theme} />
    <About  data-theme={theme} />
    <AboutUs  data-theme={theme} />
    <Services  data-theme={theme} />
    <Job  data-theme={theme} />
    <Out  data-theme={theme} />
    <Reviews  data-theme={theme} />
    <Question  data-theme={theme} />
</div>
    )
}