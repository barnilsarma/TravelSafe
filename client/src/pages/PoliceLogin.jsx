
import {Link} from 'react-router-dom';
function LogHeader(){
    return(
        <div id='Log-cont-header'>
            <Link to='/'>HOME</Link>
        </div>
    );
}
function LogForm(){
    return(
        <div id="Log-cont">
            <h1>Login</h1>
            <form method="POST" action='http://127.0.0.1:5000/LogRes' name='LogForm'>
                <div className='part-1'>
                    <div className='lbls'>
                        <label>Enter Your Police Station:</label>
                        <label>Enter Your Police Station District:</label>
                        <label>Enter your Contact Number:</label>
                        <label>Enter your password:</label>
                    </div>
                    <div className='flds'>
                        <input type="text" name='stationNameLog' id='stationNameLog' placeholder='Enter your police station...'/>
                        <input type="text" name='stationdistLog' id='stationdistLog' placeholder='Enter your police station district...'/>
                        <input type="text" name='phoneNumberLog' id='phoneNumberLog' placeholder='Enter your Contact Number...'/>
                        <input type="password" name='LogPass' id='LogPass' placeholder='Enter your Password...'/>
                    </div>
                </div>
                <input type='submit' value='SUBMIT' id='LogSub1' name='LogSub1' className='sub' />
            </form>
        </div>
    );
}
const PoliceLogin=()=>{
    return(
        <>
            <LogHeader />
            <LogForm/>
        </>
    );
}
export default PoliceLogin;