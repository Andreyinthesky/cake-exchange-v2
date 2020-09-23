import React, { Component } from "react"
import OrderForm from "../OrderForm"
import SellOrdersTable from "../SellOrdersTable"
import CompleteTransactionsTable from "../CompleteTransactionsTable"


export default class SellPage extends Component {
    render() : JSX.Element {
        return (
            <div className="page">
                <OrderForm></OrderForm>
                <SellOrdersTable></SellOrdersTable>
                <CompleteTransactionsTable></CompleteTransactionsTable>
            </div>
        )
    }
};
