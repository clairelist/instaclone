//this will handle the application routing!
import {Route} from 'react-router-dom';

function Routes(){
    return(
        <>
        <Route exact path='path' component={component} />
        <Route exact path='path' component={component} />
        <Route exact path='path' component={component} />
        </>
    )
}

export default Routes;