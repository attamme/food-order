import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from '../store/CartContext'
import Modal from './UI/Modal'
import { useContext, useEffect, useState } from 'react'

const Header = () => {
    const { items, totalAmount} = useContext(CartContext)
    const [isModalOpen, setModalOpen] = useState(false)

    const handleModalOpen = () => {
        setModalOpen(true)
    }
    const handleModalClose = () => {
        setModalOpen(false)
    }
    
    return (
        <header id="main-header">
            <div id="title">
                <img src={logo} alt='logo'/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleModalOpen}>Cart ({totalAmount})</Button>
                {console.log({totalAmount})}
            </nav>
            <Modal isOpen={isModalOpen} closeModal={handleModalClose} />
        </header>
    )
}


export default Header