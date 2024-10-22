import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Animation.css';

const Animation = () => {
    const ballSize = 150;
    const fieldWidth = 900;
    const fieldHeight = 500;

    const xMax = fieldWidth - ballSize - 2;
    const yMax = fieldHeight - ballSize - 2;

    let xVelocity = 6;
    let yVelocity = 6;

    const [goRight, setGoRight] = useState(true);
    const [goDown, setGoDown] = useState(true);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [running, setRunning] = useState(false);
    const [angle, setAngle] = useState(0);
    const [backgroundImage, setBackgroundImage] = useState("");

    const runClick = () => {
        setRunning(!running);
    };

    const calculate = () => {
        let newX = x;
        let newY = y;
        let newAngle = angle;

        if (goRight) {
            newX += xVelocity;
            if (newX >= xMax) setGoRight(false);

            newAngle += Math.round(Math.random() * 5) - 6;
        } else {
            newX -= xVelocity;
            if (newX <= 0) setGoRight(true);

            newAngle -= Math.round(Math.random() * 5) + 6;
        }

        if (goDown) {
            newY += yVelocity;
            if (newY >= yMax) setGoDown(false);

            newAngle -= Math.round(Math.random() * 5) + 6;
        } else {
            newY -= yVelocity;
            if (newY <= 0) setGoDown(true);

            newAngle += Math.round(Math.random() * 5) - 6;
        }

        // Random velocity
        if (newX >= xMax || newX <= 0 || newY >= yMax || newY <= 0) {
            xVelocity = parseInt(Math.random() * 12) + 1;
            yVelocity = parseInt(Math.random() * 12) + 1;
        }

        setX(newX);
        setY(newY);
        setAngle(newAngle);
    };

    const renderBall = () => {
        return {
            left: `${x}px`,
            top: `${y}px`,
            transform: `rotate(${angle}deg)`,
            backgroundImage: `url(${backgroundImage})`,
        };
    };

    const renderButton = () => {
        return running
            ? '<span class="bi bi-pause">PAUSE</span>'
            : '<span class="bi bi-play">RUN</span>';
    };

    const process = () => {
        if (running) {
            calculate();
        }
    };

    const handleOptionClick = (image) => {
        setBackgroundImage(image);
    };

    useEffect(() => {
        const interval = setInterval(process, 40);
        return () => clearInterval(interval);
    });

    return (
        <div id="container">
            <div id="field">
                <div id="ball" style={renderBall()}></div>
            </div>

            <div id="control">
                <button
                    id="run"
                    className={`btn ${running ? 'btn-warning' : 'btn-success'}`}
                    onClick={runClick}
                    dangerouslySetInnerHTML={{ __html: renderButton() }}
                />

                <input
                    type="radio"
                    className="btn-check ba"
                    name="options"
                    id="option1"
                    onClick={() => handleOptionClick('')}
                />
                <label className="btn btn-dark" htmlFor="option1">
                    None
                </label>

                <input
                    type="radio"
                    className="btn-check ba"
                    name="options"
                    id="option2"
                    onClick={() => handleOptionClick('./basketball1.png')}
                />
                <label className="btn btn-primary" htmlFor="option2">
                    Basketball
                </label>

                <input
                    type="radio"
                    className="btn-check ba"
                    name="options"
                    id="option3"
                    onClick={() => handleOptionClick('./football.png')}
                />
                <label className="btn btn-primary" htmlFor="option3">
                    Football
                </label>

                <input
                    type="radio"
                    className="btn-check ba"
                    name="options"
                    id="option4"
                    onClick={() => handleOptionClick('./volleyball.png')}
                />
                <label className="btn btn-primary" htmlFor="option4">
                    Volleyball
                </label>

                <input
                    type="radio"
                    className="btn-check ba"
                    name="options"
                    id="option5"
                    onClick={() => handleOptionClick('./human.jpg')}
                />
                <label className="btn btn-primary" htmlFor="option5">
                    Human
                </label>

                <input
                    type="radio"
                    className="btn-check ba"
                    name="options"
                    id="option6"
                    onClick={() => handleOptionClick('./cartoon.png')}
                />
                <label className="btn btn-primary" htmlFor="option6">
                    Cartoon
                </label>

                <input
                    type="radio"
                    className="btn-check ba"
                    name="options"
                    id="option7"
                    onClick={() => handleOptionClick('./logo.png')}
                />
                <label className="btn btn-primary" htmlFor="option7">
                    Logo
                </label>
            </div>
        </div>
    );
};

export default Animation;
