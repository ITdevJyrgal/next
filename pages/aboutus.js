import HomeLayout from "../components/HomeLayout";
import Header from "./../components/header/header"
export default function AboutUs() {

    return (
     <div>
         <Header/>
                <div className="aboutus">
                    <div className="pt-10">
                    <div className="container2">
                        <div className="aboutus-general">
                            <div className="aboutus-general__block">
                                <h1 className="aboutus-general__block__title">О НАС</h1>
                                <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
                                    <div>
                                        <p className="aboutus-general__block__item">Компания Zero Waste : занимается
                                            изготовлением изделий из полипропилена. Также наши высококвалифицированные
                                            специалисты осуществят проведение монтажных работ любого уровня сложности. А
                                            наш
                                            заказчик будет всегда уверен в высоком качестве изделий. Полипропиленовые
                                            изделия компании - это гармоничное сочетание их доступной стоимости и
                                            высшего
                                            качества!</p>
                                    </div>
                                    <div>
                                        <p className="aboutus-general__block__item">Мы изготовим изделия из
                                            полипропилена
                                            любой сложности:
                                            <br/>• Разных конфигурацийпо Ваш чертеж
                                            <br/>• Разнообразных форм• Любых
                                            назначений
                                            <br/>• По Вашим чертежам и без них
                                            <br/>• Отвечающие всем вашим потребностям и
                                            нуждам</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</div>
    )
}