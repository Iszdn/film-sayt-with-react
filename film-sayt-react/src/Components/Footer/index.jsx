import React from 'react'
import "./index.css"
function Footer() {
  return (
   <footer id='footer'>
    <div className="dis-foot-top">
<div className="logo-bear"><img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/footer-img.png" alt="" /></div>
<div className="cons">
<div className="con-foot">
    <ul className="ul-foo">
        <li className="li-foo"><a href="">What we do</a></li>
        <li className="li-foo"><a href="">About Us</a></li>
        <li className="li-foo"><a href="">Help and Faq</a></li>
    </ul>
</div>
<div className="con-foot">
    <ul className="ul-foo">
        <li className="li-foo"><a href="">Team</a></li>
        <li className="li-foo"><a href="">Contact Us</a></li>
        <li className="li-foo"><a href="">Speakers</a></li>
    </ul>
</div>
<div className="con-foot">
    <ul className="ul-foo">
        <li className="li-foo"><a href="">Program</a></li>
        <li className="li-foo"><a href="">Shop</a></li>
        <li className="li-foo"><a href="">Blog</a></li>
    </ul>
</div>
    </div></div>
{/* top foot end  */}
{/* boot foot start  */}
<div className="foot-boot">
<div className="sosialss">
              <ul className="sosial-medias">
                <li className="sosial">
                  <i class="fa-brands fa-instagram"></i>
                </li>
                <li className="sosial">
                  <i class="fa-brands fa-youtube"></i>
                </li>
                <li className="sosial">
                  <i class="fa-brands fa-vine"></i>
                </li>
                <li className="sosial">
                  <i class="fa-brands fa-twitter"></i>
                </li>
              </ul>
           <p className="copy">© 2022 Qode Interactive, All Rights Reserved</p>
            </div>
            <div className="con-f00">
    <p className="text-c-f">1316 Via del Parione <br />Florence CA 90291, Italy</p>

<div className="inpv">
<input className="inp" type="email" placeholder='Sign up to Newsletter' /><i class="fa-solid fa-arrow-right-long"></i></div>
</div></div>
   </footer>
  )
}

export default Footer