import img from "./../public/img/404.svg"
import child from "./../public/img/child.svg"
import exed from "./../public/img/exed.svg"
import Image from "next/image"


import Link from 'next/link'

export default function Error() {

    return (

        <div className="error">
            <div className="container">
                <Link href={"/"}>
                <div className="error-general__img">
                    <Image src={exed} alt="img"/>
                </div>
                </Link>
                <div className="error-general">
                    <div>
                        <Image src={img} alt="img"/>
                    </div>
                    <div>
                        <Image src={child} alt="img" className="error-general__img"/>
                        <p className="error-general__title">Что-то пошло не так!</p>
                        <p className="error-general__item">Пожалуйста, повторите
                            попытку позже!</p>
                    </div>
                </div>
            </div>
        </div>

    )

}