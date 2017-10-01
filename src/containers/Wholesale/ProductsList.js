import React, { Component } from 'react';
import Product from './Product'
import { Form, FormControl, FormGroup, Navbar } from 'react-bootstrap'

class ProductsList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
      products: props.products
    };
  }

  updateSearch(event){
    this.setState({search: event.target.value.substr(0, 20)});
  }
  render() {
    let filteredProducts = this.state.products.filter(
      (product) => {
        return product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    )
    return <Form inline>
        <FormGroup>
          <FormControl type="text" placeholder="Search" value={this.state.search} onChange={this.updateSearch.bind(this)} />
        </FormGroup>
        <div>
          {filteredProducts.map(product => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
      </Form>;
  }
}

export default ProductsList