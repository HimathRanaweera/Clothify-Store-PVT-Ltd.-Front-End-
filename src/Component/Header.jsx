import React from 'react'

import './Header.css'
import { } from 'bootstrap/dist/css/bootstrap.min.css'
import { } from 'bootstrap/dist/js/bootstrap.js'
import SingUp from './SingUp'
// import Footer from './Footer'
// import Home from './Home'
// import About from './About'
// import SingUp from './SingUp'
// import Login from './Login'
import Home from './Home'
import './Header.css'

function Header() {
    return (

        <div>
           <header class="py-5   mb-auto  border-bottom">
                <div class="container d-flex flex-wrap justify-content-center">
                    <a href="/" class="d-flex align-items-center   mb-3  mb-lg-0  me-lg-auto link-body-emphasis text-decoration-none">
                        <img class="logo bi me-auto  " width="100" height="60" src=".\src\images\Black White Elegant Feminine Fashion Clothing Logo\1.png"/>
                        
                        <span class="fs-3"> <h1> Clothify Store</h1></span>
                        
                    </a>
                    
                    <form class="col-14 col-lg-5  mb-3 mb-lg-0" role="search">
                        <input type="search" class="form-control" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </header>
<hr />

            <nav class="py-2 bg-body-tertiary border-bottom">
                <div class="container d-flex flex-wrap">
                    <ul class="nav me-auto">
                        <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-4 active" aria-current="page">Home</a></li>
                        <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-4">Features</a></li>
                        <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-4">Pricing</a></li>
                        <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-4">FAQs</a></li>
                        <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-4">About</a></li>
                    </ul>
                    <ul class="nav align-items-end ">
                        <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-4">Login</a></li>
                        <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-4">Sign up</a></li>
                    </ul>
                </div>
            </nav>
            {/* <nav class="py-2 bg-body-tertiary border-bottom">
                <div class="container d-flex flex-wrap">
                    <ul class="nav me-auto">
                        <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2 active" aria-current="page">Home</a></li>
                        <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">Features</a></li>
                        <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">Pricing</a></li>
                        <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">FAQs</a></li>
                        <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">About</a></li>
                    </ul>
                    <ul class="nav">
                        <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">Login</a></li>
                        <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">Sign up</a></li>
                    </ul>
                </div>
            </nav>
            <header class="py-3 mb-4 border-bottom">
                <div class="container d-flex flex-wrap justify-content-center">
                    <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
                        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap" /></svg>
                        <span class="fs-4">Clothify Story</span>
                    </a>
                    <form class="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
                        <input type="search" class="form-control" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </header> */}
          
        </div>
        
    )
}

export default Header
