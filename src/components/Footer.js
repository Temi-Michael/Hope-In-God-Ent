import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'

function Time() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000); // Update every second

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            <p>{time}</p>
        </div>
    );
}


export default function Footer() {
    return (
        <div className="Footer">
            <footer>
                <p>Hope In God Ent. <sup>©</sup></p>
                <p>Created by Lazy_Codes</p>
                <Link to='https://github.com/Temi-Michael/' target="_blank" color="black"><FontAwesomeIcon icon={faGithub} color="black" /><sub>Github</sub></Link>
                <Time />
            </footer>
        </div>
    )
};
