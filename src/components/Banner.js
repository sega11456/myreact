import React from 'react'
import './Banner.css'



function Banner() {
    return (
        <div className="banner-bg">
            <div className="container">
                <div className="banner-con">
                    <div className="banner-text">
                        <form>
                            <h2>Login</h2>
                            
                            <div className="banner-label">
                            <label>Username</label>
                            <input type="text" require></input>
                            </div>

                            <div className="banner-label">
                            <label>Password</label>
                            <input type="password" require></input>
                            </div>

                            <button className="loginbtn">Login</button>

                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Banner
