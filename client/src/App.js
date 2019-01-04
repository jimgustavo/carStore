import React from "react";
import Axios from "axios";

class App extends React.Component {
  state = {
    stock: [
      { productName: "ipadPRO", keywords: "TABLET" },
      { productName: "Iphone X", keywords: "CELLPHONE" },
      { productName: "Samsung Galaxi Tab", keywords: "TABLET" },
      { productName: "Samsung S9", keywords: "CELLPHONE" }
    ]
  };

  componentDidMount() {
    Axios.get("/api/stock")
      .then(res => {
        const stock = res.data;
        this.setState({ stock });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="grid-container">
        <input
          type="text"
          //  value={this.state.filteredStock}
          //  onChange={this.filteredStock.bind(this)}
        />
        <div className="grid">
          {this.state.stock.map(
            ({ productName, description, keywords, image, price }) => (
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
            )
          )
          //.filter(({ keywords }) => keywords !== "CELULARES")
          }
        </div>
      </div>
    );
  }
}
export default App;
