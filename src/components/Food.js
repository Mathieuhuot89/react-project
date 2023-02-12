import { useState } from "react";
import "./FoodStyles.css";

function Food( {food} ) {

  const [hover, setHover] = useState(false);

  return (
    <>
    <div className="food">
      <div className="title">{food.name}</div>
     
      <div className='card'>
        <img src={food.image} className='card-img' alt='image' onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ opacity: hover ? 0.5 : 1 }}/>
        {hover && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#fff', padding: '10px' }}>
          {food.description}
        </div>
      )}
        <button>Confirm</button>
      </div>
    </div>
    </>
  )
}

export default Food
