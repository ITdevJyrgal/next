// import img from "./../public/img/404.jpg"
// import Image from "next/image"


import Link from 'next/link'

export default function Error() {

    return (
        <div>
            {/*<Image src={img} alt="img" className="not"/>*/}
            <div className="container">
                <h1>404
                    not found</h1>
             <Link href={"/"}> на главную</Link>
            </div>
        </div>

    )

}