import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-general">
                    <div>
                        <h1 className="footer-general__title">ZeroWaste</h1>
                        <p className="footer-general__item">Zero Waste (или «Ноль отходов») — это общественное движение,
                            главная цель которого насколько
                            возможно уменьшить количество отходов. </p>
                    </div>
                    <div>
                        <h1 className="footer-general__title2">Меню</h1>
                        <Link href={"/"}><a className="footer-general__title2__nav ">Главная</a></Link>

                        <Link href={"/about"}><a className="footer-general__title2__nav  ">О нас</a></Link>

                        <Link href={"/services"}><a className="footer-general__title2__nav  ">Услуги</a></Link>
                    </div>
                    <div>
                        <h1 className="footer-general__title2">Контакты</h1>
                        <div>
                            <div className="footer-general__icon ">
                                <i className="fas  fa-phone"/>
                            </div>
                            <div style={{
                                display: "flex",
                                flexDirection: "column"
                            }}>
                                <a href={"tel:0550 01 22 08"} className="footer-general__item2">0550 01 22 08</a>
                                <a href={"tel:0777 32 95 46"} className="footer-general__item2">0777 32 95 46</a>
                            </div>
                        </div>

                    </div>
                    <div>
                        <h1 className="footer-general__title2">Социальные сети</h1>
                        <div style={{
                            display: "flex"
                        }}>
                            <div className="footer-general__icons">
                                <i className="fab fa-whatsapp"/>
                            </div>
                            <div className="footer-general__icons">
                                <i className="fab fa-instagram"/>
                            </div>
                            <div className="footer-general__icons">
                                <i className="fab fa-telegram"/>
                            </div>
                            <div className="footer-general__icons">
                                <i className="fab fa-youtube"/>
                            </div>
                            <div className="footer-general__icons">
                                <i className="fab fa-facebook"/>
                            </div>
                        </div>
                    </div>
                    <div className="footer-general__width"/>
                    <h1 className="footer-general__zero">©2018-2021 “ZeroWaste”Все права защищены</h1>

                </div>
            </div>

        </footer>
    )
}