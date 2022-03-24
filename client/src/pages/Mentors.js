import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function Mentors() {
  const [mentors, setMentors] = useState([])
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadMentors()
  }, [])

  function loadMentors() {
    API.getMentors()
      .then(res => 
        setMentors(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteMentor(id) {
    API.deleteMentor(id)
      .then(res => loadMentors())
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.userName && formObject.location) {
      API.saveMentor({
        userName: formObject.userName,
        location: formObject.location,
        
      })
        .then(res => loadMentors())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container flex>
        <Row>
          <Col size="md-12" >
            <Jumbotron>
              <h1>Let Us Get To Know You!</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="userName"
                placeholder="Name (required)"
              />
              <Input
                onChange={handleInputChange}
                name="location"
                placeholder="Which do you prefer? In-Person, Remote, or Both (required)"
              />
              <Input
                onChange={handleInputChange}
                name="work"
                placeholder="What field of work are you in? (required)"
              />
           
               <Input
                onChange={handleInputChange}
                name="needs"
                placeholder="What type of service were you looking for? (required)"
              />
              <FormBtn
                disabled={!(formObject.userName && formObject.location && formObject.work && formObject.needs)}
                onClick={handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Chosen Mentors</h1>
            </Jumbotron>
            {mentors.length ? (
              <List>
                {mentors.map(mentor => (
                  <ListItem key={mentor._id}>
                    <Link to={"/mentors/" + mentor._id}>
                      <strong>
                        {mentor.userName} by {mentor.location}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteMentor(mentor._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Mentors;
