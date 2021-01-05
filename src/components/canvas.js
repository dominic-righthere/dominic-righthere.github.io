import React from "react";
import PropTypes from "prop-types";

const Canvas = ({ draw, height, width }) => {
  const canvas = React.useRef();

  React.useEffect(
    () => {
      let frameCount = 0;
      let animationFrameId;

      const context = canvas.current.getContext("2d");

      const render = () => {
        frameCount++;
        draw(context, frameCount);
        animationFrameId = window.requestAnimationFrame(render);
      };
      render();

      return () => {
        window.cancelAnimationFrame(animationFrameId);
      };
    }
  );

  return <canvas className="canvas" ref={canvas} height={height} width={width} />;
}

Canvas.propTypes = {
  draw: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
}

export default Canvas;
