import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Container,
  CardColumns
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "../App.css";

import { getStock } from "../actions/getStock";
import PropTypes from "prop-types";

import { connect } from "react-redux";

export class ShoppingList extends Component {
  state = {
    value: 0
  };

  componentDidMount() {
    this.props.getStock(); // will go to actions
  }

  render() {
    console.log("ShoppingList: this.props.stockObj:", this.props.stockObj);
    const { stock } = this.props.stockObj;
    return (
      <Container className="ShoppingList">
        <CardColumns className="ShoppingColumns">
          <TransitionGroup>
            {stock.map(({ _id, productName, image, description, price }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <Col sm="10">
                  <Card
                    body
                    inverse
                    style={{ backgroundColor: "#333", borderColor: "#333" }}
                  >
                    <CardImg
                      top
                      width="100%"
                      src={image}
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle>{productName}</CardTitle>
                      <CardText>{description}</CardText>
                      <CardSubtitle>${price}</CardSubtitle>
                      <Button>Comprar</Button>
                    </CardBody>
                  </Card>
                </Col>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </CardColumns>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  //when a action is imported from redux it's add to your class as a prop
  getStock: PropTypes.func.isRequired,
  stockObj: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  stockObj: state.stockReducer
});

export default connect(
  mapStateToProps,
  { getStock }
)(ShoppingList);
