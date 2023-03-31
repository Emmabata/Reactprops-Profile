const Profile = ({fullName,Bio,Profession,children}) => {

    const handleName=()=>alert(fullName)

    return ( 
        <div>
            <span>{children}</span>
           <h1>Name: {fullName}</h1> 
            <span style={{textAlign:"block", fontWeight:"bold"}}>Bio: {Bio}</span> <br></br>
             <span style={{textAlign:"center"}}>Profession: {Profession}</span>
             {handleName()}
            
        </div>
     );
}
 
export default Profile;