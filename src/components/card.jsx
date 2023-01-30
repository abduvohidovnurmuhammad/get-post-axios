import React from "react";
import axios from "axios";
export const Card = ()=>{
    const UrLsite = 'https://jsonplaceholder.typicode.com/users'
    const [state,Setstate]= React.useState([])
    const [input,Setinput]= React.useState({name:"",age:""})
    React.useEffect(()=>{
        axios.get(UrLsite).then((response)=>Setstate(response.state))
    },[])
    const submit = (e)=>{
        e.preventDefault()
        axios.post(UrLsite,state).then((response)=>{
            Setstate(response.state)
            console.log(input);
        })
        Setinput({name:"",age:""})
    }
    const change = (e)=>{
        Setinput((p)=>{
            return {...p,[e.target.name]:e.target.value}
        })
      
    }
  
    return (
        <div>

       <form onSubmit={submit}>
        <input onChange={change} value={input.name} name='name' type="text" />
        <input onChange={change} value={input.age} name='age' type="text" />
        <button>send</button>
       </form>
       {state?.map((e)=>(<li key={e.id}>{e.name}</li>))}
        </div>
       
    )
}