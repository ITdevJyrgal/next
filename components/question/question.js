import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import {useForm, Controller} from "react-hook-form";
import {useState} from "react";
import axios from "axios";


export default function Question() {
    const {control, handleSubmit} = useForm();
    const [value, setValue] = useState({
        name: "",
        phone: ""
    })
    const valueHandler = (e) => {
        setValue(
            {...value, [e.target.name]: e.target.value},
            {...value, [e.target.phone]: e.target.value}
        )
    }

    const submit = () => {
        axios.post("https://zero-back-01.herokuapp.com/api/pushTelagram", value)
            .then(() => alert("Успешно отправлено!"))
    }
    return (
        <div className="question">
            <div className="container">
                <div className="question-general">
                    <div className="question-general__block">
                        <h1 className="question-general__block__title"> У Вас есть
                            вопрос или
                            предложение?</h1>


                        <input type="name" name="name" placeholder="Ваша имя"
                               onChange={(e) => valueHandler(e)}
                               className="question-general__block__input"/>

                        {/*<input type="text" name="tel"*/}
                        {/*placeholder="+996 550 01 22 08"*/}
                        {/*onChange={(e) => handleSubmit(e)}*/}
                        {/*className="question-general__block__input"/>*/}

                        <form onSubmit={handleSubmit} className="question-general__block__input2">
                            <Controller
                                render={() => (
                                    <PhoneInput
                                        country={"kg"}
                                    />
                                )}
                                value="KG"
                                name="phone_number"
                                control={control}
                                onChange={(e) => valueHandler(e)}
                                rules={{required: true}}
                            />


                        </form>


                        <div>
                            <button onClick={submit} className="question-general__block__btn">Оставить заявку</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}