import React from 'react'
import { useState } from 'react'
import './AddFoodStyles.css'

function AddFood({setFoods}) {

    const [newFood, setNewFood] = useState({
        name:'',
        image:'',
        description:''
    })
    const handleNewFood = (e) => {
    setNewFood({
        ...newFood,
        [e.target.name]: e.target.value
    })}
    const handleSubmit = (e) => {
    e.preventDefault()
    setFoods((foods)=>{
        let buff = [...foods]
        buff.unshift(newFood)
        return buff
    })
    }
    // const [isDisplay, setIsDisplay] = useState(true)
    // const handleIsDisplay = (e) => {
    //     if(isDisplay){
    //         setIsDisplay(false)
    //         e.target.innerText = 'Add New Food'
    //     }
    //     else{
    //         setIsDisplay(true)
    //         e.target.innerText = 'Hide Form'
    //     }
    // }
    // Possible de faire du ternaire avec plusieurs intructions ?
  return (
    <div className='AddFood'>
        
        <form onSubmit={handleSubmit}>
        <h2>Add Food</h2>
            <label>Name</label>
            <input type='text' value={newFood.name} name='name' onChange={handleNewFood}></input>

            <label>Image</label>
            <input type='text' value={newFood.image} name='image' onChange={handleNewFood} placeholder='http://example.com/food-image.jpg'></input>

            <label>Description</label>
            <input type='text' value={newFood.description} name='description' onChange={handleNewFood}></input>
            
            <button type='submit'>Create</button>
        </form>
        
    </div>
  )
}

export default AddFood
