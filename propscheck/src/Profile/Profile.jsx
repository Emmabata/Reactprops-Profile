const Profile = (props,{children}) => {

    // const handleName=()=>alert(props.fullName)

    return ( 
        <div>
           <h1>Hi {props.fullName}</h1> 
            <p>{props.Bio}</p>
            <h3>{props.Profession}</h3>
            {/* <span>{props.children}</span> */}
            {/* {handleName()} */}
            {children}
            
        </div>
     );
}
 
export default Profile;