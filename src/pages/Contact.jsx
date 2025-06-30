import React from 'react';
import Inputs from '../Component/Inputs';
import discordimg from '../assets/logo-img/iconmonstr-discord-5.svg';
import faceboock from '../assets/logo-img/iconmonstr-facebook-5.svg';
import github from '../assets/logo-img/iconmonstr-github-5.svg';
import linkendin from '../assets/logo-img/iconmonstr-linkedin-5.svg';
import mapImage from '../assets/logo-img/map-placeholder.jpg'; 
import './Contact.css';


const inputData = {
  Firstname: "Voornaam",
  Lastname: "Achternaam",
  Email: "E-mail",
  Gsm: "Telefoonnummer"
};

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>

      <div className="contact-grid">
        {/* Linkerkolom */}
        <div className="contact-left">
          <div className="contact-map">
            <img src={mapImage} alt="Kaart locatie" />
            <p className="contact-address">
              Examplestraat 123<br />
              1000 Brussel<br />
              België
            </p>
          </div>

          <ul className="social-media">
            <li><a href="https://www.linkedin.com"><img src={linkendin} alt="LinkedIn" /></a></li>
            <li><a href="https://github.com/Niki284"><img src={github} alt="GitHub" /></a></li>
            <li><a href="https://facebook.com"><img src={faceboock} alt="Facebook" /></a></li>
            <li><a href="https://discord.gg/AmGMzdVf"><img src={discordimg} alt="Discord" /></a></li>
          </ul>
        </div>

        {/* Rechterkolom */}
        <div className="contact-right">
          <form className="contact-form">
            {Object.entries(inputData).map(([key, label]) => (
              <Inputs key={key} data={[key, label]} />
            ))}
            <button type="submit" className="btn__link">Versturen</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Contact };



// import React from 'react'
// import Inputs from '../Component/Inputs';
// import discordimg from '../assets/logo-img/iconmonstr-discord-5.svg';
// import faceboock from '../assets/logo-img/iconmonstr-facebook-5.svg';
// import github from '../assets/logo-img/iconmonstr-github-5.svg';
// import linkendin from '../assets/logo-img/iconmonstr-linkedin-5.svg';

// const inps = [{
//   Name : "Firstname",
//   Lastname : "LastName",
//   Email : "E-mail",
//   Gsm : "gsm"
// }

// ]
// console.log(...inps)
// const Contact = () => {
//   return (
//   <div className='contact'>
//         <h1 className='contact--title'>Contact Me</h1>
//         <div className='contact__form'>
//             <form action="" method="post">
//               {Object.entries(...inps).map(e => <Inputs data = {e}/>)}
//             </form>
//           </div>


//           <frame
//            />
//         <div className='social'>
//           <ul className='social__media'>
//             <li><a href="https://www.linkedin.com/feed/"><img src={linkendin} alt="" /></a></li>
//             <li><a href="https://github.com/Niki284"><img src={github} alt="" /></a></li>
//             <li><a href="https://www.facebook.com/campaign/landing.php?campaign_id=1557999725&extra_1=s%7Cc%7C294720459590%7Ce%7Cfacebook%7C&placement=&creative=294720459590&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D1557999725%26adgroupid%3D61885678711%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D1001191%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwp7eUBhBeEiwAZbHwkVKdqiKtrMyd5yQ1DfE855FHruUThM-ZpWoZUBqtt6sY2JIpkfznbRoC9LsQAvD_BwE"><img src={faceboock} alt="" /></a></li>
//             <li><a href="https://discord.gg/AmGMzdVf"><img src={discordimg} alt="" /></a></li>
//           </ul>
//         </div>
//         <div className='btn conti'>
//           <a className='btn__link' href="/">Versturen</a>
//         </div>
//     </div>
    
//   )
// }
// export {Contact}
