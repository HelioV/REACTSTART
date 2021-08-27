import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salada', type: 'salad' },
    { label: 'Queijo', type: 'bacon' },
    { label: 'Fiambre', type: 'cheese' },
    { label: 'Maionese', type: 'meat' },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Preço Atual: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>Enviar Pedido</button>
    </div>
);

export default buildControls;