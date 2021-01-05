import React, { useState } from 'react'


const Point = (pointX, pointY) => {
    const x = pointX;
    const [y, setY] = useState(pointY);
    const fixedY = pointY;
    const speed = 0.1;
    const [cur, setCur] = useState(0);
    const max = Math.random() * 100 + 150;

    const update = () => {
        setCur(cur + speed);
        setY(fixedY + (Math.sin(cur) * max));
    }
    update();
};
export default Point;