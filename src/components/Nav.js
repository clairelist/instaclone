//the nav component!
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <div classname='navwrapper'>
            <Link to='path'>PATH</Link>
            <Link to='path'>PATH</Link>
            <Link to='path'>PATH</Link>
        </div>
    )
}
export default Nav;