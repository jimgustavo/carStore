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
    /*let filteredStock = stock.filter(() => {
      return stock.keywords.indexOf(this.state.search) !== -1;
    });*/
    // console.log("ShoppingList: this.props.stockObj:", this.props.stockObj);
    let { stock } = this.props.stockObj;
    return (
      <div className="ShoppingList">
        <input
          type="text"
          value={this.state.stock}
          //onChange={this.updateStock.bind(this)}
        />
        <Container className="ListContainer">
          <CardColumns className="ShoppingColumns">
            <TransitionGroup>
              {stock.map(({ _id, productName, image, description, price }) => (
                <CSSTransition key={_id} timeout={500} classNames="fade">
                  <Col sm="14">
                    <Card
                      body
                      inverse
                      style={{
                        backgroundColor: "#333",
                        borderColor: "#333"
                      }}
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
      </div>
    );
  }
}

ShoppingList.propTypes = {
  //when an action is imported from redux it's add to your class as a prop
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
