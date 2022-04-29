import {
    Container,
    Name,
    User,
    Description
} from './styles'
const userInfo = props => {
    return (
        <Container>
            <Name>{props.name}</Name>
            <User>{props.login}</User>
            <Description> {props?.bio} </Description>
        </Container>

    );

}

export default userInfo;