import Link from "next/link";
import React, {useEffect} from "react";

// import {useIntl} from "react-intl";

export default function BurgerMenu() {
    // const {formatMessage, locale} = useIntl()

    const menu = () => {
        if (process.browser) {
            const burgerMenu = document.querySelector(".burger__menu")

            burgerMenu.addEventListener('click', () => {
                document.querySelector(".burger__menu").classList.toggle("active")
                document.querySelector(".menu").classList.toggle("m_active")
                document.querySelector('.header').classList.toggle('menu-bg')
                document.querySelector('.menu').classList.toggle('burger-menu-bg')

            })
        }
    }
    useEffect(() => {
        menu();
    }, [])



    return (
        <div className="sm:flex md:hidden ">
            <div className="burger__menu">
                <span className="burger"/>
            </div>
            <div className="menu">
                <nav className="menu__nav-items">
                    <Link href={'/'}><a
                        className="font-medium text-gray-400 text-white text-xl leading-5 mx-4 hover:text-white nav-item">
                        Главная
                    </a>
                    </Link>
                    <Link href={'/work'}>
                        <a
                            className="font-medium text-white text-gray-400 text-xl leading-5 mx-4 hover:text-white nav-item">
                            О нас
                        </a>
                    </Link>
                    <Link href={'/services'}>
                        <a
                            className="font-medium text-white text-gray-400 text-xl leading-5 mx-4 hover:text-white nav-item">
                            Услуги
                        </a>
                    </Link>

                </nav>
            </div>
        </div>
    )
}