import Image from "next/image"
import bay from "./../../public/img/bay.jpg"
import bas from "./../../public/img/bas.jpg"
import treh from "./../../public/img/treh.jpg"
import hai from "./../../public/img/hai.jpg"
import xag from "./../../public/img/xag.jpg"
import drag from "./../../public/img/drag.jpg"
import pod from "./../../public/img/pod.svg"


export default function Out() {
    return (
        <div className="out">
            <div style={{display: "flex", alignItems: "center"}}>
                <div className="about-general__width"/>
                <h1 className="about-general__title">НАШИ РАБОТЫ</h1>
                <div className="about-general__width"/>
            </div>

            <div className="container3">
                <div className="our-general">
                    <div className="our-general__block">
                        <div className="our-general__block__square">
                            <Image src={bay} alt="img" className="our-general__block__img"/>
                            <div className="our-general__block__span">
                                <div>
                                    <p className="our-general__block__gen">Трехэтажный загородный коттедж с плоской
                                        крышей</p>
                                </div>
                                <div  style={{
                                    marginLeft: '360px',

                                }}>
                                    <Image src={pod} alt="" className="our-general__block__pod"/>
                                </div>

                            </div>
                        </div>

                        <div className="our-general__block__square">
                            <Image src={bas} alt="img" className="our-general__block__img2"/>
                            <div className="our-general__block__span">
                                <div>
                                    <p className="our-general__block__gen">Хай-тек в Дранишниках</p>
                                </div>
                                <div style={{
                                    marginLeft: "210px"
                                }}>
                                    <Image src={pod} alt="img" className="our-general__block__pod"/>
                                </div>

                            </div>
                        </div>

                        <div className="our-general__block__square">
                            <Image src={treh} alt="img" className="our-general__block__img"/>
                            <div className="our-general__block__span">
                                <div>
                                    <p className="our-general__block__gen">Трехэтажный загородный коттедж с плоской
                                        крышей</p>
                                </div>
                                <div style={{
                                    marginLeft: '360px'
                                }}>
                                    <Image src={pod} alt="" className="our-general__block__pod"/>
                                </div>

                            </div>
                        </div>

                        <div className="our-general__block__square">
                            <Image src={hai} alt="img" className="our-general__block__img2"/>
                            <div className="our-general__block__span">
                                <div>
                                    <p className="our-general__block__gen">Хай-тек в Дранишниках</p>
                                </div>
                                <div style={{
                                    marginLeft: "210px"
                                }}>
                                    <Image src={pod} alt="img" className="our-general__block__pod"/>
                                </div>

                            </div>
                        </div>

                        <div className="our-general__block__square">
                            <Image src={xag} alt="img" className="our-general__block__img"/>
                            <div className="our-general__block__span">
                                <div>
                                    <p className="our-general__block__gen">Трехэтажный загородный коттедж с плоской
                                        крышей</p>
                                </div>
                                <div style={{
                                    marginLeft: '360px'
                                }}>
                                    <Image src={pod} alt="" className="our-general__block__pod"/>
                                </div>

                            </div>
                        </div>

                        <div className="our-general__block__square">
                            <Image src={drag} alt="img" className="our-general__block__img2"/>
                            <div className="our-general__block__span">
                                <div>
                                    <p className="our-general__block__gen">Хай-тек в Дранишниках</p>
                                </div>
                                <div style={{
                                    marginLeft: "210px"
                                }}>
                                    <Image src={pod} alt="img" className="our-general__block__pod"/>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="our-general__btn">
                        <button className="our-general__btn__btns">Смотреть все</button>
                    </div>
                </div>
            </div>
        </div>
    )
}