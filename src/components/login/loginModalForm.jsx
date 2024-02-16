import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {Form, FormControl, FormLabel, Modal} from "react-bootstrap";

export default function LoginModalForm(props) {

    // TODO инициализация null, ждем Сашу...
    const [valueLogin, setValueLogin] = useState(true);

    // методы для управления формой
    const {handleSubmit
        , register
        , reset
        , formState: {errors}} = useForm();

    useEffect(() => {

        reset({
            login: '',
            password: ''
        })

        // TODO инициализация null, ждем Сашу...
        setValueLogin(true);

    }, [props.show, reset]);

    // отправка данных на сервер
    function submit(data) {

        // TODO проверить корректность логина на стороне сервера, ждем Сашу...
        // TODO нужно отправить запрос /login на сервер, ждем Сашу...
        reset();
        props.onHide();
    }

    // TODO тут будет метод для проверки существующего логина, ждем Сашу...

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

                        <Form.Group controlId={"login"}  className="mb-3">
                            <FormLabel className="font-size-10pt fw-bolder ms-1">
                                Электронная почта или номер телефона:</FormLabel>
                                <FormControl
                                    type="text"
                                    placeholder={"Введите логин"}
                                    aria-describedby="inputGroupPrepend"
                                    {...register("login", {
                                        required: {
                                            value: true,
                                            message: "Поле обязательно к заполнению!"
                                        },

                                        validate: value => {
                                            let result;

                                            // проверяем на почту
                                            if(!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i).test(value)){
                                              // если не почта
                                                // если нет префикса +7 или 8, то добавляем его
                                                if(!(value.startsWith("+7") || value.startsWith("7") || value.startsWith("8"))){
                                                    value = `+7${value}`
                                                }

                                                // проверка номер
                                                if(!(/^\+?[78][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/).test(value)){
                                                    result = "Некорректный логин";
                                                } else {
                                                    // если ввод верный, то проверяем на существование логина
                                                    // TODO проверить корректность логина на стороне сервера, ждем Сашу...
                                                    result = valueLogin || 'Не найден аккаунт с данным логином!'
                                                }
                                            } else {
                                                // если ввод верный, то проверяем на существование логина
                                                // TODO проверить корректность логина на стороне сервера, ждем Сашу...
                                                result = valueLogin || 'Не найден аккаунт с данным логином!'
                                            }
                                            return result;
                                        }
                                    })}
                                    isInvalid={!!errors.login}>
                                </FormControl>
                                <Form.Control.Feedback type="invalid">
                                    {errors?.login?.message}
                                </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId={"password"}  className="mb-4">
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

                                        minLength:{
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