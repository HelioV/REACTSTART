import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render () {
        const ingredientSummary = Object.keys( this.props.ingredients )
            .map( igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li> );
            } );

        return (
            <Aux>
                <h3>Olá!! O seu pedido</h3>
                <p>Um Hamburguer com os seguintes ingredientes:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Preço Total: {this.props.price.toFixed( 2 )}</strong></p>
                <p>Deseja mesmo realizar este pedido?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancelar</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Confirmar</Button>
            </Aux>
        );
    }
}

export default OrderSummary;