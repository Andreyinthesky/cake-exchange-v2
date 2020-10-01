import React, { FC } from "react";

const TableHead: FC = (props) => {
    return (
        <thead>
            {props.children}
        </thead>
    )
}

export default TableHead;