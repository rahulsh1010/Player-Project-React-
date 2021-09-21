import React, { Component } from 'react';
import axios from 'axios';
import '../Css/show.css'
class ShowPlayers extends Component{

    constructor(){
        super()

        this.state={
            Player : []
        }
    }

   async componentDidMount(){
    //    let Player= await fetch("http://localhost:8084/r1/getplayers", {method : 'GET'}, ).then(res=> res.json())
    let Player=await axios.get("http://localhost:8084/r1/getplayers").then(res=>  this.setState({Player :res.data}));
       
        console.log(Player);
    }

    render() {
        const Player=this.state.Player;
        return (
            <div>
            <div style={{background : '#26282B'}}><br/> <br/></div>
             <div className='card' style={{width : '900px', marginLeft : '300px', marginTop : '180px', background : '#353941'}}>
                  <div className='card-title'>
                    <h2 style={{marginLeft : '350px', marginTop : '20px', color : '#90B8F8'}}>Player List</h2>
                  </div>
                  <div className='card-body'>
                  <table class="table" style={{background : '#26282B', color : 'white'}}>
                    <thead style={{padding : '10px'}}>
                      <tr>
                     <th scope="col">Id</th>
                     <th scope="col">Name</th>
                     <th scope="col">Age</th>
                    <th scope="col">Nationality</th>
                    <th scope="col">No of Tournaments</th>
                     </tr>
                    </thead>
                        {Player.map(player => 
                        <tbody >
                            <th scope="row">{player.id}</th>
                            <td>{player.name}</td>
                            <td>{player.age}</td>
                            <td>{player.nationality}</td>
                            <td>{player.noOfTournaments}</td>
                        </tbody>)}
                        </table>
                  </div>
                        
             </div>
             <br/>
             <br/>
             <br/>
             <br/>
             <button style={{width : '150px', height : '40px',marginLeft : '1200px', color : 'white', background : '#26282B', border : 'none' , cursor : 'pointer'}} onClick={()=>window.location="/home"}>HOME</button>
  
             </div>
             
        );
    }
}
export default ShowPlayers;