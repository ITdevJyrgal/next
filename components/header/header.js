import Link from "next/link"
import Switch from "@material-ui/core/Switch";
import {useState} from "react";
// import Modal from "./modal/modal";


export default function Header() {

    const [modalActive, setModalActive] = useState(true)
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

        <header className="header">
            <div className="container">
                {/*<Paper>*/}
                {/*<Typography variant='body2'>*/}
                <div className="header-general ">
                    <div style={{
                        cursor: "pointer"
                    }}>
                        <Link href={'/'}>
                            <a className="header-general__logo ">ZeroWaste</a>
                        </Link>
                    </div>

                    <div style={{
                        display: "flex",
                        alignItems: "center",
                    }}>
                        <Link href={"/"}><a className="header-general__nav ">Главная</a></Link>

                        <Link href={"/"}><a className="header-general__nav  ">О нас</a></Link>

                        <Link href={"/"}><a className="header-general__nav  ">Услуги</a></Link>

                        {/*<button className="header-general__off" onClick={switchTheme}>off</button>*/}
                        <Switch checked={dark} onChange={() => setDark(!dark)}/>
                        <button className="header-general__btn ">
                          Свяжитесь с нами
                        </button>

                        {/*<Modal active={modalActive} setActive={setModalActive} />*/}


                    </div>
                </div>
            </div>


        </header>

    )
}