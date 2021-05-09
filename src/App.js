import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      items: [],
      text: "",
    }
  }

  addItem=(todoValue)=>{
    if(todoValue!==""){
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isCompleted: false
      }
      const updatedItems = [...this.state.items]
      updatedItems.push(newItem)
      this.setState({
      items: updatedItems,
      text: "",
    })
    }
  }

  removeItem=(id)=>{
    const list = [...this.state.items]
    const updatedItems = list.filter(item => item.id !==id)
    this.setState({items:updatedItems})
  }

  render(){
    return (
    <div>
      <div className="mainWrapper">
        <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 todoWrapper">

            <h1 className="text-center">Todo React App</h1>
            <p className="text-center" style={{color:"whitesmoke"}}>Created By Rishabh Gupta</p>
            {/**********Todo input starts here**********/}

            <div className="input-group addTodo">
              <input type="text" className="form-control" value={this.state.text} onChange={(e)=>(this.setState({text:e.target.value}))} placeholder="What's Your Plan ?" aria-label="Recipient's username with two button addons"/>
              <button className="btn btn-outline-secondary" type="button" onClick={()=>this.addItem(this.state.text)}>+</button>
            </div>

            {/**********Todo input ends here**********/}


            {/**********List of all todos starts here**********/}

            <div className="todos">
            <ul className="list-group">
              {
                  this.state.items.map(item=>
                  <li className="list-group-item todo" key={item.id}>
                    <input className="form-check-input me-1" id={item.id} type="checkbox" value="" aria-label="..."/>
                    <label htmlFor={item.id}>{item.value}</label>
                    <button className="btn btn-outline-secondary" style={{float:"right"}} type="button" onClick={()=>this.removeItem(item.id)}>X</button>
                  </li>)
              }
            </ul>
            </div>

          {/**********List of all todos ends here**********/}
          </div>

          <div className="col-md-4"></div>
        </div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
