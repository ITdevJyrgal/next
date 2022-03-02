// import Link from "next/link";
// import {useEffect} from "react";
//
// // import {useIntl} from "react-intl";
//
// export default function BurgerMenu() {
//     // const {formatMessage, locale} = useIntl()
//
//     const menu = () => {
//         if ( menu) {
//             const burgerMenu = document.querySelector(".burger__menu")
//
//             burgerMenu.addEventListener('click', () => {
//                 document.querySelector(".burger__menu").classList.toggle("active")
//                 document.querySelector(".menu").classList.toggle("m_active")
//                 document.querySelector('#header').classList.toggle('menu-bg')
//                 document.querySelector('.menu').classList.toggle('burger-menu-bg')
//
//             })
//         }
//     }
//     useEffect(() => {
//         menu();
//     }, [])
//     return (
//         <div className="sm:flex md:hidden ">
//             <div className="burger__menu">
//                 <span className="burger"/>
//             </div>
//             <div className="menu">
//                 <nav className="menu__nav-items">
//                     <Link href={'/'}><a
//                         className="font-medium text-gray-400 text-xl leading-5 mx-4 hover:text-white nav-item">
//                         Башкы бет
//                     </a>
//                     </Link>
//                     <Link href={'it-club'}>
//                         <a
//                             className="font-medium text-gray-400 text-xl leading-5 mx-4 hover:text-white nav-item">
//                             IT-Клуб
//                         </a>
//                     </Link>
//                     <Link href={'/all-courses'}>
//                         <a
//                             className="font-medium text-gray-400 text-xl leading-5 mx-4 hover:text-white nav-item">
//                             Курстар
//                         </a>
//                     </Link>
//
//                     {/*<Link href={'/trips'}>*/}
//                     <a
//                         className="font-medium text-gray-700 text-xl leading-5 cursor-pointer  mx-4 nav-item">
//                         IT-Кемп
//                     </a>
//                     {/*</Link>*/}
//                     <a href="/#subscribe" className="menu__nav-items__btn">Жазылуу</a>
//
//                 </nav>
//             </div>
//         </div>
//     )
// }