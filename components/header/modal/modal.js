import React, {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import ModalClose from "./../../../assets/img/modalclose.svg";
import Image from "next/image"

export default function Modal() {
    const [showModal, setShowModal] = React.useState(false);
    const {control, handleSubmit} = useForm();

    const [closeModal, setCloseModal] = useState(false)


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
                            <input type="name" name="name" placeholder="Ваша имя"
                                   className="question-general__block__input"/>


                            {/*<input type="tel" name="tel" placeholder="+996 550 01 22 08" className="question-general__block__input"/>*/}
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

                                    rules={{required: true}}
                                />

                            </form>


                            <div>
                                <button className="question-general__block__btn">Оставить заявку</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}