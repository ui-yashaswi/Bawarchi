import React from 'react'
import Navlg from '../../Components/Navlg'
import Slider from './Sections/Slider'
import AboutUs from '../AboutUs/AboutUs'
import ReserveTable from './Sections/Form'
import OurMenu from './Sections/OurMenu'
import KitchenSpecial from './Sections/KitchenSpecial'
import Events from './Sections/Events'
import OrderNow from './Sections/OrderNow'
import Gallery from './Sections/Gallery'
import Partners from './Sections/Partners'

function Home() {
  return (
    <div>
        <Navlg/>
        <Slider/>
        <AboutUs/>
        <ReserveTable/>
        <OurMenu/>
        <Events/>
        <OrderNow/>
        <KitchenSpecial/>
        <Gallery/>
        <Partners/>
        
        
    </div>
  )
}

export default Home