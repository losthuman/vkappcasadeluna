import React from 'react';
import './dot.sass';


export default class Dot extends React.Component {

    constructor(props){
        super(props);

        this.state={
            isNote: false
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.note !== this.props.note) {
            this.setState({isNote: !prevState.isNote});
        }
    }

    render() {

        const { deg, num } = this.props;

        return (
        <div className='wrapper' style={{transform: `rotate(${deg}deg`,
                                        margin: 'auto'}}>

            <div className='dot'
                 style ={this.state.isNote ?
                        {transform: `rotate(-${deg}deg) scale(0.0)`, opacity: '0.0'} :
                        {transform: `rotate(-${deg}deg) scale(1.0)`, opacity: '1.0'}}>
                <p>{num}</p>

            </div>
            <div className='dot'

                 style = {!this.state.isNote  ?
                         {transform: `rotate(-${deg}deg) scale(0.0)`, opacity: '0.0'} :
                         {transform: `rotate(-${deg}deg) scale(1.0)`, opacity: '1.0'}}>
                <p>{num}</p>

            </div>
        </div>
        );
    }
}

