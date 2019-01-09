import React from "react";
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stock: [
        { productName: "ipadPRO", keywords: "TABLET" },
        { productName: "Iphone X", keywords: "CELLPHONE" },
        { productName: "Samsung Galaxi Tab", keywords: "TABLET" },
        { productName: "Samsung S9", keywords: "CELLPHONE" },
        { productName: "ASUS", keywords: ["TABLET", "LAPTOP"] }
      ]
    };
  }

  componentDidMount() {
    Axios.get("/api/stock")
      .then(res => {
        const stock = res.data;
        this.setState({ stock });
        console.log({ stock });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    var key = "SOFTWARE";
    let tag = this.state.stock.filter(
      ({ productName, description, keywords, image, price }) =>
        keywords == `${key}`
    );

    console.log(tag);

    return (
      <div className="grid-container">
        <input
          type="text"
          //  value={this.state.search}
          //  onChange={this.updateSearch.bind(this)}
        />
        <button onClick={null}>LAPTOPS</button>
        <button onClick={null}>SOFTWARE</button>
        <div className="grid">
          {tag.map(({ productName, description, keywords, image, price }) => (
            <div className="card">
              <h2>{productName}</h2>
              <img
                src={image}
                title={productName}
                height={180}
                width={180}
                alt={"Sorry!, this toy has an error!"}
              />
              <div>{description}</div>
              <div>{keywords}</div>
              <div>{price}</div>
              <button>Comprar</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default App;
