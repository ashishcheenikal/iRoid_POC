import './App.scss'
import CustomerSaying from './components/CustomerSaying'
import Footer from './components/Footer'
import Header from './components/Header'
import HeaderBanner from './components/HeaderBanner'
import OurSolutions from './components/OurSolutions'
import Subscription from './components/Subscription'

function App() {

  return (
    <>
      <Header/>
      <HeaderBanner/>
      <OurSolutions/>
      <CustomerSaying/>
      <Subscription/>
      <Footer/>
    </>
  )
}

export default App
