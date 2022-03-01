import Slider from "react-slick";
import work2date from "./work2date";
import Image from "next/image";


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
        <div className="work2">
            <div className="work2-general">
                <Slider {...settings}>

                    {
                        work2date.map(el => {
                            return (
                                <div key={el.id}>
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
    )
}