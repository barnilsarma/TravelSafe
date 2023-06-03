import {Link} from 'react-router-dom';
function RegHeader(){
    return(
        <div id='reg-cont-header'>
            <Link to='/'>HOME</Link>
        </div>
    );
}
function RegForm(){
    return(
        <div id="reg-cont">
            <h1>Register</h1>
            <form method='POST' action='https://travel-safe.vercel.app:5000/Reg'>
                <div className='part-1'>
                    <div className='lbls'>
                        <label>Enter Your Police Station:</label>
                        <label>Enter Your Police Station District:</label>
                        <label>Enter your contact-Number:</label>
                        <label>Enter your password:</label>
                    </div>
                    <div className='flds'>
                        <input type="text" name='stationNameReg' id='stationNameReg' placeholder='Enter your police station...'/>
                        <input type="text" name='stationdistReg' id='stationdistReg' placeholder='Enter your police station district...'/>
                        <input type="text" name='phoneNumberReg' id='phoneNumberReg' placeholder='Enter your phone number...'/>
                        <input type='password' name='RegPass' id='RegPass' placeholder='Enter your password...' />
                    </div>
                </div>
                <input type='submit' value='SUBMIT' id='RegSub1' name='RegSub1' className='sub' />
            </form>
        </div>
    );
}
const PoliceRegister=()=>{
    return(
        <>
            <RegHeader />
            <RegForm/>
        </>
    );
}
export default PoliceRegister;
