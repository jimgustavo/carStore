import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Container, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import "../App.css";

import { getStock } from '../actions/getStock';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

export class ShoppingList extends Component {
  state = {
    value: 0 
  }

componentDidMount(){
  this.props.getStock(); // will go to actions
}

render() {
    console.log('ShoppingList: this.props.stockObj:', this.props.stockObj);
    const { stock } = this.props.stockObj;
    return (
      <Container>
      <ListGroup>
   <TransitionGroup className="ShoppingList">
   {stock.map(({_id, productName}) => (
     <CSSTransition key={_id} timeout={500} classNames="fade">
      <ListGroupItem>
     <Col sm="3">
        <Card>
         <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
              <CardTitle>{productName}</CardTitle>
              <CardSubtitle>{_id}</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Button>Button</Button>
            </CardBody>
         </Card>
      </Col>
      </ListGroupItem>
      </CSSTransition>
      ))}
    </TransitionGroup>
    </ListGroup>
    </Container>
    )
  }
}

ShoppingList.propTypes = { //when a action is imported from redux it's add to your class as a prop
    getStock: PropTypes.func.isRequired,
    stockObj: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    stockObj: state.stockReducer
});

export default connect(mapStateToProps, { getStock })(ShoppingList);

/* 
 {_id},
     {productName}
*/