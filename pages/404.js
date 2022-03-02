import img from "./../public/img/404.jpg"
import Image from "next/image"


import Link from 'next/link'

export default function Error() {
    const def = [
        {
            id: 1,
            img: img,
            item: "на главную"
        }
    ]
    return (
        <div>
            {
                def.map(el => {
                    return (
                        <div>
                            <Image src={el.img} alt="img" className="error"/>
                            <div className="container"><Link href={"/"}>
                                <div>
                                    <p className="error2">{el.item}</p>
                                </div>
                            </Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )

}