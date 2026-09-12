
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import Technologies from './Components/Technologies'
import type { TechnologyType } from './TechnologyType'


  const TechDataPromise = async (): Promise<TechnologyType[]> =>{
    const res = await fetch("/data.json");
    const data = await res.json();
    return data;
  }

function App() {

  return (
    <>
    <Nav></Nav>
    <Banner></Banner>
    <Suspense fallback={<h2>Loading</h2>}> 
      <Technologies TechDataPromise={TechDataPromise()}></Technologies>
    </Suspense>

    <Footer></Footer>
    </>
  )
}

export default App
