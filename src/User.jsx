export default function User({user}){
    // console.log(user);
    const {name, email, phone} = user
    
    return (
        <div style={{border: '2px solid blue', marginBottom: '15px', borderRadius: '8px'}}>
            <h4>Name: {name}</h4> 
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    )
}