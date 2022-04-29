import {
    Section,
    Title,
    Container,
    AvatarPic
} from './styles'
import FollowInfo from '../../components/userInfo';
const UserPic = props => (
    <Section>
        <Title> Seguidores de '<a>#{props.nameProfile}</a>' </Title>
        {(props.followers).map(follower => (
            <Container>
                <AvatarPic src={follower.avatar_url} alt={follower.alternativeText}></AvatarPic>
                <p>#{follower?.login}</p>
                <FollowInfo ></FollowInfo>

            </Container>
        ))}
    </Section>

);


export default UserPic;