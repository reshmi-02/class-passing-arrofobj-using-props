import React,{Component} from 'react'
import Classchild from './classchild.js'
class Classparent extends Component{
    render(){
        const a="Reshmi"
        const object={
            age:23
        }
        const array=[1,2,3,4,5]
        const aob=[
            {
                id:1,
                name:"preetha"
            },
            {
                id:2,
                name:"vijitha"
            },
            {
                id:3,
                name:"kavitha"
            }
        ]
        return(
            <div>
                <Classchild name={a} obj={object} arr={array} arrofobj={aob}/>
            </div>
        )
    }
}

export default Classparent