import React, { useContext } from 'react';
import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import AvatarPic from '../components/userPic';
import UserInfo from '../components/userInfo';
import UserMetrics from '../components/userMetrics';

import { context } from '../context';

export default function Home() {
    const ctx = useContext(context);
    return (
        <Container>
            <Header />
            <UserContainer>
                {ctx.userData?.login ?
                    <React.Fragment>
                        <AvatarPic url={ctx.userData?.avatar_url} alternativeText={ctx.userData?.login} ></AvatarPic>
                        <UserInfo name={ctx.userData?.name} login={ctx.userData?.login} bio={ctx.userData?.bio} />
                        <UserMetrics repos={ctx.userData?.public_repos} followers={ctx.userData?.followers} following={ctx.userData?.following} />
                    </React.Fragment>
                    : undefined}
            </UserContainer>
        </Container>
    );
}


