import React, {useState} from 'react'
import Point from './point.js'

const Wave = () => {
    const centerX = 0;
    const centerY = 0;
    const [point, setPoint] = useState(new Point(
        centerX,
        centerY,
    )
    );

    const resize = (stageWidth, stageHeight) => {
        centerX = stageWidth /2;
        centerY = stageHeight /2;
    };

    const init = () => {
        const point = point;
    };

    const draw = (ctx) => {
        ctx.beginPath();
        ctx.fillStyle = '#FF0000';

        point.update();

        ctx.arc(point.x, point.y, 30, 0, 2 * Math.PI );
        ctx.fill();
    }
    
};

export default Wave;