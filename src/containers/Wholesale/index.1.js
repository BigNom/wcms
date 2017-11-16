import React from 'react';
import { Grid, Row, Col, PageHeader, Panel, Well } from 'react-bootstrap'
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import Helmet from "react-helmet";
import FilteredList from './FilteredList'
import firebase from '../../Config/firebase.js'


const products = require("./data.json");

export default class Wholesale extends React.Component{
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      title: this.state.currentItem,
      user: this.state.username
    }
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: ''
    });
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  render() {
    return <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Wholesale Meat | Perth Wholesale Meat Markets | Wholesale Lamb | Wholesale Beef</title>
          <link rel="canonical" href="https://wcm.solutions/wholesale" />
          <meta name="description" content="Perth Wholesale Meat Market, Wholesale beef, lamb, goat and poultry" />
        </Helmet>
        <Grid>
          <Row bsStyle="row-eq-height">
            <Col xs={12} md={9}>
              <PageHeader>Wholesale Clearance Market</PageHeader>
              <Panel>
                West Coast Meat Solutions are open to the public as part of
                the Wholesale Clearance Sale. The gates open at 6:00am and
                there is a surcharge of $4 for vehicles. The money is
                collected by the Rotary Club of Willetton on entry.
                <br />
                
              </Panel>
            </Col>
            <Col xs={12} md={3}>
            <div className='container'>
            <section className='add-item'>
                <form onSubmit={this.handleSubmit}>
                  <input type="text" name="username" placeholder="What's your name?" onChange={this.handleChange} value={this.state.username} />
                  <input type="text" name="currentItem" placeholder="What are you bringing?" onChange={this.handleChange} value={this.state.currentItem}/>
                  <button>Add Item</button>
                </form>
            </section>
            <section className='display-item'>
              <div className='wrapper'>
                <ul>
                {this.state.items.map((item) => {
                  return (
                    <li key={item.id}>
                    <h3>{item.title}</h3>
                    <p>brought by: {item.user}</p>
                    </li>
                  )
                })}
                </ul>
              </div>
            </section>
          </div>
  
              <Well>
                <h4>Wholesale Clearance Market</h4>
                <ul>
                  <li>Open to the Public</li>
                  <li>Saturday: 6:00am - 10:00am</li>
                </ul>
              </Well>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <FilteredList products={products} />
            </Col>
          </Row>
        </Grid>
      </div>;
  }
}
