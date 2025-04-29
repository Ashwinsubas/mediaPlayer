import React from 'react'
import { Link } from 'react-router'
import musicImage from '../assets/music.gif'
import { Card } from 'react-bootstrap'
import manageimage from '../assets/manage.jpg'
import categoryimage from '../assets/category.jpeg'
import historyimage from '../assets/history.jpeg'
import leopic from '../assets/leoss.png'

const Landing = () => {
  return (
    
    <div className='container'>

    {/* {Welcome section} */}
      <div className="row align-items-center">
        <div className="col-lg-4">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>

          <p className='mt-3' style={{textalign:'justify'}}>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
        <Link className='btn btn-primary' to={'/home'}>Get-Start</Link>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-6">
          <img src={musicImage} alt="" />
        </div>
      </div>
      {/* {Feature Section} */}

      <div className="my-3">

        <h3 className='text-center'>Features</h3>

        <div className="row align-items-center text-center">
          <div className="col-lg-4">
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={categoryimage} />
      <Card.Body>
        <Card.Title>Manage Video</Card.Title>
        <Card.Text>
        User can manage all the videos in the app.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          
          <div className="col-lg-4">
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={historyimage} />
      <Card.Body>
        <Card.Title>Categories Video</Card.Title>
        <Card.Text>
        User can categories all the videos.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>

          <div className="col-lg-4">
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={manageimage} />
      <Card.Body>
        <Card.Title>Manage History</Card.Title>
        <Card.Text>
          User can manage watch history of all videos.
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
        </div>
      </div>

      <div className="row border border-3 rounded">
        <div className="col-lg-5 p-3">
          <h2> <span className='text-warning'>Simple, Fast and Powerful</span></h2>
          <p><span className='fs-2 fw-bold'>Play everything:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <p><span className='fs-2 fw-bold'>Categories Video:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <p><span className='fs-2 fw-bold'>Managing History:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="col-lg-1"> </div>
        <div style={{width:'60vh', height:'60vh'}} className="col-lg-6 p-3">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Po3jStA673E?si=_vm9h9n6F0V8QZvF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-2"></div>
        <div className="col-lg-4"></div>
      </div>

    </div>
  )
}

export default Landing