import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const[data,changeData] = useState
    (
        [
        {"name":"RIK","Rollno":1},
        {"name":"Siva","Rollno":2},
        {"name":"Orwel","Rollno":3},
        {"name":"jithi","Rollno":4},
        {"name":"Elsa","Rollno":5},
        {"name":"Uncjo","Rollno":6},
        {"name":"wilson","Rollno":7},
    ]
)
  return (
    <div>

<Navbar/>
      <h1><center>Student Details</center></h1>
      
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-5">
                    {data.map(
                        (value,index)=>{
                            return  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <div class="card-body">   
                            <h5 class="card-title">{value.name}</h5>
                            <p class="card-text">Rollno:{value.Rollno}</p>
                            </div>
                        </div>
                        }
                    )
                    }
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll