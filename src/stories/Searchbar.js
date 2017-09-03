import PropTypes from 'prop-types';
import React from 'react';

const Product = ({ product }) =>
  <li>{product.name} {product.cut}</li>

class ProductsList extends React.Component {
  constructor () {
    super();
    this.state = {
      search: ''
    };
  }
  updateSearch(event) {
    console.log(event.target.value);
    this.setState({search: event.target.value.substr(0, 20)});
  }
  render() {
    let filteredProducts = this.props.products.filter(
    (product) => {
      return product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    }
    );
    return (
      <div>
        <input type="text" 
        value={this.state.search}
        onChange={this.updateSearch.bind(this)}
         />
        <ul>
          {filteredProducts.map((product) => {
            return <Product product={product} key={product.id} />
          })
          
          }
        </ul>
      </div>
    )
  }
};

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1 className="app__title">Your Products</h1>
        <ProductsList products={this.props.products}/>
      </div>
    );
  }
}

export default App;
