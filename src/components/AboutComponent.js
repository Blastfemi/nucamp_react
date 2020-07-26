import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
// Week 5 - Task 1: Import Loading & baseUrl
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
// Week 5 - Task 3: Import react-animation-components
import { Fade, Stagger } from 'react-animation-components';

function RenderPartner({ partner }) {
  if (partner) {
    return (
      <React.Fragment>
      {/* // Week 5 - Task 1: Update to utilize baseUrl */}
        <Media object src={ baseUrl + partner.image} alt={partner.name} width="150" />
        <Media body className="ml-5 mb-4">
          <Media heading>{partner.name}</Media>
          {partner.description}
        </Media>
      </React.Fragment>
    );
  }
  return <div />;
}

// Week 5 - Task 1: Create a new functional component named PartnerList that takes props as its argument. Take the declaration of const partners from the top of the About component and move it into this component.
function PartnerList(props) {
  const partners = props.partners.partners.map( partner => {
      return (
        // Week 5 - Task 3: Wrap the Fade component around the Media component in the callback function passed into the map method at the top of the PartnerList component. Make sure to move the key attribute up to the Fade component. 
        <Fade in key={partner.id}>
          <Media tag="li">
            <RenderPartner partner={partner}/>
          </Media>
        </Fade>
      );
    });
   
  // Week 5 - Task 1: Write an if statement to handle if the partners data is loading
  if (props.partners.isLoading) {
    return (
          <Loading />
    );
  }

  //  Week 5 - Tak 1: Write an if statement to handle if there was an error message while trying to load.
  if (props.partners.errMess) {
    return (
      <div className="col">
        <h4>{props.partners.errMess}</h4>
      </div>
    );
  }

  // Week 5 - Task 1: Under this, outside of any if statement, return a div with the className of "col mt-4". Inside this div, put a Media element with the "list" attribute. Inside this, embed the partners variable.
  return (
    <div className="col mt-4">
      <Media list>
        {/* // Week 5 - Task 3: wrap the Stagger component around the partners variable embedded inside the Media list component in the return statement for PartnersList.  */}
        <Stagger in>
          {partners}
        </Stagger>
      </Media>
    </div>
  )
}


function About(props) {

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>About Us</BreadcrumbItem>
          </Breadcrumb>
          <h2>About Us</h2>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-sm-6">
          <h3>Our Mission</h3>
          <p>We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.</p>
        </div>
        <div className="col-sm-6">
        <Fade in>
        	
        	  <Card>
              <CardHeader className="bg-primary text-white"><h3>Facts At a Glance</h3></CardHeader>
              <CardBody>
                  <dl className="row">
                     <dt className="col-6">Founded</dt>
                    <dd className="col-6">February 3, 2016</dd>
                    <dt className="col-6">No. of Campsites in 2019</dt>
                    <dd className="col-6">563</dd>
                    <dt className="col-6">No. of Reviews in 2019</dt>
                    <dd className="col-6">4388</dd>
                    <dt className="col-6">Employees</dt>
                    <dd className="col-6">42</dd>
                  </dl>
              </CardBody>
        	  </Card>
        </Fade>
        </div>
        <div className="col">
          <Card className="bg-light mt-3">
            <CardBody>
              <blockquote className="blockquote">
                <p className="mb-0">I will not follow where the path may lead, but I will go where there is no path, and I will leave a trail.</p>
                <footer className="blockquote-footer">Muriel Strode,{' '}
                  <cite title="Source Title">"Wind-Wafted Wild Flowers" -
                  The Open Court, 1903</cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Community Partners</h3>
        </div>
        {/* // Week 5 - Render the PartnerList component */}
        <PartnerList partners={props.partners}/>
      </div>
    </div>
  );
}

export default About;