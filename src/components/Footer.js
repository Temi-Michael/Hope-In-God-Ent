import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <div className="Footer">
            <footer>
                <p>Created by Lazy_Codes</p><br></br><br></br>
                <Link to='https://github.com/Temi-Michael/' target="_blank"><FontAwesomeIcon icon={faGithub} /></Link>
            </footer>
        </div>
    )
};
