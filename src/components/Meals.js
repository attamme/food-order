import React, { useEffect, useState } from 'react'

const Meals = () => {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        const fetchMeals = async () => {
            try { 
                const response = await fetch("http://localhost:3001/meals");
                const data = await response.json();
                setMeals(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching meals:", error);
            }
        }
        fetchMeals();
    }, [])
    return (
        <ul id="meals">
                {meals.map((meal, index) => (
                    console.log(meal)
                ))}
               
        </ul>
    )
}

export default Meals