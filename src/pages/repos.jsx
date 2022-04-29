import React, { useContext } from 'react';

import Container from '../components/container';
import ReposContainer from '../components/reposContainer';

import { context } from '../context';
import HomeButton from '../components/homeBtn';
const Repos = () => {
    const ctx = useContext(context);

    return (

        <Container>
            <HomeButton></HomeButton>
            <ReposContainer name={ctx.userData?.name} repos={ctx.repos}>
            </ReposContainer>
        </Container>
    );
};



export default Repos;