import React from "react";

import { Th, Td } from './thtd'

export const Trow = ({rows}) => {
    return (
            rows.map((row, i)=>
                <tr key={i}>
                    <Th time={row[0]}/>
                    <Td group={row[1]} color={row[2]}/>
                </tr>
            )
        
    );
}
