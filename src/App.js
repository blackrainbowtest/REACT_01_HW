import Header from "../src/components/Layout/Header"
import GetStarted from "../src/components/Main/GetStarted"
import Services from "../src/components/Main/Services"
import Work from "../src/components/Main/Work"
import About from "../src/components/Main/About"
import Footer from "../src/components/Layout/Footer"

export default function App() {
  return (
    <>
      <div className="">
        <Header />
        <GetStarted />
        <Services />
        <Work />
        <About />
        <Footer />
      </div>
    </>
  )
}
