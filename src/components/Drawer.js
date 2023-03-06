import React from "react";

const Drawer = () => {
    return (
        <div style={{}} className='overlay'>
            <div className='drawer d-flex flex-column'>
                <h2 className='mb-30 d-flex justify-between'>
                    Корзина <img className='cu-p  removeBtn mr-20' src='/img/btn-remove.svg' alt="Remove"></img></h2>
                <div style={{ flex: 1 }} className='items'>
                    <div className='cartItem d-flex align-center mb-20'>
                        <div style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }}
                            className='cartItemImg'>
                        </div>
                        <div className='mr-20 flex'>
                            <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className='removeBtn mr-20' src='/img/btn-remove.svg' alt="Remove"></img>
                    </div>
                    <div className='cartItem d-flex align-center mb-20'>
                        <div style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }}
                            className='cartItemImg'>
                        </div>
                        <div className='mr-20 flex'>
                            <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className='removeBtn mr-20' src='/img/btn-remove.svg' alt="Remove"></img>
                    </div>
                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li className="d-flex align-end">
                            <span>Итого</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li className="d-flex align-end">
                            <span>Налог 5:</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>
                    <button className='greenButton'>Оформить заказ <img src='/img/arrow.svg' alt='Arrow' /></button>
                </div>
            </div>
        </div>
    );
}

export default Drawer