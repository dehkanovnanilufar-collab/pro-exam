import { Route, Routes } from "react-router-dom"
import Apple from "./components/apple/Apple"
import Arrivel from "./components/arrivel/Arrivel"
import Banner from "./components/banner/Banner"
import Best from "./components/best/Best"
import Branding from "./components/branding/Branding"
import Button from "./components/button/Button"
import Categories from "./components/categories/Categories"
import Flash from "./components/flash/Flash"
import Footer from "./components/footer/Footer"
import Free from "./components/free/Free"
import Header from "./components/header/Header"
import Keyboard from "./components/keyboard/Keyboard"
import New from "./components/new/New"
import Rate from "./components/rate/Rate"

const App = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Flash/>
      <Free/>
      <Categories/>
      <Arrivel/>
      <New/>
      <Keyboard/>
      <Best/>
      <Apple/>
      <Rate/>
      <Branding/>
      <Button/>

      <Footer/>
    </div>
  )
}

export default App
