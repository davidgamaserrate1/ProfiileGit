import {
    Container,
    AvatarPic
} from './styles'
const UserPic = props => (
    <Container>
        <AvatarPic src={props?.url} alt={props?.alternativeText} />
    </Container>
);


export default UserPic;