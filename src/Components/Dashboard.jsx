import React from 'react'

function Dashboard() {
    return (
        <div>
            <div style={{display:"flex"}}>
                <div  style={{color:"white",backgroundColor:"black",border:"2px solid white",width:"25%",height:"100vh"}}>
                <h1 className='roboto-bold'>Pocket Notes</h1>
                    <button>Add</button>
                </div>
                <div style={{backgroundColor:"#DAE5F5",border:"2px solid #DAE5F5",width:"75%",height:"100vh"}}>
                    <img style={{marginLeft:"auto",marginRight:"auto",display:"block"}} src="./images/logo.png" alt="" />
                <h1 className='roboto-bold' style={{textAlign:"center"}}>Pocket Notes</h1><br />
                <p className='roboto-medium' style={{textAlign:"center"}}>Send and receive messages without keeping your phone online.</p>
                <p className='roboto-medium' style={{textAlign:"center"}}>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
                <p className='roboto-medium' style={{position:"absolute",bottom:"0",left:"25%",right:"0",textAlign:"center"}}>end-to-end encrypted</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
