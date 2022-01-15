import React from 'react'
import "./HeaderBlock.css"
import styled from "styled-components"

const Container = () => {
    return (
        <div className="headerBlock">
            <div className="headerBlock__info">
                <div className="headerBlock__infoText">
                    <h1>model 3</h1>
                    <h4>Order Online for <span>Touchless Delivery</span></h4>
                </div>
                <div className="headerBlock__actions">
                    <button className="headerBlock__buttonPrimary">Custom Order</button>
                    <button className="headerBlock__buttonSecondary">Existing Inventory</button>

                </div>
            </div>
        </div>

        
    )
  

}

export default Container

