import Slider from "react-slick";
import Image from "next/image"
import PagesDate from "./pagesDate";
export default function Reviews() {

    const settings = {
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
        <div className="services2">
            <div className="services2-general">
                <Slider {...settings}>

                    {
                        PagesDate.map(el => {
                            return (
                                <div>
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
    )
}