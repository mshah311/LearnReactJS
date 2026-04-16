import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import GetMaterialDetail_Parent from './Componet/AllFunctionComponent'
import GetCountryDetail from './Componet/State'
import Religion from './Componet/ReactHooks'
import Animal from './Componet/event'
import GetAnimalDetail2 from './Componet/event'
import ConditionalFormating from './Componet/ConditionalFormating'
import ListofCities from './Componet/List'
import Browsers from './Forms/0330_1stForm'
import WebSite from './Forms/0331_Route'
import BookStoreRotes from './Forms/0401_BookStoreRoute'
import StyleSetup from './Forms/0402_style'
import UserfmAPI from './Forms/0403_API_calling'
import TopApp from './Componet/0404_PropsDrilling/TopApp'
import TopApp1 from './Componet/0404_contex_api/TopApp'
import GetUserDetail from './Componet/0409_FetchData_API/FetchDataFmAPI'
import GetUserDetailAxios from './Componet/0409_FetchData_API/AXIOS'
import CustomerList from './Componet/0410_CRUD.tsx/crud'

// import Book from './Forms/0401_Book'
// import PageNotFound from './Forms/0401_pagenotfoud'
// import BookStore from './Forms/0401_BookStore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section> */}

      {/* <GetMaterialDetail_Parent/> */}
        {/* <GetCountryDetail/> */}
        {/* <Religion/> */}
       
        {/* <Animal/> */}
        {/* <GetAnimalDetail2/> */}
        {/* <GetAnimalDetail2/> */}
        {/* <GetAnimalDetail2/> */}
        {/* <ConditionalFormating/> */}
        {/* <ListofCities/> */}
        {/* <Browsers/> */}
        {/* <WebSite/> */}

        {/* <Book/> */}
        {/* <PageNotFound/> */}
        {/* <BookStore/> */}
        {/* <BookStoreRotes/> */}
        {/* <StyleSetup/> */}
        {/* <UserfmAPI/> */}
        {/* <TopApp/> */}
        {/* <TopApp1/> */}
        {/* <GetUserDetail/> */}
        {/* <GetUserDetailAxios/> */}
        <CustomerList/>
    </>
  )
}

export default App
