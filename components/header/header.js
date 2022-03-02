import Link from "next/link"
import Switch from "@material-ui/core/Switch";
import {useState} from "react";
// import Modal from "./modal/modal";



export default function Header() {

const [modalActive,setModalActive] = useState(true)
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
                                    }}><h1 className="header-general__logo ">ZeroWaste</h1>
                                    </div>
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}>
                                        <a href="/">   <h1 className="header-general__nav ">Главная</h1></a>

                                        <h1 className="header-general__nav  ">О нас</h1>

                                        <h1 className="header-general__nav  ">Услуги</h1>

                                        {/*<button className="header-general__off" onClick={switchTheme}>off</button>*/}
                                        <Switch checked={dark} onChange={() => setDark(!dark)}/>
                                        <button className="header-general__btn ">
                                            <span className="header-general__btn__text">Свяжитесь с нами</span>
                                        </button>

                                        {/*<Modal active={modalActive} setActive={setModalActive} />*/}

                                    </div>
                                </div>
                            {/*</Typography>*/}
                        {/*</Paper>*/}
                    </div>
                </header>
            {/*</ThemeProvider>*/}
        </div>
    )
}