import React, { Component } from "react"

let mountCount = 0;

export default class OrderForm extends Component {
    id: number;
    constructor(props: object) {
        super(props);

        this.id = ++mountCount
    }

    render(): JSX.Element {
        const { id } = this;

        return (
            <div className="order-form">
                <h3 className="order-form__header">Купить</h3>
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
