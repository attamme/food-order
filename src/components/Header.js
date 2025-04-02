import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from '../store/CartContext'
import { useContext, useEffect } from 'react'

const Header = () => {
    const { items, totalAmount} = useContext(CartContext)
    useEffect(() => {
        console.log('Current cart items: ', items)
    }, [items])
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
                <Button textOnly>Cart ({totalAmount})</Button>
                {console.log({totalAmount})}
            </nav>
        </header>
    )
}


export default Header