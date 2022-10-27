import React from 'react'
import "./component.css";
const About = () => {
  return (
    <>
             
<div className='section3'>
    <div className='color2'></div>
    <div className='color2'></div>
    <div className='color2'></div>
    <div class="home_menu">
            <nav>
            <h2 class="neon">ToDo</h2>
            <ul class="menu">
                <li><a href="/home">Home</a></li>
                <li><a href="/login">Log out</a></li>
                <li><a href="/about">About</a></li>
            </ul>
            </nav>
        </div>    
    <div className='promo'>
        <div className='promo card'>
            <div className='promo card left'>
                <div className='promo img'>
                    <img src="https://i.pinimg.com/474x/5c/e4/a0/5ce4a094df4c75914ea08054683a2ac9.jpg" alt=''></img>
                </div>
                <div className='promo name'>
                   Đoàn Văn Đức 
                    
                </div>
                <div className='promo underline'></div>
                <div className='promo job'>Web Developer</div>
                <div className='promo social'>
                    <li>
                        <a href="https://www.facebook.com/king152001"><i class='bx bxl-facebook-circle'></i></a>
                    </li>
                    <li>
                        <a href=""><i class='bx bxl-instagram-alt'></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/duc2475"><i class='bx bxl-github'></i></a>
                    </li>
                    <li>
                        <a href=""><i class='bx bxs-envelope'></i></a>
                    </li>
                </div>
            </div>
            <div className='promo card right'>
                <div className='promo title'>Hello</div>
                <div className='promo subtitle'>My Profile</div>
                    <div className='promo descr'>
                        <p>ID  : 46.01.104.036</p>
                    </div>
                    <div className='promo descr'>
                        <p>Class ID  : 46.01.104.xxx</p>
                    </div>
                    <div className='promo descr'>
                        <p>Phone Number  : 0349 633 768</p>
                    </div>
                    <div className='promo descr'>
                        <p>Email : doanduc152001@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


    </>
  )
}

export default About