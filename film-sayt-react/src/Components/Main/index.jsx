import React from 'react'
import "./index.css"
import CardForFilm from '../CardsForFilm'
import CardForTickets from '../CardsForTickets'

function Main() {
  return (
    // main start 
    <main>
    {/* section header start  */}
    <section id='header'> 
<div className="fim-festival">
<div className="film-start">
    <div className="content-start">
    <h2 className='start-text'>Film festival 2022 starts april</h2>
    <div className="kletki"><img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-border-img.png" alt="" /></div>
    <p className='data-text'>Rome / 3 Locations / Seven days</p>
</div>
</div>

<div className="back-to-nature">
    <div className="back-content">
        <p className='select-text'>select production presents</p>
        <h2 className='back-title'>back to nature</h2>
        <p className='author-text'>written and directed by Haruki Tanakal/ Ireland 2012</p>
        <div className='best'>
<img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon1.png" alt="" />
<img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon2.png" alt="" />
<img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-rev-icon3.png" alt="" /></div>

<div className="play">
    <div className="play-cont">
    <p className='play-t'>Play<i class="fa-solid fa-play"></i></p>
</div>
<div className="btng">
  <a href="">Get Tickets</a>
</div>
        </div>
    </div>
</div>
</div>
    </section>
{/* section header end  */}
{/* section with 6 card start   */}
<section id='card6for'>
<div className='container'>
<div className="grid-cards">
    <div className="grid-card card1" >
        <a href="">
<h5 className='title-card5'>flora</h5>
<h6 className='title-card6'>Hodor Uman / Norway</h6>
        </a>
    </div>


    <div className="grid-card card2" >
        <a href="">
<h5 className='title-card5'>thr fifth day</h5>
<h6 className='title-card6'>Hodor Uman / Norway</h6>
        </a>
    </div>


    <div className="grid-card card3" >
        <a href="">
<h5 className='title-card5'>the violen teacher</h5>
<h6 className='title-card6'>Hodor Uman / Norway</h6>
        </a>
    </div>

    <div className="grid-card card4" >
        <a href="">
<h5 className='title-card5'>the strangle lives</h5>
<h6 className='title-card6'>Hodor Uman / Norway</h6>
        </a>
</div>


    <div className="grid-card card5" >
        <a href="">
<h5 className='title-card5'>blueberries</h5>
<h6 className='title-card6'>Hodor Uman / Norway</h6>
        </a>
    </div>

    <div className="grid-card card6" >
        <a href="">
<h5 className='title-card5'>song of my people</h5>
<h6 className='title-card6'>Hodor Uman / Norway</h6>
        </a>
</div>

</div>
</div>
</section>
{/* section with 6 card end  */}
{/* festival proqram section start  */}
<section id='festival-proqram'>

    <div className="container">




<div className="proqram-cards">
<div className="fest">Festival Proqramme</div>

<div className="proqram-card">
    <span className="may">07 may</span>
    <h5 className="proqram-title">the piano teacher</h5>
    <span className="proqram-time">11:00/15:00/19:30</span>
    <div className="have-info">
    <div className="view">
    <a className="view-more" href="">View More<i class="fa-solid fa-arrow-right-long"></i></a></div>
    <div className="btnp">
  <a href="">Get Tickets</a>
</div>
</div>
</div>

<div className="proqram-card">
    <span className="may">07 may</span>
    <h5 className="proqram-title">the songs of my father</h5>
    <span className="proqram-time">11:00/15:00/19:30</span>
    <div className="have-info">
    <div className="view">
    <a className="view-more" href="">View More<i class="fa-solid fa-arrow-right-long"></i></a></div>
    <div className="btnp">
  <a href="">Get Tickets</a>
</div>
</div>
</div>

<div className="proqram-card">
    <span className="may">08 may</span>
    <h5 className="proqram-title">strawberries</h5>
    <span className="proqram-time">11:00/15:00/19:30</span>
    <div className="have-info">
    <div className="view">
    <a className="view-more" href="">View More<i class="fa-solid fa-arrow-right-long"></i></a></div>
    <div className="btnp">
  <a href="">Get Tickets</a>
</div>
</div>
</div>

<div className="proqram-card">
    <span className="may">09 may</span>
    <h5 className="proqram-title">the strange love of ana & marco</h5>
    <span className="proqram-time">11:00/15:00/19:30</span>
    <div className="have-info">
    <div className="view">
    <a className="view-more" href="">View More<i class="fa-solid fa-arrow-right-long"></i></a></div>
    <div className="btnp">
  <a href="">Get Tickets</a>
</div>
</div>
</div>
</div>
</div>
</section>
{/* festival proqram section end  */}

{/* audience choice section start */}
<section id='audience-choice'>
    <div className="container-choice">
        <div className="cont">
            <div className="au-vid">
                <h6 className="aud-title">audience choice</h6>
                <div className="video-content">
<div className="video-div">
    <video src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/home4-video.mp4" controls  autoplay loop muted="muted" playsinline controlslist="nodownload"></video>
</div>
<div className="content-v">
    <p className="text-vi">documentary</p>
    <h2 className="vid-title">life on the island </h2>
    <p className="text-video">documentary film by Mirela Bagaric / Croatia 2021 </p>
<div className="best-v">
    <div className="bestvi">
    <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-icon1.png" alt="" /></div>
    <div className="bestvi">
    <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/h4-icon2.png" alt="" /></div>
</div>
</div>

                </div>
            </div>
        </div>
    </div>
</section>
{/* audience choice section end */}
{/* section for cards film start  */}
<section id='film-card-ap'>
<div className="film-cards">
    <h6 className="aud-title">popular movies</h6>

<CardForFilm></CardForFilm>
</div>
</section>
{/* section for cards film end  */}
{/* maqazine section start  */}
<section id='maqazine'>
<div className="maqazine-container">
    <div className="maqazine-content">
        <h6 className="maqazine-title">magazine</h6>
        <div className="prod-dec">
        <a className="producers" href="">producers</a>
        <a className="december" href="">december 10</a>
        </div>
        <h3 className="maqazine-titleh3">Interview with movie producer Paul Gange </h3>
        <p className="maqazine-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="btnview">
            <a href="">View More</a>
        </div>
    </div>
    <div className="image-maqazine">
        <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/12/blog-list-h4.jpg" alt="" />
    </div>
</div>
</section>
{/* maqazine section end  */}
{/* tickets section start  */}
<section id='ticket'>
<div className="cont-tick">
    <h6 className="title-tick">
        tickets
    </h6>
    <div className="ticket-cards">
        <CardForTickets></CardForTickets>
    </div>
</div>
</section>
{/* tickets section end */}
{/* attachment section start  */}
<section id='attachment'>
    <div className="attachs">
<div className="attac">
    <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-1.png" alt="" />
</div>
<div className="attac">
    <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-2.png" alt="" />
</div>
<div className="attac">
    <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-3.png" alt="" />
</div>
<div className="attac">
    <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-4.png" alt="" />
</div>
<div className="attac">
    <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-5.png" alt="" />
</div>
<div className="attac">
    <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-6.png" alt="" />
</div>
<div className="attac">
    <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-7.png" alt="" />
</div>
<div className="attac">
    <img src="https://coppola.qodeinteractive.com/wp-content/uploads/2021/11/client-img-8.png" alt="" />
</div>
</div>
</section>
{/* attachment section end */}
    </main>
    // main end 
  )
}

export default Main