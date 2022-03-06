import Link from "next/link"
import {useTheme} from "next-themes";
import {SunIcon, MoonIcon} from "@heroicons/react/solid";
import {useState, useEffect} from "react";
import BurgerMenu from "./../burgerMenu";
import Modal from './modal/modal';

export default function Header() {

    const {systemTheme, theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "light") {
            return (
                <SunIcon className="w-7 h-7 text-yellow-500 " role="button" onClick={() => setTheme('dark')}/>

            )
        } else {
            return (
                <MoonIcon className="w-7 h-7 text-gray-900 " role="button" onClick={() => setTheme('light')}/>
            )
        }
    };

    return (

        <header className="header"
                style={{
                    position: "fixed",
                    width: "100%",
                    zIndex: "12",
                }}>
            <div className="container">
                <div className="header-general">
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

                        <Link href={"/aboutus"}><a className="header-general__nav  ">О нас</a></Link>

                        <Link href={"/services-page"}><a className="header-general__nav  ">Услуги</a></Link>

                        <button className="header-general__close">{renderThemeChanger()}</button>
                        <BurgerMenu/>
                            <Modal/>
                    </div>
                </div>
            </div>


        </header>

    )
}



