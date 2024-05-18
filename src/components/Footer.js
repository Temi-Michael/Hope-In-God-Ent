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
                <p>Created by Lazy_Codes</p><br></br><br></br>
                <Link to='https://github.com/Temi-Michael/' target="_blank"><FontAwesomeIcon icon={faGithub} /></Link>
                <Time />
            </footer>
        </div>
    )
};
