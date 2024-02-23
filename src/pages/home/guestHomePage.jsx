import GuestFooter from "../../components/footers/guestFooter.jsx";
import RegisterForm from "../../components/register/registerForm.jsx";

export default function GuestHomePage() {

    return (
        <>
            <div className="container-fluid background-green">
                <div className="row p-5 pt-3">

                    <div className="col-lg-1"></div>

                    <div className="text-white ps-5 col-6">
                        <div>
                            <div>
                                <p className="fs-2 fw-light m-0 mt-lg-5">Kotitonttu</p>
                                <h1 className="display-4 fw-bold mb-5">Тепло и горячая вода - <br/><span
                                    className="brand">моя забота</span></h1>
                                <p className="fs-5 mb-5 me-5">
                                    Продажа сертифицированного газового оборудования – основная специализация нашего
                                    интернет-магазина. Мы доставим ваш заказ бесплатно в любой город РФ осуществим
                                    подробную
                                    консультацию по товарам и поможем с выбором.
                                </p>
                                <button type="button"
                                        className="btn border text-white px-4 rounded-4 me-3 mb-5">Связаться с
                                    нами
                                </button>
                                <button type="button"
                                        className="btn btn-primary text-white px-4 rounded-4 mb-5">Обратиться
                                    в
                                    сервис
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <RegisterForm/>
                    </div>
                </div>
            </div>
            <GuestFooter/>
        </>);
}