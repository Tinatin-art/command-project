import {React , useState, Fragment} from 'react';
import Media from 'react-media';

const Accordion = ( { title, content }) => {
  
//   const { title, content } = accordionData;

    const [isActive, setIsActive] = useState(false);



  return (
    <Fragment>
            <Media queries={{ small: "(max-width: 768px)" }}>
                {matches =>
                matches.small ? (
                    <div className="accordion-item">
                        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                            <div className='title'><h3>{title}</h3><div>{isActive ? '-' : '+'}</div></div>
                        </div>
                        {isActive && <div className="accordion-content">{content}</div>}
                    </div>
                ) : (
                    <div className='footer__menu'>
                        <h3>Section 1</h3>
                        <ul>
                            <li>Theme one</li>
                            <li>Theme two</li>
                            <li>Theme three</li>
                            <li>Theme four</li>
                        </ul>
                    </div>
                )
                }
            </Media>
    </Fragment>
  );
};



export default Accordion;