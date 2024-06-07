import React from 'react'
import Navbar from './Navbar'

const DeleteStudents = () => {
  return (
    <div>
        <Navbar/>
 <div className="containter">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-4">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                           <center> <label htmlFor="" className="form-label">DELETE STUDENTS</label></center>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <center><button className="btn btn-danger">DELETE</button></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default DeleteStudents