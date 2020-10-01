import React from "react"
import SellPage from "./SellPage"

export default class App extends React.Component {
    render(): JSX.Element {
        return (
            <>
                {/* <h2>Биржа пряников 2.0</h2> */}
                <SellPage></SellPage>
            </>
        )
    }
}