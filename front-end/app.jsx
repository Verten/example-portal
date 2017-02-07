import React from "react"
import ReactDOM from "react-dom"
// import Hello from "./hello.jsx"
import LoginComponent from "./src/components/LoginComponent.jsx"

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div id="app">
            <LoginComponent/>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))