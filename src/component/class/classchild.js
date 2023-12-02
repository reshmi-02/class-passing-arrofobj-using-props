import React,{Component} from "react";

class Classchild extends Component{
    render(){
        let value=this.props
        return(
            <div>
                <h1>Passing values using props in class component</h1>
                <h4>1)name</h4>
                <p>{value.name}</p>
                <h4>2)object</h4>
                <p>{value.obj.age}</p>
                <h4>3)array</h4>
                <p>{value.arr[2]}</p>
                <h4>4)array of object</h4>
                {
                    value.arrofobj.map((e,i)=>{
                        return(
                            <div key={i}>
                                <p>{e.id}){e.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Classchild