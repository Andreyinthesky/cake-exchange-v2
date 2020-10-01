import React, { FC } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

import "./Table.style.scss"


interface ITableProps {
}

type Table = FC<ITableProps> & {
    Head: typeof TableHead,
    Body: typeof TableBody
}


const Table: Table = function (props) {
    return (
        <table className="table">
            {props.children}
        </table>
    )
}


Table.Head = TableHead
Table.Body = TableBody

export default Table