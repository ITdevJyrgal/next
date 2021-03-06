import ServicesDate from "./servicesDate";
import Image from "next/image"
import Link from "next/link"

export default function Services() {

    return (

        <div className="services">
            <div style={{display: "flex", alignItems: "center"}}>
                <div className="about-general__width"/>
                <h1 className="about-general__title">НАШИ УСЛУГИ</h1>
                <div className="about-general__width"/>
            </div>
            <div className="container">
                <div className="services-general">
                    {
                        ServicesDate.map(el => (
                            <Link href={"/services-page"} key={el.id}>
                                <div className="services-general__block" >
                                    <Image src={el.img} alt="img" className="services-general__block__img"/>
                                    <p className="services-general__block__item">{el.item}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}