import React, { useState, useEffect } from 'react';
import './Home.sass';

// Импортируем изображения
import Mem1 from './assets/mem1.png';
import Mem2 from './assets/mem2.png';
import Mem3 from './assets/mem3.png';
import Mem4 from './assets/mem4.png';
import Mem5 from './assets/mem5.png';
import Mem6 from './assets/mem6.png';
import Mem7 from './assets/mem7.png';
import Mem8 from './assets/mem8.png';
import Mem9 from './assets/mem9.png';
import Mem10 from './assets/mem10.png';
import Mem11 from './assets/mem11.png';

import Mem12 from './assets/mem12.png';
import LetterO from './assets/letterO.png';



// Объединяем изображения в массив
const images = [Mem1, Mem2, Mem3, Mem4, Mem5, Mem6, Mem7, Mem8, Mem9, Mem10, Mem11, Mem12];

export default function Home() {
    const [positions, setPositions] = useState(Array(images.length).fill({ x: 0, y: 0 }));


    useEffect(() => {
        const updatePositions = () => {
            setPositions(prevPositions => prevPositions.map(pos => ({
                x: Math.random() * (window.innerWidth - 100),
                y: Math.random() * (window.innerHeight - 100)
            })));
        };

        const intervalId = setInterval(updatePositions, 1500); // Обновлять позиции каждую секунду

        return () => clearInterval(intervalId);
    }, []);



    return (
        <div className="Home">
            <div className="container">
                {images.map((image, index) => (
                    <img
                        className='memes'
                        key={index}
                        src={image}
                        alt={`Mem${index + 1}`}
                        style={{
                            position: 'absolute',
                            top: positions[index].y,
                            left: positions[index].x
                        }}
                    />
                ))}
     

                <div className="top">
                    <div className="left-block">
                        <h1>N <img src={LetterO} alt="" /></h1>
                    </div>
                    <div className="right-block">
                        <a href="#/">ICO</a>
                        <a href="#/">DISCORD</a>
                        <a href="#/">VCS</a>
                        <a href="#/">PRESALE</a>
                    </div>
                </div>
                <div className="center">
                    <h2>AB<span>S</span>OLUTELY NOTHING!!!</h2>
                    <a href="#/"><span>B</span>UY N<span>O</span>THING NOW</a>
                    <h3>AND BRAG LATE<span>R</span>!!!</h3>
                </div>
                <div className="bottom">
                    <a href="#/">TWITTER</a><a href="#/">DEX SCREENER</a>
                </div>
            </div>
        </div>
    );
}
