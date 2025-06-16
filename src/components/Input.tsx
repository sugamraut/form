interface Iinput{
    type:string;
    placeholder:string;
}
const InputField=({type,placeholder}:Iinput)=>{
    return( 
    <input className="password" type={type} placeholder={placeholder}/>
      
    )
}

export default InputField