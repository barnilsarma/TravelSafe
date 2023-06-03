import {Link} from 'react-router-dom';
import './App.css';
import AeroPlane from './AeroPlane.svg';
import PolicePic from './police-pic.svg';
function NavBar(){
    var opt=[
        {"Text":"Home","url":"/#home-cont","id":"home","className":"options"},
        {"Text":"About Us","url":"/#about-us-cont","id":"about-us","className":"options"},
        {"Text":"Contact Us","url":"/#contact-us-cont","id":"contact-us","className":"options"},
        {"Text":"Police Section","url":"/#police-cont","id":"police-section","className":"options"},
    ];
    return(
        <>
            <header id="landing-page-header">
                <div className="header-inner" id="header-left-side"><img src={AeroPlane} /></div>
                <div className="header-inner" id="header-right-side">
                    {opt.map((e)=><a id={e.id} className={e.className} href={e.url}>{e.Text}</a>)}
                </div>
            </header>
            <div id='quadrant'>.</div>
        </>
    );
}
function Home(){
    return(
        <div id="home-cont">
            <img src={AeroPlane} />
            <p><section style={{fontSize:'2cm'}}>TravelSafe</section><br />Making your travels safer!!</p>
        </div>
    );
}
function AboutUs(){
    return(
        <div id="about-us-cont">
            <img src={PolicePic} />
            <p>
                We all have a dream destination where we want to visit. But what keeps us bothered about visiting the place?
                Is it that the place is not that safe to visit? How to avoid such a dilemma? Don't worry, our platform provides 
                you the most accurate information about the safety of your dream holiday destination with just a few clicks. 
                We, along with the highly prestigious Police Department provide you with the most authentic information about 
                the safety level of the place FREE OF COST!! 
            </p>
        </div>
    );
}
function Safety(){
    return(
        <div id="safety-cont">
            <Link to="/User">Check your safety here</Link>
        </div>
    );
}
function Police(){
    return(
        <div id="police-cont">
            <h1>Only for police personnel</h1>
            <Link to="/PoliceRegister">Register</Link>
            <Link to="/PoliceLogin">Login</Link>
        </div>
    );
}
function ContactUs(){
    return(
        <div id="contact-us-cont">
            <h1>Feel Free to contact us directly</h1>
            <form method='POST'>
                <div className='part-1'>
                    <div className='lbls'>
                        <label>Your Email Id:</label>
                        <label>Your Query:</label>
                    </div>
                    <div className='flds'>
                        <input type="email" name="email" id="email" className='contact-form-fld' placeholder='Your Email Address..' />
                        <textarea name="query" id="query" className='contact-form-fld' placeholder='Your query..'></textarea>
                    </div>
                </div><br />
                <input type='submit' value='SUBMIT' id='contact-form-sub' className='sub'/>
            </form>
        </div>
    );
}
function Footer(){
    return(
        <footer>
            <div className='line-1'>
                <p>TRAVEL SAFE</p>
            </div>
            <div className='line-2'>
                <div className='col'>
                    <label>About</label>
                    <a href="#" role="button" name="team">Team</a>
                    <a href="#" role="button" name="contrib">Contribute</a>
                    <a href="#" role="button" name="source">Source Code</a>
                </div>
                <div className='col'>
                <label>QUICK LINKS</label>
                    <a href="/#home-cont" role="button" name="home">Home</a>
                    <a href="/#about-us-cont" role="button" name="about">About</a>
                    <a href="/#contact-us-cont" role="button" name="contact">Contact</a>
                    <a href="/#police-cont" role="button" name="police">Police Section</a>
                </div>
                <div className='col'>
                <label>FOLLOW</label>
                <a href="#" role="button" name="link-1">
                    <img />
                    <section>LINK-1</section></a>
                <a href="#" role="button" name="link-2">
                    <img />
                    <section>LINK-2</section>
                </a>
                <a href="#" role="button" name="lin-3">
                    <img />
                    <section>LINK-3</section>
                </a>
                </div>
            </div>
        </footer>
    );
}
const Landing=()=>{
    return(
        <>
            <NavBar />
            <Home />
            <AboutUs />
            <Safety />
            <ContactUs />
            <Police />
            <Footer />
        </>
    );
}
export default Landing;