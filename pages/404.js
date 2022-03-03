import Img from "./../public/img/404.svg"
import Child from "./../public/img/child.svg"
import Exed from "./../public/img/exed.svg"


import Link from 'next/link'

export default function Error() {

    return (

        <div className="error">
            <div className="container">
                <Link href={"/"}>
                    <div className="error-general__img">
                        <img src={Exed} alt="img"/>
                    </div>
                </Link>
                <div className="error-general">
                    <div>
                        <img src={Img} alt="img"/>
                    </div>
                    <div>
                        <img src={Child} alt="img" className="error-general__img"/>
                        <p className="error-general__title">Что-то пошло не так!</p>
                        <p className="error-general__item">Пожалуйста, повторите
                            попытку позже!</p>
                    </div>
                </div>
            </div>
        </div>

    )

}