import { Link } from 'react-router-dom'
import '../styles/contact.css'

function Contact() {
    return (
        <>
            <h1 className='headerText'>This is contact page</h1>
            <Link to='/'>
                <button>Home</button>
            </Link>
            <br /> <br />
            <Link to='/about'>
                <button>About</button>
            </Link>
        </>
    );
}

export default Contact;