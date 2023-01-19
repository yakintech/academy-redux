import React from 'react'
import Content from './components/Content'
import Footer from './components/Footer'
import Old from './components/Old'
import SiteHeaders from './components/SiteHeaders'

function App() {


  return (<>
    <Old />
    <SiteHeaders></SiteHeaders>
    <hr></hr>
    <Content></Content>
    <hr></hr>
    <Footer></Footer>
  </>
  )
}

export default App