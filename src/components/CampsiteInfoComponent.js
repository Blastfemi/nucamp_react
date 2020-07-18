import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


// Week 4 - Workshop Assignment: Task 3 - Form Validation
const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

// Week 4 - Workshop Assignment: Task 1 - Create a new class component named CommentForm
class CommentForm extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      isModalOpen: false,
    };
    
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

// Week 4 - Workshop Assignment: Task 2 - Toggle Modal 
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values) {
    this.toggleModal();
    // Week 4 - Workshop Assignment: Task 2 - Echo back the form inputs to you in an alert as well as in a console.log
    console.log("Current state is: " + JSON.stringify(values));
    alert("Current state is: " + JSON.stringify(values));
}

  render () {
    return (
      // Week 4 - Workshop Assignment: Task 1 - Create & Style Button
      <div>
        <Button outline onClick={this.toggleModal}>
          <i className="fa fa-pencil"/> Submit Comment
        </Button>

        {/* // Week 4 - Workshop Assignment: Task 2 - Create Modal */}
        <Modal  isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            {/* // Week 4 - Workshop Assignment: Task 2 - Setup LocalForm */}
            <LocalForm onSubmit={this.handleSubmit}>
              <div className='form-group'>
                {/* // Week 4 - Workshop Assignment: Task 2 - Implement the rating field with Control.select and options 1-5 */}
                <div class="form-group">
                  <Label htmlFor="rating">Rating</Label>
                  <Control.select model=".rating"
                    id="rating"
                    name="rating"
                    className="form-control">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </div>
                {/* // Week 4 - Workshop Assignment: Task 2 - Implement the author field with Control.text */}
                <div className="form-group">
                  <Label htmlFor="author">Your Name</Label>
                  <Control.text model=".author"
                    className="form-control"
                    id="author"
                    name="author"
                    placeholder="Your name"
                    // Week 4 - Workshop Assignment: Task 3 - Form Validation
                    validators={{ required,
                      minLength: minLength(3),
                      maxLength: maxLength(15)
                    }}
                    />
                  <Errors className="text-danger" 
                    model=".author"
                    show="touched"
                    messages={{
                      required: 'Required ',
                      minLength: 'Must be greater than 2 characters ',
                      maxLength: 'Must be 15 characters or less '
                  }} />
                </div>
                {/* // Week 4 - Workshop Assignment: Task 2 - Implement the the comment text field with Control.textarea and 6 rows */}
                <div className="form-group">
                <Label htmlFor="text"> Comment
                </Label>
                  <Control.textarea model=".text"
                    className="form-control"
                    id="comment"
                    name="comment"
                    rows={6}
                  />
                </div>
                <div className="form-group">
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </div>
              </div>
            </LocalForm>

          </ModalBody>
        </Modal>
      </div>
    )
  }
}
function RenderCampsite({ campsite }) {
  return (
    <div className="col-md-5 m-1">
      <Card>
        <CardImg top src={campsite.image} alt={campsite.name} />
        <CardBody>
          <CardText>{campsite.description}</CardText>
        </CardBody>
      </Card>
    </div>
  )
}

function RenderComments({ comments, postComment, campsiteId }) {
  if (comments) {
    return (
      <div className="col-md-5 m-1">
        <h4>Comments</h4>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>
              {comment.text} <br /> -- {comment.author}{' '}
              {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
              }).format(new Date(Date.parse(comment.date)))}
            </p>
          </div>
        ))}
        {/* // Week 4 - Workshop Assignment: Task 1 - Render Button */}
        <CommentForm campsiteId={campsiteId} postComment={postComment} />
      </div>
    )
  }
  return <div />
}
function CampsiteInfo(props) {
  if (props.campsite) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/directory">Directory</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{props.campsite.name}</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderCampsite campsite={props.campsite} />
          <RenderComments comments={props.comments} postComment={props.postComment} campsiteId={props.campsite.id} />
        </div>
      </div>
    )
  }

  return <div />
}

export default CampsiteInfo
