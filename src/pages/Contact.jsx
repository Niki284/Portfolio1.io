import React from 'react'
import Inputs from '../Component/Inputs';
import discordimg from '../asents/logo-img/iconmonstr-discord-5.svg';
import faceboock from '../asents/logo-img/iconmonstr-facebook-5.svg';
import github from '../asents/logo-img/iconmonstr-github-5.svg';
import linkendin from '../asents/logo-img/iconmonstr-linkedin-5.svg';

const inps = [{
  Name : "Firstname",
  Lastname : "LastName",
  Email : "E-mail",
  Gsm : "gsm"
}

]
console.log(...inps)
const Contact = () => {
  return (
  <div className='contact'>
        <h1 className='contact--title'>Contact Me</h1>
        <div className='contact__form'>
            <form action="" method="post">
              {Object.entries(...inps).map(e => <Inputs data = {e}/>)}
            </form>
          </div>
        <div className='social'>
          <ul className='social__media'>
            <li><a href="https://www.linkedin.com/feed/"><img src={linkendin} alt="" /></a></li>
            <li><a href="https://github.com/Niki284"><img src={github} alt="" /></a></li>
            <li><a href="https://www.facebook.com/campaign/landing.php?campaign_id=1557999725&extra_1=s%7Cc%7C294720459590%7Ce%7Cfacebook%7C&placement=&creative=294720459590&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D1557999725%26adgroupid%3D61885678711%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D1001191%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwp7eUBhBeEiwAZbHwkVKdqiKtrMyd5yQ1DfE855FHruUThM-ZpWoZUBqtt6sY2JIpkfznbRoC9LsQAvD_BwE"><img src={faceboock} alt="" /></a></li>
            <li><a href="https://discord.gg/AmGMzdVf"><img src={discordimg} alt="" /></a></li>
          </ul>
        </div>
        <div className='btn'>
          <a className='btn__link' href="/">Versturen</a>
        </div>
    </div>
    
  )
}
export {Contact}