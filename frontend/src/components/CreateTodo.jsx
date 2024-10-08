import { useState } from "react";

export function CreateTodo() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return <div>
        <input style ={{
            padding : 10,
            margin : 10
            
        }} type="text" placeholder="Title"  onChange={(e)=> {
            const value =  e.target.value;
            setTitle(value)
        }}  /><br ></br>
        <input style={{
            padding : 10,
            margin : 10
            
        }} type="text" placeholder="Description"  onChange={(e) => {
            const value =  e.target.value;
            setDescription(value)
        }}  /><br /><br />

        <button style={{
            padding : 10,
            margin : 10,
            

        }} onClick={function ()  {
                fetch("http://localhost:3000/todos",{
                    method:"POST", 
                    body :JSON.stringify({
                        title: title,
                        description : description
                    }),
                    headers :{
                        "content-Type" : "application/json"
                    }
                }).
                    then(async (res) => {
                        const json = await res.json();
                        console.log(json)
                        alert("Todo Added");
                    })
            }
        }>Add Todo</button>
    </div>
}

