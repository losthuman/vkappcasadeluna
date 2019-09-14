import React from "react";

export const Th = ({time}) => {
    return (
        <th scope='row'>{time}</th>
    )
}

export const Td = ({group, color}) => {
    return (
        <td className={color}>{group}</td>
    )
}