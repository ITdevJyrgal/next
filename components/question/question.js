import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import {useForm, Controller} from "react-hook-form";
import {useState} from "react";
import axios from "axios";
import {data} from "autoprefixer";


export default function Question() {
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
    const [vdata , setVdata] = useState([])


    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => {
        axios.post("https://zero-back-01.herokuapp.com/api/pushTelagram", data)
            .then(() => alert("Успешно отправлено!"))
        setVdata(data)
        console.log(data)
    };
    console.log(errors);
    // const onSubmit = data => {
    //     axios.post("https://zero-back-01.herokuapp.com/api/pushTelagram", data)
    //         .then(() => alert("Успешно отправлено!"))
    //     console.log(data)
    // };

    // const submit = () => {
    //
    // }
    return (
        <div className="question">
            <div className="container">
                <div className="question-general">
                    <div className="question-general__block">
                        <h1 className="question-general__block__title"> У Вас есть
                            вопрос или
                            предложение?</h1>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className={errors.name ? "question-general__block__input__error" : "question-general__block__input"} type="text"
                                   placeholder="Имя " {...register("name", {required: true, maxLength: 80})} />
                            <input className={errors.phone ? "question-general__block__input__error" : "question-general__block__input"} type="number"
                                   placeholder="Номер  +996 ..." {...register("phone", {required: true, maxLength: 100})} />

                            <input disabled={!vdata} type="submit" className={"question-general__block__btn"}/>
                        </form>

                        {/*<input type="name" name="name" placeholder="Ваша имя"*/}
                        {/*       onChange={(e) => valueHandler(e)}*/}
                        {/*       className=""/>*/}

                        {/*/!*<input type="text" name="tel"*!/*/}
                        {/*/!*placeholder="+996 550 01 22 08"*!/*/}
                        {/*/!*onChange={(e) => handleSubmit(e)}*!/*/}
                        {/*/!*className="question-general__block__input"/>*!/*/}

                        {/*<form onSubmit={handleSubmit} className="question-general__block__input2">*/}
                        {/*    <Controller*/}
                        {/*        render={() => (*/}
                        {/*            <PhoneInput*/}
                        {/*                country={"kg"}*/}
                        {/*            />*/}
                        {/*        )}*/}
                        {/*        value="KG"*/}
                        {/*        name="phone_number"*/}
                        {/*        control={control}*/}
                        {/*        onChange={(e) => valueHandler(e)}*/}
                        {/*        rules={{required: true}}*/}
                        {/*    />*/}


                        {/*</form>*/}


                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}