
import Link from "next/link";

function NavBar() {
    return(
        <div>
            <Link href='/'>| index </Link>
            <Link href='/about'>| about </Link>
            <Link href='/contact'>| contact |</Link>
        </div>
    );
}

export default NavBar;