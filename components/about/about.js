import Image from "next/image";
import mate from "./../../public/img/mate.png"
export default function About () {
    return (
            <div className="about">
                <div style={{display:"flex", alignItems:"center"}}>
                    <div className="about-general__width"/>
                    <h1 className="about-general__title">НАША ПРОКДУКЦИЯ</h1>
                    <div className="about-general__width"/>
                </div>
                <div className="container">
                    <div className="about-general">

                            <div style={{display:"flex"}}>
                                <div>
                                    <h1 className="about-general__item"> ПОЛИПРОПИЛЕН - пластический материал,
                                        отличающийся высокой прочностью при ударе
                                        и многократном изгибе, износостойкостью , хорошими теплоизоляционными свойствами
                                        в широком диапазоне температур, высокой химической стойкостью, низкой паро - и
                                        газопроницаемостью. Стоек к кислотам, щелочам, растворам солей, минеральным и
                                        растительным маслам при высоких температурах.
                                    </h1>
                                    <h1 className="about-general__but">РЕИМУЩЕСТВА ИЗДЕЛИЙ ИЗ ПОЛИПРОПИЛЕНА:
                                        <span className="about-general__ser">
                                        <br/> 1. для изделий характерен длительный срок эксплуатации;
                                        <br/> 2. возможность сборки любых размеров внутри помещения;
                                        <br/> 3. легкость и простота монтажа;
                                        <br/> 4. идеальная герметичность готовых изделий;
                                        <br/> 5. высочайшая надежность;
                                        <br/> 6. возможность изготовления любой конфигурации и цветовой гаммы;
                                        <br/> 7. материалы пригодны для контакта с пищевыми продуктами.
                                        <br/> 8. Экологическая чистота.
                                    </span>
                                    </h1>
                                </div>
                                <div>
                                    <Image src={mate} alt="img" className="about-general__img"/>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
    )
}