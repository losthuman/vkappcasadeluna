import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, HeaderButton, Input,FormLayout, Slider, Button, platform, IOS } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import './metronome.css';

import ProMetronome from "../model/pro-metronome";
import Icon48Play from '@vkontakte/icons/dist/48/play';
import Icon48Pause from '@vkontakte/icons/dist/48/pause';


class Metronome extends React.Component{

    state ={
        bpm: 120,
        isPlaying: false,
        subdivision: 1,
        note: 0
    };

    metronomeStyle = (props, state) => (

        <div className='wrapper'>


            <Slider className='slider'
                    max={300}
                    min={0}
                    step={1}
                    defaultValue={this.state.bpm}
                    value={this.state.bpm}
                    onChange={(bpm) => this.setState({bpm})}

            />

            <FormLayout >
                <Input  top='Ударов в минуту :'
                        type='number'
                        alignment='center'
                        status='default'
                        value={this.state.bpm}
                        onFocus={()=>(this.setState({isPlaying: false}))}
                        onChange={(e)=>(this.setState({bpm: Number(e.target.value)}))}

                />
            </FormLayout>
            <Button className='start-btn'
                    before={this.state.isPlaying ?  <Icon48Pause style={{paddingLeft: '5px' }} /> : <Icon48Play style={{paddingLeft: '5px' }} />}
                    level='secondary'
                    onClick={()=>(this.setState({isPlaying: !this.state.isPlaying}))}>
            </Button>
            <div style={{height: '300px',
                        width: '300px',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'center',
                        // border: 'solid 1px tomato',
                        margin: 'auto',
                        padding: '0'
                    }}>

                {/*<Dot note={state.qNote/state.subNote} />*/}

                {/*<Circle note={state.qNote/state.subNote} theme={[1,2,2,1,2,2,1,2,1,2,1,2]}/>*/}
            </div>



        </div>
    );

    os = platform();

    render() {
        return (
        <Panel id={this.props.id}>
            <PanelHeader
                left={<HeaderButton onClick={this.props.go} data-to="home">
                    {this.os === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </HeaderButton>}
            >Метроном</PanelHeader>

            <ProMetronome
                bpm={this.state.bpm/this.state.subdivision}
                subdivision={this.state.subdivision}
                soundEnabled={this.state.isPlaying}
                soundPattern='1111'
                render={this.metronomeStyle}
                isPlaying={this.state.isPlaying}
            />

        </Panel>
        );
    }
}

Metronome.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    bpm: PropTypes.number,
    subdivision: PropTypes.number,
};

export default Metronome;

