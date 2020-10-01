import React, { Component } from "react"
import Table from "../base/Table"

interface IOrdersTableProps {
    title?: string,
}

export default class SellOrdersTable extends Component<IOrdersTableProps> {
    public static defaultProps = {
        title: "Таблица ордеров"
    }

    render(): JSX.Element {
        const { title } = this.props;

        return (
            <>
                <h3>{title}</h3>
                <Table>
                    <Table.Head>
                        <tr>
                            <th>Цена</th>
                            <th>Количество</th>
                            <th>Email</th>
                        </tr>
                    </Table.Head>
                    <Table.Body>
                        <tr>
                            <td>0</td>
                            <td>0</td>
                            <td>test@mail.ru</td>
                        </tr>
                    </Table.Body>
                </Table>
            </>
        )
    }
};
