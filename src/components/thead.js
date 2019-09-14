import React from "react";

export const Thead = ({name}) => {
    return (
        <thead className='thead-dark' >
            <tr>
                <th className='text-center' scope='col' colSpan= '2'>{name}</th>
            </tr>
        </thead> 
    );
} 