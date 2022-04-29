import {
    Section,
    Title,
    ListOfFollowers,
    Follower

} from './styles';

const Followers = props => {
    return (
        <Section>

            <Title> Seguidores de {props.nameProfile}</Title>
            <ListOfFollowers> {console.log('fooool' + followers)}
                {(props?.followers).map(follower => {
                    return (
                        <Follower>
                            <p>{follower?.login}</p>
                        </Follower>
                    );
                })}
            </ListOfFollowers>
        </Section>
    );
}

export default Followers;

