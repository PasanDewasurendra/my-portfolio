import React, { Component } from 'react'
import profileImg from '../images/pkd.jpg';

export default class SideNavComponent extends Component {
    render() {
        return (
            <div className="col-md-3 col-lg-3 bg-dark">

                <img src={profileImg} className="mx-auto mt-5 d-block border rounded-circle border-primary shadow-sm" height="" width="45%" alt="Pasan Dewasurendra" />

                <hr className="bg-primary w-75 mt-5 p-1" />

                <nav class="nav flex-column p-5">
                    <button class="btn btn-secondary rounded-pill btn-lg p-2 m-2 active">Home</button>
                    <button class="btn btn-secondary rounded-pill btn-lg p-2 m-2" >About</button>
                    <button class="btn btn-secondary rounded-pill btn-lg p-2 m-2" >Resume</button>
                    <button class="btn btn-secondary rounded-pill btn-lg p-2 m-2" >Contact</button>
                </nav>
                                    
            </div>
        )
    }
}
