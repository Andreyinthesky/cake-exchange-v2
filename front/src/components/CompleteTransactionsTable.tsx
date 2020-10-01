import React, { Component } from "react"
import Table from "./base/Table"

export default class CompleteTransactionsTable extends Component {
    render(): JSX.Element {
        return (
            <>
                <h3>Завершенные сделки</h3>
                <Table>
                    <Table.Head>
                        <tr>
                            <th>Выполнено</th>
                            <th>Дата Покупки</th>
                            <th>Дата Продажи</th>
                            <th>Цена</th>
                            <th>Кол-во</th>
                            <th>Email Покупателя</th>
                            <th>Email Продавца</th>
                        </tr>
                    </Table.Head>
                    <Table.Body>
                        <tr>
                            <td>{new Date(2020, 1, 7, 12, 45).toLocaleString("ru-RU")}</td>
                            <td>{new Date(2020, 1, 2, 10).toLocaleString("ru-RU")}</td>
                            <td>{new Date(2020, 1, 7, 12, 45).toLocaleString("ru-RU")}</td>
                            <td>20</td>
                            <td>7</td>
                            <td>buyer@mail.ru</td>
                            <td>seller@mail.ru</td>
                        </tr>
                    </Table.Body>
                </Table>
            </>
        )
    }
};
