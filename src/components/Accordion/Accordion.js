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
                <p>The document is at least 600px wide.</p>
                )
                }
            </Media>
    </Fragment>
  );
};



export default Accordion;