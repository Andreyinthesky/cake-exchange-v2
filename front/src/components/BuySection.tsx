import React, { Component } from "react"
import BuyForm from "./BuyForm"
import SellOrdersTable from "./SellOrdersTable"


export default class BuySection extends Component {
    render(): JSX.Element {
        return (
            <section className="section section--orders">
                <BuyForm></BuyForm>
                <SellOrdersTable></SellOrdersTable>
            </section>
        )
    }
};
