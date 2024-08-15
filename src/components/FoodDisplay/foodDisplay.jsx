import React, { useContext } from 'react'
import './foodDisplay.css'
import { StoreContext } from '../../context/StoreContext'



const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
        <h2>Top Dishes near you</h2>
    </div>
  )
}

export default FoodDisplay;