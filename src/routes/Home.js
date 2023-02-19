import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'

function Home() {

  return (
    <>\
    <Navbar />
    <Welcome    
        cName= 'welcome'
        welcomeImg='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        title = 'Find your meal'
        text= 'Open your pallets'
        buttonText='Menu card'
        url='/menu'
        btnClass='show'
     />
    </>
  )
}

export default Home
