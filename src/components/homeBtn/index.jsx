import React from 'react';
import { useHistory } from 'react-router-dom';

import {
    HomeBtn
} from './styles';

const HomeButton = props => {
    const history = useHistory();
    const handleOnClick = route => history.push(route);
    return (
        <HomeBtn onClick={() => handleOnClick('/')}>Voltar </HomeBtn>
    );
}

export default HomeButton;