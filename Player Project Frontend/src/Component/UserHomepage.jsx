import React, { Component } from 'react';
class homepage extends Component{

    render() {
        return (
             <>
             <div style={{background : '#26282B'}}><br/> <br/></div>
             <div className='row' style={{marginTop : '200px'}}>
             <div className='col-3'>
             <div className='card' style={{width : '250px', height : '200px', marginLeft : '40px',  background : '#353941'}}>
             <div style={{marginTop : '50px', marginLeft : '50px'}}>
             <h3 style={{ color : '#90B8F8', marginLeft  : '10px'}}>Add Player</h3>
                 <button className='btn btn-primary'  style={{width : '150px', background : '#26282B', border : 'none' , cursor : 'pointer'}} onClick={()=>window.location="/add"}>SAVE</button>
             </div>
    </div>
             </div>
             <div  className='col-3'>
             <div className='card' style={{width : '250px', height : '200px',  marginLeft : '40px',  background : '#353941'}}>
             <div style={{marginTop : '50px', marginLeft : '40px'}}>
             <h3 style={{ color : '#90B8F8',marginLeft : '2px'}}>Delete Player</h3>
                 <button  className='btn btn-primary'  style={{width : '150px', background : '#26282B', border : 'none' , cursor : 'pointer', marginLeft : '10px'}} onClick={()=>window.location="/delete"}>DELETE</button>
             </div>
    </div>
             </div>
             <div className='col-3'>
             <div className='card' style={{width : '250px', height : '200px',  marginLeft : '40px',  background : '#353941'}}>
             <div style={{marginTop : '50px', marginLeft : '40px'}}>
             <h3 style={{ color : '#90B8F8'}}>Update Player</h3>
                 <button className='btn btn-primary'  style={{width : '150px', background : '#26282B', border : 'none' , cursor : 'pointer', marginLeft  : '10px'}} onClick={()=>window.location="/update"}>UPDATE</button>
             </div>
    </div>
             </div>
    <div className='col-3'>
    <div className='card' style={{width : '250px', height : '200px',  marginLeft : '40px',  background : '#353941'}}>
             <div style={{marginTop : '50px', marginLeft : '30px'}}>
             <h3 style={{ color : '#90B8F8'}}>View Player List</h3>
                 <button className='btn btn-primary'  style={{width : '150px', background : '#26282B', border : 'none' , cursor : 'pointer',  marginLeft  : '25px'}} onClick={()=>window.location="/show"}>SHOW</button>
             </div>
    </div>
    </div>
  
  
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <button style={{width : '150px', height : '40px',marginLeft : '1200px', color : 'white', background : '#26282B', border : 'none' , cursor : 'pointer'}} onClick={()=> window.location='/'}>USERS</button>
             </>
        );
    }
}
export default homepage;