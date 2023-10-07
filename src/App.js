import {useEffect, useState} from "react";
import './App.css';


function App() {
    const [activeKey, setActiveKey] = useState('');

    useEffect(() => {
        document.addEventListener('keydown', (event) => {
            let selector = event.key.toUpperCase();
            playSound(selector);
        })
    }, [])

    const arr = [
        {
            keyCode: 81,
            text: "Q",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
            soundName: 'Heater 1'
        },
        {
            keyCode: 87,
            text: "W",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
            soundName: 'Heater 2'
        },
        {
            keyCode: 69,
            text: "E",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
            soundName: 'Heater 3'
        },
        {
            keyCode: 65,
            text: "A",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
            soundName: 'Heater 4'
        },
        {
            keyCode: 83,
            text: "S",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
            soundName: 'Clap'
        },
        {
            keyCode: 68,
            text: "D",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
            soundName: 'Open-HH'
        },
        {
            keyCode: 90,
            text: "Z",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
            soundName: 'Kick-n\'-Hat'
        },
        {
            keyCode: 88,
            text: "X",
            src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
            soundName: 'Kick'
        },
        {
            keyCode: 67,
            text: "C",
            src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
            soundName: 'Closed-HH'
        }
    ];

    function playSound(selector) {
        const keyObject = arr.find(item => item.text === selector);

        if (keyObject) {
            const audio = document.getElementById(selector);
            const foundName = arr.find(item => item.text === selector)["soundName"];
            if (audio.paused) {
                audio.play();
            }
            setActiveKey(foundName);
        }
    }

    return (
        <div className="App">
            <div id="drum-machine">
                <div id="display">{activeKey}</div>
                <div id="drum-pads">
                    {arr.map((key) => (
                        <div
                            key={key.text}
                            onClick={() => {
                                playSound(key.text)
                            }}
                            className="drum-pad"
                            id={"key" + key.text}>
                            {key.text}
                            <audio id={key.text} className="clip" src={key.src}></audio>
                        </div>))}
                </div>
            </div>
        </div>
    );
}

export default App;
