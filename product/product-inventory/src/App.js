import React from 'react';
import "./App.css";
import axios from 'axios';
import Navbar from './Navbar';
import Form from './FromCustomerProduct';

const Title = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>

    </div>)
}
const ProductCard = (props) => {

  return (
    // <div class="product-card">
    //   <div class="pic">
    //     <img src={props.item.product_image} width="200" height ="200" />
    //   </div>
    //   <b>{props.item.product_name}</b><br></br>
    //   {props.item.product_detail}<br></br>
    //   price: {props.item.price} <br></br>
      
    //   <button onClick={() => props.addItem({ name: props.item.name, description: props.item.description, price: props.item.price })}> item to cart</button>
    // </div>
    <div class="card" style={{width: "18rem",marginLeft:30}}>
    <img class="card-img-top" src={props.item.product_image} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">{props.item.product_name}</h5>
      <p class="card-text">{props.item.product_detail}</p>
      <
      <a href="#" class="btn btn-success">item to cart</a>
    </div>
  </div>
  )
}

class App extends React.Component {
  state = {
    // key: value
    product: [{
      name: 'Oreo',
      description: 'Biscuit',
      price: 270.00
    },
    {
      name: '3D Mask ',
      description: '3D Mask ผู้ใหญ่ 4 ชิ้น',
      price: 129.00
    },
    {
      name: 'กะเพรา',
      description: 'กะเพรา 4 ชิ้น',
      price: 10.50
    },
    {
      name: 'Bar-B-Plaza E-vouncher',
      description: 'e-vouncher 100 baht',
      price: 85.00

    }
    ],
    user: {
      name: 'Antoprise'
    },
    cart: [{
      name: 'Oreo',
      description: 'Biscuit',
      price: 270.00
    }],
    getItem: []


  }
  componentDidMount = () => {
    axios.get(
      'https://dry-scrubland-02499.herokuapp.com/api/v1/products'
    ).then(item => this.setState({ getItem: item.data }))

  }

  render() {
    /* const items = [{ id: 123, name: "Samsung", Price: 1000 }]
     function showItem() {
       return (
         items.map(item => {
           return <h1>{item.id}{item.name}</h1>
         })
       )
     }*/
    // 
    const addItem = (product) => {
      this.setState({ cart: [...this.state.cart, product] })
    }
    if (this.state.getItem.length === 0) {

      return <h1>Loading</h1>
    } else {


      return (
        <div>
          <Navbar name={'Antoprise'}/>
          <Form/>
          <Title name="New product" />


          <h1>ProductList</h1>
          {/* <ProductCard item={this.state.getItem[0]} addItem={addItem} />
        <ProductCard item={this.state.product[1]} addItem={addItem} />
        <ProductCard item={this.state.product[2]} addItem={addItem} />
        <ProductCard item={this.state.product[3]} addItem={addItem} /> */}
          <center><div class="row" style = {{width: '80%'}}>
            {this.state.getItem.map(
              (product) => (
                <ProductCard item={product} addItem={addItem} />
              )
            )}

          </div></center>
          <div><h1>cart</h1>
            {this.state.cart.map(
              (ItemInCart) => (
                <div>
                  {ItemInCart.name}
                </div>

              )
            )}
          </div>

        </div>
      )
    }
  }
}








export default App;
