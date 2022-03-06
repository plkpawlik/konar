import React from 'react';
import "/src/style/layout/management.scss";


/*  Component schema
/*   *   *   *   *   *   *   *   *   *   */

export default function Management() {

    

/*  Component layout
/*zdecydowanie do refaktoryzacjixD */

return(
    <>
        <div id="management" class="row">
                <div className="management-wrapper" class="column">
                    <p className='position-management'> Doktor Opiekun
                        <p className="name-management"> Robert Muszyński 
                        <p className="email-management"><br/></p> 
                        </p>  
                    </p>   

                    <p className='position-management'> Prezes ds. Finansowych
                        <p className="name-management"> Krystian Szpakowski
                            <p className="email-management">cfo.konarrobotics@gmail.com</p> 
                        </p>  
                    </p>
                     
                    
                </div>


                <div className="management-wrapper" class="column">
                    <p className='position-management'> Prezes Główny
                        <p className="name-management"> Jakub Kolasa
                            <p className="email-management">ceo.konarrobotics@gmail.com</p> 
                        </p>  
                    </p>  

                    <p className='position-management'> Prezes ds. Informacyjnych
                        <p className="name-management"> Olga Szatkowska
                            <p className="email-management">cio.konarrobotics@gmail.com</p> 
                        </p>  
                    </p>
                     
                    
                </div>

                <div className="management-wrapper" class="column">
                <p className='position-management'> Prezes ds. Projektowych
                        <p className="name-management"> Wojciech Bohdan
                            <p className="email-management">cto.konarrobotics@gmail.com</p> 
                        </p>  
                    </p>     

                    <p className='position-management'> Prezes ds. Organizacyjnych
                        <p className="name-management"> Adam Wąs
                            <p className="email-management">coo.konarrobotics@gmail.com</p> 
                        </p>  
                    </p>
                     
                    
                </div>
            </div>
    </>
)};