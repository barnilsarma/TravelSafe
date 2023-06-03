import {Link} from 'react-router-dom';
import './App.css';
function UserHeader(){
    return(
        <div id='user-cont-header'>
            <Link to='/'>HOME</Link>
        </div>
    );
}
function UserForm(){
    return(
        <div id="user-cont">
            <h1>Welcome</h1>
            <form method='POST' action='http://127.0.0.1:5000/UserPage'>
                <div className='part-1'>
                    <div className='lbls'>
                        <label>City/town/village of visit:</label><br />
                        <label>Duration of visit (in days):</label><br />
                    </div>
                    <div className='flds'>
                        <input type="text" name='PlaceOfVisit' id='PlaceOfVisit' placeholder='Eg: Guwahati'/><br />
                        <input type="number" name='DurationOfVisit' id='DurationOfVisit' placeholder='1'/><br />
                    </div>
                </div>
                <input type='submit' value='SUBMIT' id='UserSub1' name='UserSub1' className='sub' formTarget='_self'/>
            </form>
        </div>
    );
}
const User=()=>{
    return(
        <>
            <UserHeader />
            <UserForm />
        </>
    );
}
export default User;