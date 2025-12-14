import { Link } from 'react-router-dom'
import '../styles/home.css'

function Home() {
    return (
        <>
            <h1 className='headerText'>This is home page</h1>
            <Link to='/about'>
                <button>About</button>
            </Link>
            <br /> <br />
            <Link to='/contact'>
                <button>Contact</button>
            </Link>
        </>
    );
}

export default Home;