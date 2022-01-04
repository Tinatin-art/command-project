import React from 'react'

function NotFound() {

    function Hello(){
        console.log("f");
    }
    return (
        <div>
            
            <a href='/about' onClick={Hello}>Yasnyi peres</a>

        </div>
    )
}

export default NotFound
