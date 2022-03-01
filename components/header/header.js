import Link from "next/link"
import useLocalStorage from "use-local-storage";
// import Hero from "../hero/hero";
// import About from "../about/about";
// import AboutUs from "../aboutus/aboutus";
// import Services from "../services/services";
// import Job from "../job/job";
// import Out from "../out/out";
// import Reviews from "../reviews/reviews";
// import Question from "../question/question";
import Switch from "@material-ui/core/Switch";
import {useState} from "react";
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'


export default function Header() {
    const [dark, setDark] = useState(false)
    const theme = createMuiTheme({
        palette: {
            type: dark ? 'dark' : 'light',
        },
    })

    // const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
    //
    // const switchTheme = () => {
    //     const newTheme = theme === 'light' ? 'dark' : 'light';
    //     setTheme(newTheme)
    // }
    return (
        <div>
            <ThemeProvider theme={theme}>
                <header className="header" data-theme={theme}>
                    <div className="container">
                        <Paper>
                            <Typography variant='body2'>
                                <div className="header-general ">
                                    <div style={{
                                        cursor: "pointer"
                                    }}>
                                        <Link href={"/"}><h1 className="header-general__logo ">ZeroWaste</h1></Link>
                                    </div>
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center"
                                    }}>
                                        <Typography variant='h1'><h1 className="header-general__nav ">Главная</h1>
                                        </Typography>
                                        <Typography variant='h1'><h1 className="header-general__nav  ">О нас</h1>
                                        </Typography>
                                        <Typography variant='h1'><h1 className="header-general__nav  ">Услуги</h1>
                                        </Typography>
                                        {/*<button className="header-general__off" onClick={switchTheme}>off</button>*/}
                                        <Switch checked={dark} onChange={() => setDark(!dark)}/>
                                        <button className="header-general__btn ">
                                            <span className="header-general__btn__text">Свяжитесь с нами</span>
                                        </button>
                                    </div>
                                </div>
                            </Typography>
                        </Paper>
                    </div>
                </header>
            </ThemeProvider>
            {/*<Hero  data-theme={theme} />*/}
            {/*<About  data-theme={theme} />*/}
            {/*<AboutUs  data-theme={theme} />*/}
            {/*<Services  data-theme={theme} />*/}
            {/*<Job  data-theme={theme} />*/}
            {/*<Out  data-theme={theme} />*/}
            {/*<Reviews  data-theme={theme} />*/}
            {/*<Question  data-theme={theme} />*/}
        </div>
    )
}