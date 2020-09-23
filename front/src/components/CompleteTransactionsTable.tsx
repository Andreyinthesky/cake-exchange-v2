import React, { Component } from "react"

export default class CompleteTransactionsTable extends Component {
    render(): JSX.Element {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Выполнено</th>
                        <th>Дата Покупки</th>
                        <th>Дата Продажи</th>
                        <th>Цена</th>
                        <th>Кол-во</th>
                        <th>Email Покупателя</th>
                        <th>Email Продавца</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{new Date(20, 1, 7, 12, 45).toDateString()}</td>
                        <td>{new Date(20, 1, 2, 10).toDateString()}</td>
                        <td>{new Date(20, 1, 7, 12, 45).toDateString()}</td>
                        <td>20</td>
                        <td>7</td>
                        <td>buyer@mail.ru</td>
                        <td>seller@mail.ru</td>
                    </tr>
                </tbody>
            </table>
        )
    }
};
