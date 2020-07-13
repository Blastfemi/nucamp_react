import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

// Week 3 - Task 2: Add a new functional component named RenderPartner inside AboutComponent.js
function RenderPartner({ partner }) {
    if (partner) {
        return (
            // Week 3 - Task 2: If so: return a <React.Fragment> component as the top level component inside the return statement. 
            <React.Fragment>
                {/* // Week 3 - Task 2: Inside the React Fragment component, add a self-closing <Media> component. Give this component a boolean attribute of object, an attribute src set to partner.image, an attribute alt set to partner.name, and a width of "150". Use curly braces around the JavaScript attribute values (partner.image, partner.name).  */}
                <Media object src={partner.image} alt={partner.name} width="150" />
                {/* // Week 3 - Task 2: Below this, and still within the React.Fragment component, add a second <Media> component. This one will have both a start and end tag. Give the start tag a boolean attribute of body and a className attribute of "ml-5 mb-4". */}
                <Media body className="ml-5 mb-4">
                    {/* // Week 3 - Task 2: Between the start and end tags (<Media> and </Media>) of the second Media component, add a third Media component. */}
                     {/* // Week 3 - Task 2: - For this third Media component, add a boolean attribute of heading. This Media component should have a start and end tag as well. Between the start and end tags, insert the partner's name. */}
                    <Media heading>{partner.name}</Media>
                    {/* // Week 3 - Task 2: After the closing tag of the third Media component, and still inside the second Media component's start and end tags, insert the partner's description.  */}
                    {partner.description}
                </Media>
            </React.Fragment>
        )
    }
    // Week 3 - Task 2: Otherwise, return an empty div element. 
    return <div />
}
function About(props) {
    // Week 3 - Task 2: In its parameter list, deconstruct a property named partner from the props object.
    const partners = props.partners.map( partner => {
        return (
            // Week 3 - Task 3: In the About component itself, find where the partners array is being created using the map method.
                // Week 3 - Task 3: Delete the current contents of the return statement.
                // Week 3 - Task 3: Inside the return statement, create a Media component with  both a start and end tag.
            // Week 3 - Task 3: In the start tag for the Media component created above, add an attribute of tag with the value of "li". Also give it a key attribute using the partner's id. 
            <Media tag="li" key={partner.id}>
                {/* // Week 3 - Task 3: Inside the start and end tags for this Media component, render the RenderPartner component. Pass to it the current partner object as a prop.  */}
                <RenderPartner partner={partner} />
            </Media>
        )
    });

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
                <div className="col mt-4">
                    <Media list>
                        {partners}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;