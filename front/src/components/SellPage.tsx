import React, { Component } from "react"
import CompleteTransactionsTable from "./CompleteTransactionsTable"
import SellSection from './SellSection';
import BuySection from './BuySection';


export default class SellPage extends Component {
    render(): JSX.Element {
        return (
            <div className="page">
                <BuySection />
                <SellSection />
                <section className="section">
                    <CompleteTransactionsTable></CompleteTransactionsTable>
                </section>
            </div>
        )
    }
};
