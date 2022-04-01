import React from 'react';


// layout
import Navbar from '@/layout/navbar';
import View from '@/layout/view';

import ImageSupportProvider from '../img_support_check/img_check.jsx';


/*  Component schema
/*   *   *   *   *   *   *   *   *   *   */

export default function Main() {

    

/*  Component layout
/*   *   *   *   *   *   *   *   *   *   */

return(
    <ImageSupportProvider>

        <Navbar />

        <View />

        </ImageSupportProvider>    
)};