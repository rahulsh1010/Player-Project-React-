import React, { Component } from 'react';
import '../Css/UpdatePlayer.css'
class UpdatePlayer extends Component{

    constructor(){
        super()
        this.state={
            player  : {
                id : '',
                name: '',
                age: '',
                noOfTournaments: '',
                nationality: ''
            },
            Player : [],
            id : []
        }
    }

    async componentDidMount(){
        const Player= await fetch("http://localhost:8084/r1/getplayers", {method : 'GET'}, ).then(res=> res.json())
        this.setState({Player});

    }

    handleChange=(e)=>{
        const {player}=this.state;
        player[e.currentTarget.name]=e.currentTarget.value;
        this.setState({player});
    }
    handleSubmit=async(e)=>{
        e.preventDefault();
        const {player}=this.state;
        await fetch("http://localhost:8084/r1/update", 
       { method : 'POST', 
         body : JSON.stringify(player), 
         headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        }).then(res => res.text().then(res=>this.setState({message : res})) )
        alert(this.state.message);
        window.location="/update"
    }

    render(){
        const Player=this.state.Player;
        const player=this.state.player;
        return(
            <>
            <div style={{background : '#26282B'}}><br/> <br/></div>
            <div className='row'>
            <div className='col-12' >
            <div className='card' id='maindiv' style={{width : '400px', marginLeft : '500px', marginTop : '130px', background : '#353941' }}>

<div style={{padding : '10px'}}>
<h3 style={{color : '#90B8F8', marginLeft  :'20px'}}>Update Player Information</h3>
<div style={{marginBottom : '20px', marginLeft : '110px', marginTop : '10px'}}>
    <select style={{width : '150px', height : '30px', background : '#5F85DB', color : 'black'}} name='id' id='selecttab' value={player.id} onChange={this.handleChange}>
    <option>Select Id</option>
    {Player.map(p=> <option value={p.id}>{p.id}</option>)}
    </select>
</div>

 <form>
<div className='mb-3'>
<span style={{display :'inline' , color : '#90B8F8'}}>Player Name : </span>
<input  style={{display :'inline', width :'170px' , background : '#5F85DB', marginLeft :'10px'}} name="name" className="form-control" value={player.name} type='text' placeholder="Name" onChange={this.handleChange}/>
</div>
<div className='mb-3'>
<span style={{display :'inline' , color : '#90B8F8'}}>Player Age : </span>
<input  style={{display :'inline', width :'170px', background : '#5F85DB' , marginLeft :'22px'}} name='age' className="form-control" value={player.age} placeholder="Age" onChange={this.handleChange} />
</div>
<div className='mb-3' >
<span style={{display :'inline', color : '#90B8F8'}}>Tournaments Played : </span>
<input  style={{display :'inline', width :'170px' , background : '#5F85DB', marginLeft :'10px'}} name='noOfTournaments' className="form-control" value={player.noOfTournaments} onChange={this.handleChange} placeholder="Tournaments" />
 
</div>
<div className='mb-3'>
<span style={{display :'inline' , color : '#90B8F8'}}>Nationality : </span>
<input  style={{display :'inline', width :'170px' , background : '#5F85DB', marginLeft :'10px'}} name='nationality' className="form-control" value={player.nationality} onChange={this.handleChange} type='text' placeholder="Nationality" />
</div>
 <button style={{width : '150px', marginLeft : '110px', marginTop : '20px', marginBottom : '10px',  background : '#26282B', border : 'none' , cursor : 'pointer'}} type='submit' className='btn btn-primary' onClick={this.handleSubmit}>Update</button>
</form>
</div>

</div>
<br/>
<br/>
 <button style={{width : '150px', height : '40px',marginLeft : '1200px', color : 'white', background : '#26282B', border : 'none' , cursor : 'pointer'}} onClick={()=>window.location="/home"}>HOME</button>
          
            </div>
           
            </div>
          </>
        )
    }
}
export default UpdatePlayer;