export default function Hero() {

    // let btn = document.querySelector(".header-general__btn")
    // btn.addEventListener("click", () => {
    //     document.querySelector(".hero-general__items").style.right = "0";
    // })
    return (
        <section id="hero">
            <div className="container">
                <div className="hero-general">
                    <h1 className="hero-general__title ">“ZERO WASTE” всегда заботится <br/>о
                        комфорте своих
                        клиентов</h1>
                    <p className="hero-general__item">ВСЕГДА В НОГУ СО ВРЕМЕНЕМ</p>
                </div>
                <div className=" hero-general__titles">
                    <div className="hero-general__items2" >
                        <h1 className="hero-general__items">Улучшенная
                            <br/>защита</h1>
                    </div>
                    <div className="hero-general__items2" >
                        <h1 className="hero-general__items"> Обновленный
                            <br/>корпус</h1>
                        <div className="hero-general__block"/>

                    </div>
                    <div className="hero-general__items2" >
                        <h1 className="hero-general__items"> Абсолютная
                            <br/>герметичность</h1>
                        <div className="hero-general__block"/>

                    </div>
                </div>
            </div>
        </section>
    )

}