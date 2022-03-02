import Link from "next/link"
import Switch from "@material-ui/core/Switch";
import {useState} from "react";
import {createMuiTheme} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'


export default function Header() {
    const [dark, setDark] = useState(false)
    // const theme = createMuiTheme({
    //     palette: {
    //         type: dark ? 'dark' : 'light',
    //     },
    // })

    // const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
    //
    // const switchTheme = () => {
    //     const newTheme = theme === 'light' ? 'dark' : 'light';
    //     setTheme(newTheme)
    // } data-theme={theme}
    // <Typography variant='h1'>
    //     </Typography>
    // <Typography variant='h1'>
    // </Typography>
    // <Typography variant='h1'>
    // </Typography>
    return (
        <div>
            {/*<ThemeProvider theme={theme}>*/}
                <header className="header">
                    <div className="container">
                        {/*<Paper>*/}
                            {/*<Typography variant='body2'>*/}
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
                                        <h1 className="header-general__nav ">Главная</h1>

                                        <h1 className="header-general__nav  ">О нас</h1>

                                        <h1 className="header-general__nav  ">Услуги</h1>

                                        {/*<button className="header-general__off" onClick={switchTheme}>off</button>*/}
                                        <Switch checked={dark} onChange={() => setDark(!dark)}/>
                                        <button className="header-general__btn ">
                                            <span className="header-general__btn__text">Свяжитесь с нами</span>
                                        </button>
                                    </div>
                                </div>
                            {/*</Typography>*/}
                        {/*</Paper>*/}
                    </div>
                </header>
            {/*</ThemeProvider>*/}
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