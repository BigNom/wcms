import React, { Component } from 'react';
import {
    Img,
    Header,
    DishesWrapper
} from './styles'

import ribRoast from './ribRoast.png'


class Dishes extends Component {
    render() {
        return (
            <div>
                <DishesWrapper>
                    <Img src={ribRoast}></Img>
                    <Header>
                        <h3>Rib Roast</h3>
                    </Header>
                </DishesWrapper>
            </div>
        );
    }
}

export default Dishes;