import {useForm} from "react-hook-form";
import {ButtonGroup, Form, FormControl, FormLabel, InputGroup} from "react-bootstrap";

export default function RegisterForm() {

    // методы для управления формой
    const {
        handleSubmit
        , register
        , formState: {errors}
    } = useForm();

    // отправка данных на сервер
    function submit(data) {
        // TODO нужно отправить запрос /register на сервер
    }

    return (
        <div className="card max-width-500px shadow">
            <div className="card-body">
                <h3 className="card-title fs-3">Присоединяйтесь к нам!</h3>
                <p className="card-text font-size-12pt pe-3">Обширная сеть сертифицированных сервисных
                    центров по всей территории РФ и стран СНГ.</p>

                <Form className="row g-3 needs-validation" onSubmit={handleSubmit(submit)}>

                    <Form.Group controlId={"name"} className="col-md-4 min-width-190px">
                        <FormLabel className="font-size-10pt fw-bolder ms-1">Имя:</FormLabel>
                        <FormControl
                            type="text"
                            placeholder={"Введите имя"}
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Поле обязательно к заполнению!"
                                },

                                maxLength: {
                                    value: 20,
                                    message: "Имя не может быть длиннее 20 символов!"
                                },

                                minLength: {
                                    value: 2,
                                    message: "Имя не может состоять из 1 символа!"
                                },

                                pattern: {
                                    value: /^[А-Я][а-я]+/g,
                                    message: "C заглавной буквы, кириллица!"
                                }
                            })}
                            isInvalid={!!errors.name}>
                        </FormControl>
                        <Form.Control.Feedback type="invalid">
                            {errors?.name?.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId={"surname"} className="col-md-4 min-width-190px">
                        <FormLabel className="font-size-10pt fw-bolder ms-1">Фамилия:</FormLabel>
                        <FormControl
                            type="text"
                            placeholder={"Введите фамилию"}
                            {...register("surname", {
                                required: {
                                    value: true,
                                    message: "Поле обязательно к заполнению!"
                                },

                                maxLength: {
                                    value: 20,
                                    message: "Фамилия не может быть длиннее 20 символов!"
                                },

                                minLength: {
                                    value: 2,
                                    message: "Фамилия не может состоять из 1 символа!"
                                },

                                pattern: {
                                    value: /^[А-Я][а-я]+/g,
                                    message: "C заглавной буквы, кириллица!"
                                }
                            })}
                            isInvalid={!!errors.surname}>
                        </FormControl>
                        <Form.Control.Feedback type="invalid">
                            {errors?.surname?.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId={"birth"} className="row-md-4 min-width-190px">
                        <FormLabel className="font-size-10pt fw-bolder ms-1">Дата рождения:</FormLabel>
                        <FormControl
                            type="date"
                            {...register("birth", {
                                required: {
                                    value: true,
                                    message: "Поле обязательно к заполнению!"
                                },

                                validate: {
                                    positive: (v) => new Date(v) < (new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate())) || 'Клиенту должно исполниться 18 лет!',
                                    lessThanTen: (v) => new Date(v) > (new Date(new Date().getFullYear() - 90, new Date().getMonth(), new Date().getDate())) || 'Клиент должен быть моложе 90 лет!',
                                }

                            })}
                            isInvalid={!!errors.birth}>
                        </FormControl>
                        <Form.Control.Feedback type="invalid">
                            {errors?.birth?.message}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId={"number"} className="row-md-4 min-width-190px">
                        <FormLabel className="font-size-10pt fw-bolder ms-1">Номер телефона:</FormLabel>
                        <InputGroup>
                            <InputGroup.Text id="inputGroupPrepend">+7</InputGroup.Text>
                            <FormControl
                                type="text"
                                aria-describedby="inputGroupPrepend"
                                placeholder={"Введите номер"}
                                {...register("number", {
                                    required: {
                                        value: true,
                                        message: "Поле обязательно к заполнению!"
                                    },

                                    pattern: {
                                        value: /^\+?[78][-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/,
                                        message: "Некорректный номер телефона!"
                                    },

                                })}
                                isInvalid={!!errors.number}>
                            </FormControl>
                            <Form.Control.Feedback type="invalid">
                                {errors?.number?.message}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group controlId={"email"} className="row-md-4 min-width-190px">
                        <FormLabel className="font-size-10pt fw-bolder ms-1">Электронная почта:</FormLabel>
                        <InputGroup>
                            <InputGroup.Text id="inputGroupPrepend01">@</InputGroup.Text>
                            <FormControl
                                type="text"
                                placeholder={"Введите эл. почту"}
                                aria-describedby="inputGroupPrepend01"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Поле обязательно к заполнению!"
                                    },

                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Некорректный email адрес!"
                                    }

                                })}
                                isInvalid={!!errors.email}>
                            </FormControl>
                            <Form.Control.Feedback type="invalid">
                                {errors?.email?.message}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group controlId={"password"} className="row-md-4 min-width-190px">
                        <FormLabel className="font-size-10pt fw-bolder ms-1">Пароль:</FormLabel>
                        <FormControl
                            type="password"
                            placeholder={"Придумайте пароль"}
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

                    <FormLabel className="font-size-10pt fw-bolder ms-1">Кто вы:</FormLabel>
                    <Form.Group controlId={"workerRole"} className={"mt-0 d-grid"} >
                        <ButtonGroup  id={"validationWhoIs"} role="group">
                        <FormControl type="radio" className="btn-check" name="btnradio" id="btnradio1"
                               autoComplete="off"/>
                        <label className="btn btn-outline-secondary" htmlFor="btnradio1">Покупатель</label>

                        <FormControl type="radio" className="btn-check" name="btnradio" id="btnradio2"
                               autoComplete="off"/>
                        <label className="btn btn-outline-success" htmlFor="btnradio2">Продавец</label>

                        <FormControl type="radio" className="btn-check" name="btnradio" id="btnradio3"
                               autoComplete="off"/>
                        <label className="btn btn-outline-dark" htmlFor="btnradio3">Монтажник</label>
                        </ButtonGroup>
                    </Form.Group>

                    <Form.Group controlId={"isConfirm"} className="col-12">
                        <Form.Check type={"checkbox"} className={"ms-1"}>
                            <Form.Check.Input
                                type={"checkbox"}
                                {...register("isConfirm", {
                                    required: {
                                        value: true,
                                        message: "Требуется подтверждение!"
                                    },
                                })}
                                isInvalid={!!errors.isConfirm}
                            />
                            <Form.Check.Label className={"font-size-10pt"}>Я согласен на обработку персональных
                                данных.</Form.Check.Label>
                            <Form.Control.Feedback type="invalid">
                                {errors?.isConfirm?.message}
                            </Form.Control.Feedback>
                        </Form.Check>
                    </Form.Group>

                    <div className="d-grid">
                        <button className="btn btn-primary" type="submit">Зарегистрироваться</button>
                    </div>

                </Form>

            </div>
        </div>)
}