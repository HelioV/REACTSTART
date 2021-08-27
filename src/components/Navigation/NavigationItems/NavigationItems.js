import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Construtor de Hamburguer</NavigationItem>
        <NavigationItem link="/">Pedidos</NavigationItem>
    </ul>
);

export default navigationItems;