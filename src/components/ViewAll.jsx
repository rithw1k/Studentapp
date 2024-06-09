import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
//   const fetchData=()=>{
   // axios.get().then().catch().finally()
//}
const ViewAll = () => {
    const [data, changeData] = useState([])
    const fetchData=()=>{
        axios.get("https://anishpdm.github.io/dummy-api-new/student.json").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>

            <Navbar />
            <h1><center>Student Details</center></h1>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-5">
                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        
                                        <div class="card-body">
                                            <h5 class="card-title">{value.firstname} {value.lastname}</h5>
                                            <p class="card-text">{value.course}</p>
                                            <p class="card-text">{value.mobile}</p>
                                            <p class="card-text">{value.email}</p>
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