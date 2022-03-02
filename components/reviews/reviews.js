import Slider from "react-slick";


export default function Reviews() {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 912,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <div className="reviews">
            <div className="reviews-general">
                <div style={{display: "flex", alignItems: "center"}}>
                    <div className="about-general__width"/>
                    <h1 className="about-general__title">ОТЗЫВЫ</h1>
                    <div className="about-general__width"/>
                </div>

                <Slider {...settings}>
                    <div>
                        <div
                            className="reviews-general__block ">
                            <h1 className="reviews-general__title2">Ryan Florence</h1>
                            <p style={{
                                color: "black",
                            }}>Здравствуйте дороги читатели отзыва о каркасном бассейне
                                BestWay. Приобрели его совсем
                                недавно, и хочется поделится первыми впечатлениями от его обладания. Сборка бассейна
                                была сделана за тридцать минут вдвоем. Все детали сделаны так что можно его...</p>
                        </div>
                    </div>
                    <div>
                        <div
                            className="reviews-general__block "
                            style={{
                                width: "413px",
                                height: "210px",
                                marginLeft: '116px'
                            }}>
                            <h1 className="text-2xl p-3">Ryan Florence</h1>
                            <div className="reviews-general__video">
                                <iframe width="300" height="180" src="https://www.youtube.com/embed/PXGycbkbtW0"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div
                            className="reviews-general__block ">
                            <h1 className="reviews-general__title2">Ryan Florence</h1>
                            <p style={{
                                color: "black",
                            }}>Здравствуйте дороги читатели отзыва о каркасном бассейне
                                BestWay. Приобрели его совсем
                                недавно, и хочется поделится первыми впечатлениями от его обладания. Сборка бассейна
                                была сделана за тридцать минут вдвоем. Все детали сделаны так что можно его...</p>
                        </div>
                    </div>
                    <div>
                        <div
                            className="reviews-general__block "
                            style={{
                                width: "413px",
                                height: "210px",
                                marginLeft: '116px'
                            }}>
                            <h1 className="text-2xl p-3">Ryan Florence</h1>
                            <div className="reviews-general__video">
                                <iframe width="300" height="180" src="https://www.youtube.com/embed/PXGycbkbtW0"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div
                            className="reviews-general__block ">
                            <h1 className="reviews-general__title2">Ryan Florence</h1>
                            <p style={{
                                color: "black",
                            }}>Здравствуйте дороги читатели отзыва о каркасном бассейне
                                BestWay. Приобрели его совсем
                                недавно, и хочется поделится первыми впечатлениями от его обладания. Сборка бассейна
                                была сделана за тридцать минут вдвоем. Все детали сделаны так что можно его...</p>
                        </div>
                    </div>
                    <div>
                        <div
                            className="reviews-general__block "
                            style={{
                                width: "413px",
                                height: "210px",
                                marginLeft: '116px'
                            }}>
                            <h1 className="text-2xl p-3">Ryan Florence</h1>
                            <div className="reviews-general__video">
                                <iframe width="300" height="180" src="https://www.youtube.com/embed/PXGycbkbtW0"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>
                            </div>

                        </div>
                    </div>
                </Slider>

            </div>
        </div>
    )
}