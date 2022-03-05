import React from "react";
import {useForm} from "react-hook-form";

import ModalClose from "./../../../assets/img/modalclose.svg";
import Image from "next/image"
import {useState} from 'react'

import axios from "axios";

export default function Modal() {
    const [showModal, setShowModal] = useState(false);
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

    const submit = () => {
        axios.post("https://zero-back-01.herokuapp.com/api/pushTelagram", value)
            .then(() => alert("Успешно отправлено!"))
    }

    return (
        <>
            <button
                className="header-general__btn"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Свяжитесь с нами
            </button>
            {showModal && (
                <div className="modal-general">
                    <div className="modal-general__center">
                        <div className="question-general__block">
                            <div className="flex justify-content-between items-center">
                                <h1 className="question-general__block__title"> У Вас есть
                                     вопрос или
                                    предложение?</h1>
                                <div className="modal-general__close" onClick={() => setShowModal(false)}>
                                    <Image src={ModalClose} alt="img"/>
                                </div>

                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className={errors.name ? "question-general__block__input__error" : "question-general__block__input"} type="text"
                                       placeholder="Имя " {...register("name", {required: true, maxLength: 80})} />
                                <input className={errors.phone ? "question-general__block__input__error" : "question-general__block__input"} type="number"
                                       placeholder="Номер  +996 ..." {...register("phone", {required: true, maxLength: 100})} />

                                <input disabled={!vdata} type="submit" className={"question-general__block__btn"}/>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}