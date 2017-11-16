import React from 'react';
import { Grid, Row, Col, PageHeader, Panel, Well } from 'react-bootstrap'
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import Helmet from "react-helmet";
//import FilteredList from './FilteredList'
import firebase from '../../Config/firebase.js'
import { CustomFlex } from '../../components/Global/Main'
import { Image } from '../../components/Card/Image'
import { Wrapper } from '../../components/Card/Wrapper'

const products = require("./data.json");

export default class Wholesale extends React.Component{
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: [],
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
          name: items[item].name,
          price: items[item].price,
          picture: items[item].picture
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
              <div>
                West Coast Meat Solutions are open to the public as part of
                the Wholesale Clearance Sale. The gates open at 6:00am and
                there is a surcharge of $4 for vehicles. The money is
                collected by the Rotary Club of Willetton on entry.
                <br />
                
              </div>
            </Col>
            <div className="row">
            <Col xs={12} md={12}>
            <div className='container'>
            <input type="text" />
            <section className='display-item'>
              <div className='wrapper'>
                
                {this.state.items.map((item) => {
                  return (
                    <Wrapper>
                    <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>$ {item.price}</p>
                    <Image src={item.picture} />
                    </div>
                    </Wrapper>
                  )
                })}
               
              </div>
            </section>
          </div>
            </Col>
            </div>

          </Row>

        </Grid>
      </div>;
  }
}
