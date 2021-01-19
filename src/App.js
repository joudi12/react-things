import React from 'react';

import './App.css';

function Header(props){
  return(
    <header className='App' >
        <h1>Movies App</h1>
        <h2>Movies: {props.count}</h2>
    </header>
);
}

function Footer(props){
  return(
    <footer className='App'>
      <h2>{props.text}</h2>
    </footer>
  )
}

function ThingItem(props){
  return(
    <li>
      <h3>
        Name : {props.movie.name}
      </h3>
      <h3>
        Author : {props.movie.author}
      </h3>
    </li>
  )
}
function ThingList(props){
  return(
    <>
      <h1>The Movies</h1>
      <ul>
        {props.moviesList.map(item => <ThingItem movie = {item}/>)}
      </ul>
    </>
  )

}

class MoviesForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name : "",
      author :""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render(){
    return(
      <div>
        <h2>Add A New movies</h2>
        <form onSubmit={this.handleSubmit} id='form'>
          <label> Insert A Name
            <input type="text" id = 'name' onChange={this.handleChange}></input>
          </label>
          <label> Insert An Author
            <input id='author' type="text" onChange={this.handleChange}></input>
          </label>

          <input type="submit" value="Add" />
        </form>
    </div>
    )
  }

  handleChange(event){
    console.log(event.target.value)
    console.log(document.getElementById('author').value)

    this.setState({
      
      name:document.getElementById('name').value,
      author: document.getElementById('author').value
    });
  }


  handleSubmit(event){
    event.preventDefault();
    this.props.CreateMovies(this.state);
    // document.getElementById('form').reset()
  }
}
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      thingList: [
        {
          id:1,
          name:"Harry Potter",
          author:"J.K. Rowling"
        },
        {
          id:2,
          name:"Willy Wonka",
          author:"Roald Dahl"
        },
        {
          id:3,
          name:"Watership Down ",
          author:"Martin Rosen"
        }
      ],
    };
   
  }
  handelCreateMovies(item){
    this.state.thingList.push({id:this.state.thingList.length+1, name:item.name, author: item.author})
    this.setState({movie:this.state.thingList})
    console.log(this.state.thingList)
  }
  render(){
    return(
      <div >
        <Header count= {this.state.thingList.length}/>
        <MoviesForm  CreateMovies = {(item)=> this.handelCreateMovies(item)}/>
        <ThingList  moviesList = {this.state.thingList}/>
        <Footer text = "@CopyRight  ASAC "/>
      </div>
    )
  }
}

export default App;
