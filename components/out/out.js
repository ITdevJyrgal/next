import Bay from "../../assets/img/bay.jpg"
import Bas from "../../assets/img/bas.jpg"
import Treh from "../../assets/img/treh.jpg"
import Hai from "../../assets/img/hai.jpg"
import Xag from "../../assets/img/xag.jpg"
import Drag from "../../assets/img/drag.jpg"
import Pod from "../../assets/img/pod.svg"
import Link from 'next/link'
import Image from "next/image"


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
                            <Image src={Bay} alt="img" className="our-general__block__img"/>
                            <div className="our-general__block__span">
                                    <p className="our-general__block__gen">Трехэтажный загородный коттедж с плоской
                                        крышей</p>
                                <div className="our-general__block__gen2">
                                    <Link href={"/work"}>
                                        <Image src={Pod} alt="" className="our-general__block__pod"/>
                                    </Link>
                                </div>

                            </div>
                        </div>

                        <div className="our-general__block__square">
                            <Image src={Bas} alt="img" className="our-general__block__img2"/>
                            <div className="our-general__block__span">
                                    <p className="our-general__block__gen">Хай-тек в Дранишниках</p>
                                <div  className="our-general__block__gen3">

                                    <Link href={"/services-page"}>
                                        <Image src={Pod} alt="img" className="our-general__block__pod"/>
                                    </Link>
                                </div>

                            </div>
                        </div>

                        <div className="our-general__block__square">
                            <Image src={Treh} alt="img" className="our-general__block__img"/>
                            <div className="our-general__block__span">

                                    <p className="our-general__block__gen">Трехэтажный загородный коттедж с плоской
                                        крышей</p>
                                <div  className="our-general__block__gen2">
                                    <Link href={"/work"}>
                                        <Image src={Pod} alt="" className="our-general__block__pod"/>
                                    </Link>
                                </div>

                            </div>
                        </div>

                        <div className="our-general__block__square">
                            <Image src={Hai} alt="img" className="our-general__block__img2"/>
                            <div className="our-general__block__span">
                                    <p className="our-general__block__gen">Хай-тек в Дранишниках</p>
                                <div   className="our-general__block__gen3">
                                    <Link href={"/services-page"}>
                                        <Image src={Pod} alt="img" className="our-general__block__pod"/>
                                    </Link>
                                </div>

                            </div>
                        </div>

                        <div className="our-general__block__square">
                            <Image src={Xag} alt="img" className="our-general__block__img"/>
                            <div className="our-general__block__span">

                                    <p className="our-general__block__gen">Трехэтажный загородный коттедж с плоской
                                        крышей</p>

                                <div  className="our-general__block__gen2">
                                    <Link href={"/work"}>
                                        <Image src={Pod} alt="" className="our-general__block__pod"/>
                                    </Link>
                                </div>

                            </div>
                        </div>

                        <div className="our-general__block__square">
                            <Image src={Drag} alt="img" className="our-general__block__img2"/>
                            <div className="our-general__block__span">
                                    <p className="our-general__block__gen">Хай-тек в Дранишниках</p>
                                <div   className="our-general__block__gen3">
                                    <Link href={"/services-page"}>
                                        <Image src={Pod} alt="img" className="our-general__block__pod"/>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}