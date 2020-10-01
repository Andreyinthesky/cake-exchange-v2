import React, { Component } from "react"
import SellForm from "./SellForm"
import BuyOrdersTable from "./BuyOrdersTable"


export default class SellSection extends Component {
    render(): JSX.Element {
        return (
            <section className="section section--orders">
                <SellForm></SellForm>
                <BuyOrdersTable></BuyOrdersTable>
            </section>
        )
    }
};
