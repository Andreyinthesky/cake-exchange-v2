import React, { FC } from "react";

interface ITableBodyProps {
}

const TableBody: FC<ITableBodyProps> = (props) => {
    return (
        <tbody>
            {props.children}
        </tbody>
    )
}

export default TableBody;