http://aircconline.com/ijnsa/V9N3/9317ijnsa01.pdf
import React, { Component } from 'react';
import './App.css';
const list=[
  {
    title:"React.js",
    url:"https://reactjs.org",
    author:"Jordan Walke",
    num_commnets:3,
    points:4,
    objectId:0,
  },
  {
    title:"ReactNative.js",
    url:"https://reactjs.org",
    author:"Jordan Walke",
    num_commnets:3,
    points:4,
    objectId:1,
  },
  {
    title:"Express.js",
    url:"https://reactjs.org",
    author:"Jordan Walke",
    num_commnets:3,
    points:4,
    objectId:2,
  }
];
var stationary=[
  {
    id:1,
    name:"pencil",
    url:"https://pencil.com",
    writer:"Anonumus",
    comments:20,
    reactions:3,
  }
];
const apitizers=[
  {
    api_id:0,
    api_name:"Mayo Ketcup",
    api_category:"Liquid"
  },
  {
    api_id:1,
    api_name:"Mayo Garlic",
    api_category:"Solid"
  }
];
// function isSearched(searchTerm){
//   return function (item){
//     return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//   }
// }
const isSearched=searchTerm=> item =>
item.title.toLowerCase().includes(searchTerm.toLowerCase());
//destructuring of objects
const destructureObject={
  firstname:"Hira",
  lastname:"Muhammad Zahid",
  herage:"21",
}
const book={
  title:"Book of GOD",
  edition:"edition 2",
  price:300,
}
const {
  title,
  edition,
  price
}=book;
const {
  firstname,
  lastname,
  herage
}=destructureObject;
console.log(title, " ", edition," ", price);
console.log(firstname ," ", lastname," ",herage);

//destructuring arrays
const colors=["Green","Blue","Red"];
const [
  first,
  second,
  third,
]=colors;
console.log(first,second,third);
const location=["North Karachi","North Nazimabad","Gulberg"];
const [
  loc1,
  loc2,
  loc3
]=location;
console.log(loc1,loc2,loc3);
class App extends Component{
  constructor(props){
    super(props);
    this.state={
   list,
   stationary,
   apitizers,
   searchedTerm:"",
    };
    this.onDissmiss=this.onDissmiss.bind(this);
    this.onSearchChange=this.onSearchChange.bind(this);
  }
  onDissmiss(id){
    const isNotId=item=>item.objectId!==id;
    const updatedList=this.state.list.filter(isNotId);
    this.setState({list:updatedList});
  }  
  deleteApi(apit_id){
    const inot=mol=>mol.api_id!==apit_id;
    const update=this.state.apitizers.filter(inot);
    this.setState({apitizers:update});
  }
  onSearchChange(event){
this.setState({searchedTerm:event.target.value});
  }
  render(){
    const{
      list,
      apitizers,
      searchedTerm,
    }=this.state;
    return(
      <div className="page">
        <div className="interactions">
        <Search
        onChange={this.onSearchChange}
        value={searchedTerm}
        >
          Search
          </Search>
        </div>
        <Table
        list={list}
        pattern={searchedTerm}
        onDissmiss={this.onDissmiss}
        >I am table children prop of filtered list</Table>
     
  <BindClass/>
  <SearchTerm/>
        

  <div>
    {apitizers.map(api=>
      <div key={api.api_id}>
  <span>This is {api.api_name} it belongs to {api.api_category} category.</span>
  <button onClick={()=>this.deleteApi(api.api_id)}>Delete Apitizer</button>
 {/* event handlers */}
  <button onClick={console.log(api.api_id)}>auto function</button>
  <button onClick={console.log(api)}>auto </button>
  <button onClick={function(){console.log(api.api_category)}}>onTriggeringMe</button>
  <button onClick={()=>console.log(api.api_name)}>fat arrow on triggering</button>
      </div>)}
  </div>
</div>

    )
  }
}
export default App;
class BindClass extends Component{
  constructor(){
    super();
    this.onclickMe=this.onclickMe.bind(this);
    this.doSomethinfElse=this.doSomethinfElse.bind(this);
    this.doSomething=this.doSomething.bind(this);
  }
  onclickMe(){
      console.log(this);
  }
  doSomethinfElse(){

  }
doSomething(){

}
  render(){
      return(
      <div>
          <Button onClick={this.onclickMe} type="button">Child check Me </Button>
      </div>);
  }
}
const houseHolds=
[
  {
    id:0,
    name:"Scissor",
  },
  {
    id:1,
    name:"Machine",
  },
  {
    id:2,
    name:"Knife",
  },
  {
    id:3,
    name:"Juicer Machine",
  },
];

const onhhchange=val=>item=>
item.name.toLowerCase().includes(val.toLowerCase());
class SearchTerm extends Component{
  counter=0;
  constructor(props){
    super(props);
    this.state={
      houseHolds,
      hhsearch:"",
      counter:props.counter,
    }
    this.onhouseholdSearch=this.onhouseholdSearch.bind(this);
  }
  static getDerivedStateFromProps(nextprops,previousState){
    console.log("Software  Engineer ",nextprops,previousState);
    if(nextprops.counter){
      return nextprops.counter;
    }
  }
  onhouseholdSearch(e){
    this.setState({hhsearch:e.target.value});
  }
  render(){
      const {
        houseHolds,
        hhsearch,
            }=this.state;
          return(
                  
                  <div>
                    <form>
                    <input type="text" onChange={this.onhouseholdSearch}/>
                  </form>
                      {houseHolds.filter(onhhchange(hhsearch)).map(hh=>
                      <div key={hh.id}><h1>{hh.name}</h1></div>
                      )}
                  </div>
                )
           }
}

const Search=({value,onChange,children})=>{
    return(
      <form>
       <h1>Interaction  With Forms And Events</h1>
       {children}
       <input
             type="text" 
             onChange={onChange}
              placeholder="Type here" 
              value={value}
              />
       <h1>Form Ended here</h1>
     </form>
    )
};

const Table=({list,pattern,onDissmiss,children})=>{
    return(
      <div className="table">
        {children}
        <h1>Table</h1>
        {list.filter(isSearched(pattern)).map(item=>
        <div key={list.objectId} className="table-row">
        <span style={{width:'40%'}}><a href={item.url}>{item.title}</a></span>
        <span style={{width:'30%'}}>{item.author}</span>
        <span style={{width:'10%'}}>{item.num_commnets}</span>
        <span style={{width:'10%'}}>{item.points}</span>
        <Button onClick={()=>onDissmiss(item.objectId)}  className="button-inline">Dissmiss Me</Button>
        </div>
        )
        }
      </div>
    )
}

const Button=({onClick,className="",children}) =>{
    return(
      <button
      onClick={onClick}
      className={className}
      type="button"
      >
        {children}
      </button>
    )
  }


