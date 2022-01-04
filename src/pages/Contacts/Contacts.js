import React, {useEffect} from 'react'

const Contacts = () => {
    
    // Sticky Menu Area
    useEffect(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth'
          });
    });

           
    
        return (
    <>
     <header className="header-section d-none d-xl-block">
          ..add header code Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime obcaecati temporibus incidunt, modi voluptate ipsa nisi suscipit reiciendis quisquam? Accusantium tenetur dolor, ipsa magnam veritatis fugit corporis ipsum nam impedit.
          <h1>..add header code Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime obcaecati temporibus incidunt, modi voluptate ipsa nisi suscipit reiciendis quisquam? Accusantium tenetur dolor, ipsa magnam veritatis fugit corporis ipsum nam impedit.</h1>
     </header>
    </>
  );   
}

export default Contacts
