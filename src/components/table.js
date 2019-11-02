import  React from "react";
import { Div } from "@vkontakte/vkui";
import {Thead} from "./thead.js";
import { Trow } from "./trow.js";


import schedule from "./schedule.json";

import './table.sass';
import '@vkontakte/vkui/dist/vkui.css';


export const Table = () => {    
        return (
            <Div>
                <table className='m-auto table w-auto table-bordered tbl'>
                    {
                        schedule["week"].map(day =>
                            <React.Fragment key={day.id}>
                                <Thead name={day["name"]} />
                                <tbody >
                                    <Trow rows={day["schedule"]}/>
                                </tbody>
                            </React.Fragment>)
                    } 
                </table>
            </Div>
        );
}