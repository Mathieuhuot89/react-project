import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import MenuImg from '../assets/menu.jpg'
import Food from '../components/Food'
import { CardMenu } from '../components/CardMenu';
import "../components/FoodStyles.css";

function Menu() {
  return (
    <>
    <Navbar />
    <Welcome    
        cName= 'welcome-menu'
        welcomeImg={MenuImg}
        title = 'Menu'
     />
     <div className='menu-bar'>
      <h1>Choose your dishes</h1>

      <div className='containerFoodBoxes'>
        {CardMenu.map((food, index) => 
          <Food food={food} key={index} />
        )}
      </div>
     </div>
    </>
  )
}

export default Menu
