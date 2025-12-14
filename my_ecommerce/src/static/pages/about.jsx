import { Link } from 'react-router-dom'
import '../styles/contact.css'

function About() {
    return (
        <>
            <h1 className='headerText'>This is about page</h1>
            <Link to='/'>
                <button>Home</button>
            </Link>
            <br /> <br />
            <Link to='/contact'>
                <button>Contact</button>
            </Link>
        </>
    );
}

export default About;