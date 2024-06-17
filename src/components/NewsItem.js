import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="https://cdn.vox-cdn.com/thumbor/YyVeuW9KdnzSOyBrT8yVu8B_svI=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/10329947/jbareham_180301_2346_nintendo_switch_0094.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href="/newsdetail" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
        )
    }
}
