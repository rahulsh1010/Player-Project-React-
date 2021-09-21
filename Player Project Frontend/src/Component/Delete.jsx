import React, { Component } from 'react';

class Delete extends Component{

    constructor(props){
        super(props);

        this.state={
            Player : [],
            id :'',
            player: {
                id : '',
                name: '',
                age: '',
                noOfTournaments: '',
                nationality: ''
            }
        }
    }
    async componentDidMount(){
        const Player= await fetch("http://localhost:8084/r1/getplayers", {method : 'GET'}, ).then(res=> res.json())
        this.setState({Player});

    }

    delete=async()=>{
            if(this.state.player.id==='')
            alert("Please select player Id to delete.");
            else{
        await fetch("http://localhost:8084/r1/delete/" +  this.state.player.id,
         {method : 'POST',
         headers: {
            "Content-type": "application/json; charset=UTF-8"}
        }) 
        alert("Player successfully deleted");
    window.location="/delete"}
        

    }

    handleChange=(e)=>{
        const {player}=this.state;
        player[e.currentTarget.name]=e.currentTarget.value;
        this.setState({player});
        // let {id}=this.state;
        // id=e.target.value;
        // this.setState({id});
    }



    render(){
        const Player=this.state.Player;
        const player=this.state.player;
        return(
            <>
            <div style={{background : '#26282B'}}><br/> <br/></div>
            <div>
            <div className='card' style={{width : '300px', marginLeft : '550px', marginTop : '250px', background : '#353941', borderRadius : '10px'}}>
                <div className='card-body'>
                <h3 className='card-title' style={{marginLeft : '50px', color : '#90B8F8'}}>Delete Player</h3>
                    <div>
                    <select style={{marginTop :'10px', marginBottom : '10px', marginLeft : '60px', width : '150px', height : '30px', background : '#5F85DB'}} name='id' value={player.id} onChange={this.handleChange}>
                    <option>Select Id</option>
                    {Player.map(p=> <option value={p.id}>{p.id}</option>)}
                    </select>
                    </div>
                    <button style={{marginLeft : '60px', marginBottom : '10px', marginTop : '10px', width : '150px', background : '#26282B', border : 'none' , cursor : 'pointer'}} className='btn btn-primary' type='submit' onClick={()=> this.delete()}>Delete</button>
                </div>
               
            </div>  
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <button style={{width : '150px', height : '40px',marginLeft : '1200px', color : 'white', background : '#26282B', border : 'none' , cursor : 'pointer'}} onClick={()=>window.location="/home"}>HOME</button>
          
            </div>   
            </>
        )
    }
}
export default Delete;