import Date from "./jobdates";
import Image from "next/image";


export default function Job() {
    return (
        <div className="job">
            <div style={{display:"flex", alignItems:"center"}}>
                <div className="about-general__width"/>
                <h1 className="about-general__title">ЭТАПЫ РАБОТЫ</h1>
                <div className="about-general__width"/>
            </div>
            <div className="container">
                <div className="job-general">
                    {
                        Date.map(el => {
                            return (

                                <div className="job-general__block shadow hover:shadow-lg shadow-inner" key={el.id}>
                                    <Image src={el.img} alt="img"/>
                                    <p className="job-general__block__item"> {el.item}</p>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}