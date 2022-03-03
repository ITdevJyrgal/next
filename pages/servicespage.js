import Image from "next/image"
import Link from "next/link"
import img from "../assets/img/exid.svg"
import Slider from "react-slick"
import image from "../assets/img/imge.jpg"
import PagesDate from "../components/pagesDate";
import {useState} from "react";
import pol from "../assets/img/pol.jpg";
import pol2 from "../assets/img/pol2.jpg"
import pol3 from "../assets/img/pol3.jpg"
import pol4 from "../assets/img/pol4.jpg"
import HomeLayout from "../components/HomeLayout";


export default function Pageservices() {
    const [services, setServices] = useState({img: pol, pol2, pol3, pol4})
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

    const settings1 = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    };
    return (
        <HomeLayout>
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
                                            <Image src={services.img} alt="img"/>
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
                                    marginTop: "50px"
                                }}>
                                    <h1 className="work-general__block__title">Бассейны из полипропилена</h1>

                                    <div className="work-general__block__veneta">
                                        <p onClick={() => setServices()} className="work-general__block__item2">
                                            Бассейны, спроектированные и
                                            Наша компания изготавливает бассейны для дома и дачи из полипропилена любых
                                            форм и конфигураций на собственной производственной площадке в городе
                                            Бишкек. Основные формы полипропиленового бассейна, это прямоугольная и
                                            цилиндрическая форма.</p>

                                        <p className="work-general__block__item2"> Изготовление бассейнов в
                                            компании ZERO WASTE SERVICE ориентировано на
                                            использование полимеризированного пропилена (полипропилена), исходная
                                            прочность которого позволяет изготавливать для заказчика пластиковые
                                            бассейны с толщиной стенок не более сантиметра. Полипропиленовый бассейн,
                                            выполняются из голубого, синего, пластика. Бассейны из полипропилена удачно
                                            впишется в любое дизайнерское решение, будут удачно смотреться и рядом с
                                            цветущим садом и с летней аллеей или детской площадкой.
                                        </p>
                                        <p className="work-general__block__item2">
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
            <div className="services2">
                <div className="services2-general">
                    <Slider {...settings1}>

                        {
                            PagesDate.map(el => {
                                return (
                                    <div key={el.id} onClick={() => setServices({img: el.img, item: el.item})} style={{
                                        display:"flex",
                                        justifyContent:"center",
                                        alignItems:"center"
                                    }}>
                                        <div className="services2-general__block">
                                            <Image src={el.img} alt="img"/>
                                            <h1 className="services2-general__title">{el.title}</h1>
                                            <p className="services2-general__item">{el.item}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </Slider>

                </div>
            </div>
        </HomeLayout>


    )
}