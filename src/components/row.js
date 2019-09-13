import React from 'react';

class Row extends React.Component{

    render(){
        return (
            this.props.rows.map(row =>
                <tr>{row}</tr>
            )
        );
    }
}
export default Row;