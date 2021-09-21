import React, { Component } from 'react';
import '../Css/AddPlayer.css'
// import Alert from 'react-s-alert';
class AddPlayer extends Component{

    constructor(props){
        super(props);

        this.state={
            message : '',
            loading : false,
            player: {
                name: '',
                age: '',
                noOfTournaments: '',
                nationality: ''

            }
        }
    }

    handleChange=(e)=>{
        const {player}=this.state;
        player[e.currentTarget.name]=e.currentTarget.value;
        this.setState({player})

    }

    handleSubmit=async(e)=>{
        e.preventDefault();
        const {player}=this.state;
        
     await fetch("http://localhost:8084/r1/upload", 
       { method : 'POST', 
         body : JSON.stringify(player), 
         headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        }).then(res => res.text().then(res=>this.setState({message : res, loading : true})) )
       console.log(this.state.message);
       alert(this.state.message)
       window.location="/add";
        // Alert.success(this.state.message, {
        //     position: 'top-right',
        //     effect: 'slide',
        //     beep: true,
        //     timeout: 3000,
        //     offset: 100
        // });
    }


  render(){
      const {player}=this.state;
      return(
          <>
          <div className='inputfield' style={{backgroundImage : './image1.jpg'}}>
          <div style={{background : '#26282B'}}><br/> <br/></div>
        
          <div className='row' style={{marginTop : '140px'}} >
            <div className='col-4' >
            </div>
          <div className='col-8' id='cardblock' >
          <div className='card' id='formblock' style={{padding :'10px', background : '#353941', width : '400px'}}>
          <h3 className='card-title' style={{marginLeft : '80px', color : '#90B8F8',marginBottom : '20px'}}>Add Player Details </h3>
          <form>
          <div className='mb-3'>
          <span style={{display :'inline', color : '#90B8F8'}}>Player Name : </span>
          <input style={{display :'inline', width :'170px' , background : '#5F85DB', marginLeft :'10px'}} name="name" className="form-control" value={player.name} type='text' placeholder="Name" onChange={this.handleChange}/>
          </div>
          <div className='mb-3'>
          <span style={{display :'inline', color : '#90B8F8'}}>Player Age : </span>
          <input style={{display :'inline', width :'170px' , background : '#5F85DB', marginLeft :'10px'}} name='age' className="form-control" value={player.age} placeholder="Age" onChange={this.handleChange} />
          </div>
          <div className='mb-3' >
          <span style={{display :'inline', color : '#90B8F8'}}>Tournaments Played : </span>
          <input style={{display :'inline', width :'170px',  background : '#5F85DB', marginLeft :'10px'}} name='noOfTournaments' className="form-control" value={player.noOfTournaments} onChange={this.handleChange} placeholder="Tournaments" />
             
          </div>
          <div className='mb-3'>
          <span style={{display :'inline', color : '#90B8F8'}}>Nationality : </span>
          <input style={{display :'inline', width :'170px' , background : '#5F85DB', marginLeft :'10px'}} name='nationality' className="form-control" value={player.nationality} onChange={this.handleChange} type='text' placeholder="Nationality" />
          </div>
             <button style={{width : '150px', marginLeft : '110px', marginTop : '20px', marginBottom : '10px', background : '#26282B', border : 'none' , cursor : 'pointer'}} type='submit' className='btn btn-primary'  onClick={this.handleSubmit}>Save</button>
          </form>
          </div>
          
          </div>
          </div>
          <br/>
          <br/>
          <br/>
          <button style={{width : '150px', height : '40px',marginLeft : '1200px', color : 'white', background : '#26282B', border : 'none' , cursor : 'pointer'}} onClick={()=>window.location="/home"}>HOME</button>
          </div>
          <footer style={{color : 'white', background : '#26282B', height : '80px', paddingLeft : '580px', paddingTop : '15px'}}>Created By <i>Rahul Sachan</i> </footer>
          </>
      )
  }

}
export default AddPlayer;