import React, { Component } from "react"

export default class SellOrdersTable extends Component {
    render(): JSX.Element {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Цена</th>
                        <th>Кол-во</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>test@mail.ru</td>
                    </tr>
                </tbody>
            </table>
        )
    }
};
