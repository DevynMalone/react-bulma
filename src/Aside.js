import React, { Component } from 'react';
import './Aside.css';

const headerList = [
{
    title: 'Title 1',
    subTitle: 'Sub Title 1'
},{
    title: 'Title 2',
    subTitle: 'Sub Title 2'
},{
    title: 'Title 3',
    subTitle: 'Sub Title 3'
},{
    title: 'Title 4',
    subTitle: 'Sub Title 4'
},
]

const displayHeaderList = headerList.map((header,index)=>{
    return (
        <div class="hero-body" key={index} >
            <div class="container">
                <h1 class="title">
                    {header.title}
                </h1>
                <h2 class="subtitle">
                    {header.subtitle}
                </h2>
            </div>
        </div>
    )
})


class Aside extends Component {
    render () {
        return (
            <div>
                <section class="hero is-info">
        <div class="hero-body">
            <div class="container">
            {displayHeaderList}
                <h1 class="title">
                    Primary title
                </h1>
                <h2 class="subtitle">
                    Primary subtitle
                </h2>

            </div>
            
        </div>
    </section>
    <div class="columns">
        {/* <!-- Aside nav drawer --> */}
        <aside class="column is-3 is-hidden-mobile">
            <div class="panel">
                <p class="panel-heading has-text-centered">Main Heading Goes Here</p>
                <a class="panel-block">
                    <span class="panel-icon">
                        <i class="fa fa-home"></i>
                    </span>
                    <span class="name">Dashboard</span>
                </a>
                <a class="panel-block">
                    <span class="panel-icon">
                        <i class="fa fa-map-marker"></i>
                    </span>
                    <span class="name">Activity</span>
                </a>
                <a class="panel-block">
                    <span class="panel-icon">
                        <i class="fa fa-th-list"></i>
                    </span>
                    <span class="name">Timeline</span>
                </a>
                <a class="panel-block">
                    <span class="panel-icon">
                        <i class="fa fa-folder-o"></i>
                    </span>
                    <span class="name">Folders</span>
                </a>
                <hr/>
                <a class="panel-block">
                    <span class="panel-icon">
                        <i class="fa fa-comment-o"></i>
                    </span>
                    <span class="name">Comments</span>
                </a>
                <a class="panel-block">
                    <span class="panel-icon">
                        <i class="fa fa-envelope-o"></i>
                    </span>
                    <span class="name">Mail</span>
                </a>
                <a class="panel-block">
                    <span class="panel-icon">
                        <i class="fa fa-rss"></i>
                    </span>
                    <span class="name">RSS Feed</span>
                </a>
                <a class="panel-block">
                    <span class="panel-icon">
                        <i class="fa fa-database"></i>
                    </span>
                    <span class="name">Data</span>
                </a>
            </div>
        </aside>
        <section class="column">
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-8">
                    <div class="tile">
                        <div class="tile is-parent is-vertical">
                            <article class="tile is-child notification is-primary">
                                <p class="title">Vertical...</p>
                                <p class="subtitle">Top tile</p>
                            </article>
                            <article class="tile is-child notification is-warning">
                                <p class="title">...tiles</p>
                                <p class="subtitle">Bottom tile</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child notification is-info">
                                <p class="title">Middle tile</p>
                                <p class="subtitle">With an image</p>
                                <figure class="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/640x480.png"/>
                                </figure>
                            </article>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-danger">
                            <p class="title">Wide tile</p>
                            <p class="subtitle">Aligned with the right tile</p>
                            <div class="content">
                                {/* <!-- Content --> */}
                            </div>
                        </article>
                    </div>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-success">
                        <div class="content">
                            <p class="title">Tall tile</p>
                            <p class="subtitle">With even more content</p>
                            <div class="content">
                                {/* <!-- Content --> */}
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </div>

    <footer class="footer">
        <div class="container">
            <div class="content has-text-centered">
                <p>
                    <strong>Bulma</strong> by
                    <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                    <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed
                    <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                </p>
            </div>
        </div>
    </footer>
            </div>
        )
    }
}












export default Aside;