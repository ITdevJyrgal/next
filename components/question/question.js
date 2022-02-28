export default function Question () {
    return (
        <div className="question">
            <div className="container">
                <div className="question-general">
                    <div className="question-general__block">
                        <h1 className="question-general__block__title"> У Вас есть
                            вопрос или
                            предложение?</h1>
                        <div>
                            <label>
                                <input type="name" name="name" placeholder="Ваша имя" className="question-general__block__input"/>
                            </label>
                            <label>
                                <input type="tel" name="tel" placeholder="+996 550 01 22 08" className="question-general__block__input"/>
                            </label>
                        </div>
                        <div>
                            <button className="question-general__block__btn">Оставить заявку</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}