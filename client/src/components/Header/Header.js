import React from 'react';


const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="home">
                <img src="/FaceR.png" width="150" height="30" alt=""></img>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#test" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="test">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="home">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/About">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Newsletter">Newsletter</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;
