import Header from "./../components/header/header"
import Image from "next/image"
import Link from "next/link"
import Footer from "../components/footer/footer"
import img from "./../public/img/exid.svg"
import Slider from "react-slick"
import bay from "./../public/img/bay.jpg"
import treh from "./../public/img/treh.jpg"
import xag from "./../public/img/xag.jpg"
import kv from "./../public/img/kv.svg"
import work2date from "./work2date";
import {useState} from "react";

export default function Work() {
    const [working, setWorking] = useState({img: bay})
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
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <Header/>
            <div className="work">
                <div className="container">
                    <div className="work-general">

                        <Link href={"/"}>
                            <div style={{
                                paddingTop: "40px",
                                marginBottom: "20px",
                                cursor: "pointer"
                            }}>
                                <Image src={img} alt="img"/>
                            </div>
                        </Link>

                        <div style={{
                            display: "flex",
                            justifyContent: "space-around",
                            flexWrap: "wrap"
                        }}>
                            <div className="work-general__block">
                                <Slider {...settings} >
                                    <div>
                                        <div>
                                            <Image src={working.img} alt="img"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <Image src={bay} alt="img"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <Image src={xag} alt="img"/>
                                        </div>
                                    </div>
                                </Slider>
                            </div>

                            <div>
                                <div>
                                    <h1 className="work-general__block__title">Бассейны из полипропилена</h1>
                                    <div style={{
                                        display: "flex"
                                    }}>
                                        <Image src={kv} alt="img"/>
                                        <p className="work-general__block__item">335 m5</p>
                                    </div>
                                    <div className="work-general__block__veneta">
                                        <p className="work-general__block__item2">Бассейны, спроектированные и
                                            изготовленные по индивидуальному заказу La
                                            Veneta
                                            Forme, изготовлены из полипропилена, имеют гладкую поверхность, не
                                            подверженную
                                            осмосу, не требуют покрытия, имеют гарантированно стойкие цвета, устойчивы к
                                            низким температурам, УФ-лучам и химическим веществам. вещества. Благодаря
                                            большой универсальности этого материала можно изготовить бассейны любой
                                            формы и
                                            размера по запросу, учитывая площадь и стоимость производства, согласованные
                                            с
                                            клиентом.</p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="work2">
                <div className="work2-general">
                    <Slider {...settings1}>

                        {
                            work2date.map(el => {
                                return (
                                    <div key={el.id} onClick={() => setWorking({img: el.img, title: el.title})}>
                                        <div>
                                            <Image src={el.img} alt="img"/>
                                            <p className="work2-general__title">{el.title}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </Slider>

                </div>
            </div>
            <Footer/>
        </div>
    )
}