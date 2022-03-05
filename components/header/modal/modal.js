import React from "react";
import {Controller, useForm} from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import ModalClose from "./../../../assets/img/modalclose.svg";
import Image from "next/image"
import {useState} from 'react'
// import axiosApi from "./../../../pages/api/axiosApi"
import axios from "axios";

export default function Modal() {
    const [showModal, setShowModal] = useState(false);
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
                            <input type="text" name="name"
                                   onChange={(e) => valueHandler(e)}
                                   placeholder="Ваша имя"
                                   className="question-general__block__input"/>
                            <form onSubmit={handleSubmit} className="question-general__block__input2">
                                <Controller
                                    render={() => (
                                        <PhoneInput
                                            country={"kg"}
                                        />
                                    )}
                                    name="text"
                                    control={control}
                                    onChange={(e) => valueHandler(e)}
                                    rules={{required: true}}
                                />
                            </form>
                            <div>
                                <button
                                    onClick={submit}
                                    className="question-general__block__btn"
                                >
                                    Оставить заявку
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}