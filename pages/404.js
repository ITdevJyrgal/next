import Img from "../assets/img/404.svg"
import Child from "../assets/img/child.svg"
import Exed from "../assets/img/exed.svg"
import Image from "next/image"

import Link from 'next/link'

export default function Error() {

    return (

        <div className="error">
            <div className="container">
                <Link href={"/"}>
                    <div className="error-general__img">
                        <Image src={Exed} alt="img"/>
                    </div>
                </Link>
                <div className="error-general">
                    <div>
                        <Image src={Img} alt="img"/>
                    </div>
                    <div>
                        <Image src={Child} alt="img" className="error-general__img"/>
                        <p className="error-general__title">Что-то пошло не так!</p>
                        <p className="error-general__item">Пожалуйста, повторите
                            попытку позже!</p>
                    </div>
                </div>
            </div>
        </div>

    )

}