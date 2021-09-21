import React, { Component } from 'react';

class home extends Component{

    render() {
        return (
            <>
            <div style={{background : '#26282B'}}><br/> <br/></div>
             <div style={{marginLeft : '480px', marginTop  :'300px'}}>
                 <button style={{width : '150px', height : '40px', color : 'white', background : '#26282B', border : 'none' , cursor : 'pointer'}} onClick={()=> window.location='/home' }>User</button>
                 
                 <button style={{ marginLeft : '200px' ,width : '150px', height : '40px', color : 'white', background : '#26282B', border : 'none' , cursor : 'pointer'}}>Admin</button>
             </div>
             </>
        );
    }
}
export default home;