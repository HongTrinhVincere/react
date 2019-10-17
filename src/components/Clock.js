import React, {Component} from 'react';
import * as LibComponent from "../components";
class Clock extends Component {
    constructor(props) {
        super();
        this.refsCanvas = React.createRef();
        this.state = {
            date : new Date()
        }
    }
    drawFace(ctx, radius) {
        var grad;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, 2*Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
        grad.addColorStop(0, '#333');
        grad.addColorStop(0.5, 'white');
        grad.addColorStop(1, '#333');
        ctx.strokeStyle = grad;
        ctx.lineWidth = radius*0.1;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
        ctx.fillStyle = '#333';
        ctx.fill();
    }
    drawNumbers(ctx, radius) {
        var ang;
        var num;
        ctx.font = radius*0.15 + "px arial";
        ctx.textBaseline="middle";
        ctx.textAlign="center";
        for(num = 1; num < 13; num++){
          ang = num * Math.PI / 6;
          ctx.rotate(ang);
          ctx.translate(0, -radius*0.85);
          ctx.rotate(-ang);
          ctx.fillText(num.toString(), 0, 0);
          ctx.rotate(ang);
          ctx.translate(0, radius*0.85);
          ctx.rotate(-ang);
        }
    }
    drawHand(ctx, pos, length, width) {
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.moveTo(0,0);
        ctx.rotate(pos);
        ctx.lineTo(0, -length);
        ctx.stroke();
        ctx.rotate(-pos);
    }
    drawTime(ctx, radius){
        var now = new Date();
        var hour = now.getHours();
        var minute = now.getMinutes();
        var second = now.getSeconds();
        //hour
        hour=hour%12;
        hour=(hour*Math.PI/6)+
        (minute*Math.PI/(6*60))+
        (second*Math.PI/(360*60));
        this.drawHand(ctx, hour, radius*0.5, radius*0.07);
        //minute
        minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
        this.drawHand(ctx, minute, radius*0.8, radius*0.07);
        // second
        second=(second*Math.PI/30);
        this.drawHand(ctx, second, radius*0.9, radius*0.02);
    }
    drawClock() {
        this.drawFace(this.ctx, this.radius);
        this.drawNumbers(this.ctx, this.radius);
        this.drawTime(this.ctx, this.radius);
    }
    componentDidMount() {
        //const canvas = this.refs.canvas// document.getElementById("canvas");
        this.ctx = this.refsCanvas.current.getContext("2d");//this.refs.canvas.getContext("2d");
        let radius = this.refsCanvas.current.height / 2;
        this.ctx.translate(radius, radius);
        this.radius = radius * 0.90

        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick() {
        this.drawClock();
    }
    render() {
        return (
            <div>
                <canvas ref={this.refsCanvas} width={200} height={200}
                    style={{'background-color':'#333'}}>
                </canvas>  
            </div>
        );
    }
}

export {Clock};