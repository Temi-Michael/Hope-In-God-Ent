import { Link } from 'react-router-dom'
import '../App.css'

export default function Nav(props) {
    return(
        <div className='NavList'>
            <ul>
                <li><Link to='/' className='ListItem'>{ props.home }</Link> </li>
                <li><Link to='order' className='ListItem'>{ props.order }</Link> </li>
                <li><Link to='contact' className='ListItem'>{ props.contact }</Link> </li>
            </ul>
        </div>
    )
}