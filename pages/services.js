import Header from "./../components/header/header"
import Image from "next/image"
import Link from "next/link"
import Footer from "../components/footer/footer"
import img from "./../public/img/exid.svg"
import Slider from "react-slick"
import image from "./../public/img/imge.jpg"
import Services2 from "./services2"


export default function Pageservices() {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
            <Header/>
            <div className="pageservices">
                <div className="container">
                    <div className="pageservices-general">

                        <Link href={"/"}>
                            <div style={{
                                paddingTop: "40px",
                                marginBottom: "20px",
                                cursor: "pointer"
                            }}>
                                <Image src={img} alt={img}/>
                            </div>
                        </Link>

                        <div style={{
                            display: "flex",
                            justifyContent: "space-around",
                            flexWrap: "wrap"
                        }}>
                            <div className="pageservices-general__block">
                                <Slider {...settings} >
                                    <div>
                                        <div className="pageservices-general__block__img">
                                            <Image src={image} alt="img"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="pageservices-general__block__img">
                                            <Image src={image} alt="img"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="pageservices-general__block__img">
                                            <Image src={image} alt="img"/>
                                        </div>
                                    </div>


                                </Slider>
                            </div>

                            <div>
                                <div style={{
                                    marginTop:"50px"
                                }}>
                                    <h1 className="pageservices-general__block__title">Бассейны из полипропилена</h1>

                                    <div className="pageservices-general__block__veneta">
                                        <p className="pageservices-general__block__item2">
                                            Бассейны, спроектированные и
                                            Наша компания изготавливает бассейны для дома и дачи из полипропилена любых
                                            форм и конфигураций на собственной производственной площадке в городе
                                            Бишкек. Основные формы полипропиленового бассейна, это прямоугольная и
                                            цилиндрическая форма.</p>

                                        <p className="pageservices-general__block__item2"> Изготовление бассейнов в
                                            компании ZERO WASTE SERVICE ориентировано на
                                            использование полимеризированного пропилена (полипропилена), исходная
                                            прочность которого позволяет изготавливать для заказчика пластиковые
                                            бассейны с толщиной стенок не более сантиметра. Полипропиленовый бассейн,
                                            выполняются из голубого, синего, пластика. Бассейны из полипропилена удачно
                                            впишется в любое дизайнерское решение, будут удачно смотреться и рядом с
                                            цветущим садом и с летней аллеей или детской площадкой.
                                        </p>
                                        <p className="pageservices-general__block__item2">
                                            Полипропиленовые бассейны производства ZERO WASTE SERVICE изготавливаются
                                            той глубины и формы, которая продиктована Вашим архитекторским проектом и
                                            пожеланиями - время шаблонных решений и надоевших форм прошло. И даже если в
                                            Вашем частном случае нет возможности провести заглубление конструкции,
                                            строительство бассейнов для Вас не превращается в запретный плод.
                                            Единственное условие: ровная надежная поверхность для установки бассейна из
                                            пластика.
                                        </p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Services2/>
            <Footer/>
        </div>
    )
}