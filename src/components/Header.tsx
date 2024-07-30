
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <div className="header">
            <div className='title'>
            <Link to="/">#FERRARILIFE</Link>
            </div>
            <div className='subLinks'>
                <Link to="/about">About</Link>
                <Link to="/cars">Cars</Link>
            </div>
        </div>

    )
}