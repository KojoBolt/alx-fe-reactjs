 export const UserProfile = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.age}</p>
            <p>{props.bio}</p>
        </div>
    );
    
}
<UserProfile name="David" age="27" bio="Loves loves coding" />