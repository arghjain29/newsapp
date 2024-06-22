import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class navbar extends Component {

    selectCountry = (country) => {
        this.props.onCountryChange(country);
      };


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" exact to="/">NewsMonkey</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link to="/business" className="nav-link">Business</Link></li>
                                <li className="nav-item"><Link exact to="/entertainment" className="nav-link">Entertainment</Link></li>
                                <li className="nav-item"><Link to="/health" className="nav-link">Health</Link></li>
                                <li className="nav-item"><Link to="/science" className="nav-link">Science</Link></li>
                                <li className="nav-item"><Link to="/sports" className="nav-link">Sports</Link></li>
                                <li className="nav-item"><Link to="/technology" className="nav-link">Technology</Link></li>
                            </ul>

                        </div>
                        <div className="dropdown mx-2">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Country
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenu2">
                                <li><button className="dropdown-item" type="button" onClick={() => this.selectCountry('in')}>India</button></li>
                                <li><button className="dropdown-item" type="button" onClick={() => this.selectCountry('us')}>USA</button></li>
                                <li><button className="dropdown-item" type="button" onClick={() => this.selectCountry('jp')}>Japan</button></li>
                                <li><button className="dropdown-item" type="button" onClick={() => this.selectCountry('ru')}>Russia</button></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
