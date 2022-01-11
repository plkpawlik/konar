import React from 'react';
import "/src/style/layout/management.scss";


/*  Component schema
/*   *   *   *   *   *   *   *   *   *   */

export default function Contact() {

    

/*  Component layout
/*  do refaktoryzacji  */

return(
    <>

<div id="management" class="row"> 
                <div className="management-wrapper" class="column">
                    <p className='position-management'> EMAIL
                        <p className="email-management"> konarrobotics@gmail.com
                        </p>  
                    </p>   

                    <p className='position-management'> LOKALIZACJA
                        <p className="email-management"> 
                        bud. C-3 pok. 02 <br/>
                        ul. Zygmunta Janiszewskiego 11/17 <br/>
                        50-372 Wrocław <br/>
                        </p>  
                    </p>  
                </div>
            </div>

    </>
)};