import React, { useEffect, useRef, useState, useContext} from 'react';
import CartContext from '../../store/CartContext';
import Button from './Button';

const Modal = ({isOpen, closeModal}) => {
    const { items, totalAmount, clearCart } = useContext(CartContext);
    const modalRef = useRef(null);

    const totalSum = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    useEffect(() => {
        if (isOpen) {
            modalRef.current.showModal();
        } else {
            modalRef.current.close();
        }
        return () => {
            modalRef.current.close();
        }
        }, [isOpen]);
        const handleCheckout = () => {
            clearCart();
            closeModal();
        }

        return (
            <dialog ref={modalRef} className="modal">
              <div className="cart">
                  <h2>Your cart</h2>
                  {items.length === 0 ? (
                    <p>Your cart is empty.</p>
                  ) : (
                    <ul>
                      {items.map((item) => (
                        <li className="cart-items" key={item.id}>
                          <p>
                            {item.name} - {item.quantity}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                  <p className="cart-total">{totalSum.toFixed(2)} €</p>{" "}
                  <div className="modal-actions">
                  <button className="text-button" onClick={closeModal}>
                    Close
                  </button>
                  <button className="button" onClick={handleCheckout}>Checkout</button>
                  </div>
              </div>
            </dialog>
          );
        };

export default Modal