import React from "react"
import Layout from "../components/layout"
import Canvas from "../components/canvas"
import "../components/style.css"

const Index = () => {


  const [width, setWidth] = React.useState(500);

  const handleWindowResize = () => {
    setWidth(document.body.clientWidth);
  }

  React.useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);



  const draw = (ctx, frameCount) => {

    let stageWidth = document.body.clientWidth;

    let stageHeight = ctx.canvas.height;
    let totalPoints = 7;
    //let amplitude = Math.sin(frameCount/speed)*100;
    let amplitude = width / 10;
    let pointGap = stageWidth / (totalPoints - 1);
    let speed = 20;
    //update position here
    ctx.clearRect(0, 0, stageWidth, stageHeight);
    ctx.beginPath();
    ctx.fillStyle = "#E65C4F";



    let prevX = 0;
    let prevY = stageHeight;

    ctx.moveTo(prevX, prevY);
    prevY = prevY / 2;
    ctx.lineTo(prevX, prevY);

    let cpx;
    let cpy;

    for (let i = 1; i < totalPoints - 1; i++) {

      cpx = (prevX + pointGap * (i)) / 2;
      cpy = (prevY + Math.sin(
        (frameCount / speed) + pointGap * (i)
      ) * amplitude + stageHeight / 2) / 2;

      ctx.quadraticCurveTo(prevX, prevY, cpx, cpy);

      prevX = pointGap * (i);
      prevY = Math.sin(
        (frameCount / speed) + pointGap * (i)
      ) * amplitude + stageHeight / 2;

    }
    ctx.quadraticCurveTo(prevX, prevY, stageWidth, stageHeight / 2);
    ctx.lineTo(stageWidth, stageHeight);
    ctx.fill();
    ctx.closePath();



    // new

    ctx.beginPath();
    amplitude = width / 29;
    ctx.fillStyle = "#78A6C9"; //lightblue
    prevY = stageHeight;
    prevX = 0;
    ctx.moveTo(0, prevY);
    prevY = prevY / 2;
    ctx.lineTo(prevX, prevY);
    for (let i = 1; i < totalPoints - 1; i++) {
      cpx = (prevX + pointGap * (i)) / 2;
      cpy = (prevY + Math.sin(
        (frameCount / speed) + pointGap * (i)
      ) * amplitude + stageHeight / 2) / 2;
      ctx.quadraticCurveTo(prevX, prevY, cpx, cpy);
      prevX = pointGap * (i);
      prevY = Math.sin(
        (frameCount / speed) + pointGap * (i)
      ) * amplitude + stageHeight / 2;
    }
    ctx.quadraticCurveTo(prevX, prevY, stageWidth, stageHeight / 2);
    ctx.lineTo(stageWidth, stageHeight);
    ctx.fill();
    ctx.closePath();

    // new

    ctx.beginPath();
    amplitude = width / 20;
    ctx.fillStyle = "#33678A"; //deepblue
    prevY = stageHeight;
    prevX = 0;
    ctx.moveTo(0, prevY);
    prevY = prevY / 2;
    ctx.lineTo(prevX, prevY);
    for (let i = 1; i < totalPoints - 1; i++) {
      cpx = (prevX + pointGap * (i)) / 2;
      cpy = (prevY + Math.sin(
        (frameCount / speed) + pointGap * (i)
      ) * amplitude + stageHeight / 2) / 2;
      ctx.quadraticCurveTo(prevX, prevY, cpx, cpy);
      prevX = pointGap * (i);
      prevY = Math.sin(
        (frameCount / speed) + pointGap * (i)
      ) * amplitude + stageHeight / 2;
    }
    ctx.quadraticCurveTo(prevX, prevY, stageWidth, stageHeight / 2);
    ctx.lineTo(stageWidth, stageHeight);
    ctx.fill();
    ctx.closePath();

    // new

    ctx.beginPath();
    amplitude = width / 15;
    ctx.fillStyle = "rgba(255, 255, 255, 1)";
    prevY = stageHeight;
    prevX = 0;
    ctx.moveTo(0, prevY);
    prevY = prevY / 2;
    ctx.lineTo(prevX, prevY);
    for (let i = 1; i < totalPoints - 1; i++) {
      cpx = (prevX + pointGap * (i)) / 2;
      cpy = (prevY + Math.sin(
        (frameCount / speed) + pointGap * (i)
      ) * amplitude + stageHeight / 2) / 2;
      ctx.quadraticCurveTo(prevX, prevY, cpx, cpy);
      prevX = pointGap * (i);
      prevY = Math.sin(
        (frameCount / speed) + pointGap * (i)
      ) * amplitude + stageHeight / 2;
    }
    ctx.quadraticCurveTo(prevX, prevY, stageWidth, stageHeight / 2);
    ctx.lineTo(stageWidth, stageHeight);
    ctx.fill();
    ctx.closePath();
  };

  return (

    <React.StrictMode>
      <Layout>
        <div className="title">
          <h1>_ Right Here</h1>

          <iframe
            title="GitHub link"
            src="https://ghbtns.com/github-btn.html?user=dominic-righthere&repo=dominic-righthere.github.io&type=star&count=true"
            frameBorder="0"
            scrolling="0"
            width="160px"
            height="30px"
          />

          <h2>Hi, <br></br>I live and work in Tokyo building _ things.</h2>
        </div>
        <body>
          <Canvas draw={draw} height={width / 3} width={width} />
        </body>

      </Layout>
    </React.StrictMode>

  )
}
export default Index