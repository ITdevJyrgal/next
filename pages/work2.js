import Slider from "react-slick";
import img from "./../public/img/img.jpg"
import Image from "next/image"

export default function Reviews() {

    const settings = {
        dots: true,
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
        <div className="work2">
            <div className="work2-general">
                <Slider {...settings}>
                    <div>
                        <div>
                            <Image src={img} alt="img"/>
                            <p className="work2-general__title">Хай-тек в Дранишниках</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src={img} alt="img"/>
                            <p className="work2-general__title">Хай-тек в Дранишниках</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src={img} alt="img"/>
                            <p className="work2-general__title">Хай-тек в Дранишниках</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src={img} alt="img"/>
                            <p className="work2-general__title">Хай-тек в Дранишниках</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src={img} alt="img"/>
                            <p className="work2-general__title">Хай-тек в Дранишниках</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src={img} alt="img"/>
                            <p className="work2-general__title">Хай-тек в Дранишниках</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src={img} alt="img"/>
                            <p className="work2-general__title">Хай-тек в Дранишниках</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src={img} alt="img"/>
                            <p className="work2-general__title">Хай-тек в Дранишниках</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Image src={img} alt="img"/>
                            <p className="work2-general__title">Хай-тек в Дранишниках</p>
                        </div>
                    </div>


                </Slider>

            </div>
        </div>
    )
}