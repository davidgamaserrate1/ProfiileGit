import React, { useContext } from 'react';

import Container from '../components/container';
import FollowerPic from '../components/followerPic';
import HomeButton from '../components/homeBtn';


import { context } from '../context';


const Followers = () => {
    const ctx = useContext(context);

    return (

        <Container>
            <HomeButton></HomeButton>
            <FollowerPic followers={ctx.followers} nameProfile={ctx.userData.login}></FollowerPic>
        </Container >

    );

}


export default Followers;



