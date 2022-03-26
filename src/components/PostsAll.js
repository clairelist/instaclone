import axios from 'axios';
import {useState, useEffect} from 'react';

function PostsAll(){

    const [posts,setPosts] = useState([]);
    const [err,setErr] = useState('')

    //'on first mount, get all posts of this.user'
    useEffect(()=>{
        //call the posts api in here !
        axios.get('/api')
            .then((res)=>{
                setPosts(res.blah);
            }).catch(err=>{
                setErr(err);
            })
    },[])

    return(
        <div classname='all-posts'>
            {err && <h3>Error! {err.message} </h3>}
        </div>
    )
}

export default PostsAll;