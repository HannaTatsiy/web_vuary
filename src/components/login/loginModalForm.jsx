import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {Form, FormControl, FormLabel, Modal} from "react-bootstrap";
import useAuthContext from "../../context/authContext.jsx";
import api from "../../api/axios.js";
import {useNavigate} from "react-router-dom";

export default function LoginModalForm(props) {

    const {getUser, setToken} = useAuthContext()
    const navigate = useNavigate();

    // методы для управления формой
    const {
        handleSubmit
        , register
        , reset
        , formState: {errors}
    } = useForm();

    useEffect(() => {
        reset({
            email: '',
            password: ''
        })

    }, [props.show, reset]);

    // отправка данных на сервер
    async function submit(data) {

        let json = JSON.stringify(
            {
                "password": data.password,
                "usernameOrEmail": data.email
            })

        await api.post("login", json)
            .then(async (response) => {

                //если не пришли ошибки с сервера
                if (response.data.status === "success") {
                    await setToken(response.data.accessToken);
                    await getUser(response.data.accessToken);
                    navigate('/');

                    reset();
                    props.onHide();
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <>
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className={"border-white"}></Modal.Header>

                <div className={"fs-5 text-center"}>
                    Вход в аккаунт
                </div>

                <Modal.Body>
                    <Form onSubmit={handleSubmit(submit)}>

                        <Form.Group controlId={"email"} className="mb-3">
                            <FormLabel className="font-size-10pt fw-bolder ms-1">
                                Электронная почта или номер телефона:</FormLabel>
                            <FormControl
                                type="text"
                                placeholder={"Введите логин"}
                                aria-describedby="inputGroupPrepend"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Поле обязательно к заполнению!"
                                    },

                                    validate: value => {
                                        let result;

                                        // проверяем на почту
                                        if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i).test(value)) {
                                            // если не почта
                                            // если нет префикса +7 или 8, то добавляем его
                                            if (!(value.startsWith("+7") || value.startsWith("7") || value.startsWith("8"))) {
                                                value = `+7${value}`
                                            }

                                            // проверка номер
                                            if (!(/^\+?[78][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/).test(value)) {
                                                result = "Некорректный логин";
                                            }
                                        }
                                        return result;
                                    }
                                })}
                                isInvalid={!!errors.email}>
                            </FormControl>
                            <Form.Control.Feedback type="invalid">
                                {errors?.email?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId={"password"} className="mb-4">
                            <FormLabel className="font-size-10pt fw-bolder ms-1">Пароль:</FormLabel>
                            <FormControl
                                type="password"
                                placeholder={"Введите пароль"}
                                aria-describedby="inputGroupPrepend"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Поле обязательно к заполнению!"
                                    },

                                    maxLength: {
                                        value: 20,
                                        message: "Пароль не может быть длиннее 20 символов!"
                                    },

                                    minLength: {
                                        value: 8,
                                        message: "Пароль не может быть короче 8 символов!"
                                    },

                                    pattern: {
                                        value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=\S+$).{8,20}$/,
                                        message: "Должен содержать цифры, латиница верхнего и нижнего регистра, символы !@#$%^&*!"
                                    }

                                })}
                                isInvalid={!!errors.password}>
                            </FormControl>
                            <Form.Control.Feedback type="invalid">
                                {errors?.password?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <div className="d-grid mb-2">
                            <button className="btn btn-primary" type="submit">Войти</button>
                        </div>

                        <p className="card-text font-size-10pt text-center mt-2 mb-2">
                            <a><small className="text-orange">Забыли пароль?</small></a>
                        </p>

                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}