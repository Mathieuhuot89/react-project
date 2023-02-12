import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import MenuImg from '../assets/menu.jpg'
import Food from '../components/Food'
import { CardMenu } from '../components/CardMenu';
import "../components/FoodStyles.css";
import { useState } from 'react';
import AddFood from '../components/addFood';

function Menu() {
  const [foods, setFoods] = useState(CardMenu)

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
        {foods.map((food, index) => 
          <Food food={food} key={index} />
        )}
      </div>
      <AddFood setFoods={setFoods}/>
     </div>
    </>
  )
}

export default Menu
