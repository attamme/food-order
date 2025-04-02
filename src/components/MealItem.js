const MealItem = ({ meal }) => {

    const price = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(meal.price)

    return (
        <li className="meal-item">
            <article>
                <img src={require(`../assets/${meal.image}`)} alt={meal.name}/>
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">{price}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p>
                    <button >Add to Cart</button>
                </p>
            </article>
        </li>
    )
}

export default MealItem