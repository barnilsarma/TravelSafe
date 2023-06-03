import React from 'react';
import ReactDOM from 'react-dom/client';
const FirForm=()=>{
    return(
        <div id="Fir-cont">
            <h1>FIR Form</h1>
            <form method="POST" action='http://127.0.0.1:5000/CrimeInfo' name='FirForm'>
                <div className='part-1'>
                    <div className='lbls'>
                        <label>Enter the place of crime:</label>
                        <label>Enter the name of crime:</label>
                        <label>Date of Lodging of crime:</label>
                        <label>Level of crime(1-10):</label>
                        <label>Status:</label>
                    </div>
                    <div className='flds'>
                        <input type="text" name='place' id='place' placeholder='place of crime...'/>
                        <input type="text" name='crime' id='crime' placeholder='Eg: Theft...'/>
                        <input type="date" name='dol' id='dol' />
                        <input type="number" name='level' id='level' placeholder='1'/>
                        <input type="status" name='status' id='status' placeholder='Whether the case is open or closed...'/>
                    </div>
                </div>
                <input type='submit' value='SUBMIT' id='CrimeSub1' name='CrimeSub1' className='sub' />
            </form>
        </div>
    );
}
const FirReg=()=>{
    return(
        <FirForm />
    );
}
export default FirReg;