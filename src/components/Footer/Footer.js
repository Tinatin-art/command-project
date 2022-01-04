import React from 'react'
import {Link} from 'react-router-dom'

import twitterImg from '../../assets/icons/twitter-icon.svg';
import youtubeImg from '../../assets/icons/youtube-icon.svg';
import instagramImg from '../../assets/icons/instagram-icon.svg';
import facebookImg from '../../assets/icons/facebook-icon.svg';
import Accordion from '../Accordion/Accordion';




const Footer = () =>{


    const accordionData = [{
        title: 'Section 1',
        content: `Lorem ipsum dolor`
      },{
        title: 'Section 2',
        content: `Lorem ipsum, dolor `
      },
      {
        title: 'Section 3',
        content: `Lorem ipsum, dolor`
      },
    ]
    

    return (
        <footer className='footer'>
            <div className="container">
                <div className='footer__up'>
                    <Link to="/" className='logo'><h3>Orion</h3></Link>
                       <div className="accordion">
                           {accordionData.map(({ title, content }) => (
                           <Accordion title={title} content={content} />
                           ))}
                       </div>         
                    <nav>
                        <h4 className='footer__title'>Follow Us On</h4>
                        <ul className='footer__social'>
                            <li className='footer__social-links'><img src={twitterImg} alt="1" /></li>
                            <li className='footer__social-links'><img src={youtubeImg} alt="2" /></li>
                            <li className='footer__social-links'><img src={instagramImg} alt="3" /></li>
                            <li className='footer__social-links'><img src={facebookImg} alt="4" /></li>
                        </ul>
                    </nav>
                </div>
                <div className="footer__down">
                    <p>Copyright 2021</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
