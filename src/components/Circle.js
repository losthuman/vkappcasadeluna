import React from 'react'

import Dot from "./Dot"
import './circle.sass'

const Circle = ({ theme, note }) => (
    theme.map((item, i) => (
        <Dot note={note} num={String(i+1)} deg={30*i + 120}/>
    ))

);

export default Circle