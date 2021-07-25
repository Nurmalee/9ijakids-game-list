import Banner from "./components/Banner"
import Footer from "./components/Footer"
import GameList from "./components/GameList"
import GamesHeader from "./components/GamesHeader"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <GamesHeader />
      <GameList />
      <Footer />
    </>
  )
}

export default App

