import React, { Component } from "react"
import "./OrderForm.style.scss"

let mountCount = 0;

interface IOrderFormProps {
    title?: string
}

export default class OrderForm extends Component<IOrderFormProps, {}> {
    id: number;

    public static defaultProps = {
        title: "Форма"
    }

    constructor(props: IOrderFormProps) {
        super(props);

        this.id = ++mountCount
    }

    render(): JSX.Element {
        const { id, props } = this;
        const { title } = props;

        return (
            <div className="order-form">
                <h3 className="order-form__header">{title}</h3>
                <div className="order-form__body">
                    <div className="order-form__field">
                        <label className="order-form__label" htmlFor={`price${id}`}>Цена за шт.</label>
                        <input className="order-form__input" id={`price${id}`}></input>
                    </div>
                    <div className="order-form__field">
                        <label className="order-form__label" htmlFor={`count${id}`}>Кол-во</label>
                        <input className="order-form__input" id={`count${id}`}></input>
                    </div>
                    <div className="order-form__field">
                        <label className="order-form__label" htmlFor={`email${id}`}>Email</label>
                        <input className="order-form__input" id={`email${id}`}></input>
                    </div>

                    <button className="button order-form__button">Ок</button>
                </div>
            </div>
        );
    }
};
