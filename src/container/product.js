import React, {
  Component
} from "react";
import axios from "axios";
import Card from "../components/card.js";

const cardData = {
  data: [{
      id: 1,
      name: "first",
      imgURL: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      amount: 450
    },
    {
      id: 2,
      name: "second",
      imgURL: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      amount: 650
    },
    {
      id: 3,
      name: "third",
      imgURL: "https://media.wired.com/photos/5cedbad330aeeb165c9234b7/master/pass/Gear%20-%20Art%20-%20Amazon%20Choice%20-%2083637206.jpg",
      amount: 850
    }
  ]
}

const Url = `http://api.exchangeratesapi.io/v1/latest?access_key=3ad33e514f9dc39a3f487d74c39e31f0&%20base%20=`;
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: cardData.data,
      dropDownOptions: [{
        value: "INR",
        label: "INR"
      }, {
        value: "USD",
        label: "USD"
      }],
      selectedDropDownOption: "INR",
    };
  }

  currencyConverter = async (base) => {
    let {
      data
    } = await axios.get(`${Url}${base}`)
    const convertCurrency = base === "INR" ? "USD" : "INR";
    const converter = data.rates[convertCurrency]
    let ab1 = JSON.stringify(cardData);
    let ab2 = JSON.parse(ab1)
    ab2.data.map(obj => {
      obj.amount = obj.amount * converter
    })
    this.setState({
      cardData: ab2.data
    })

  }
  changeHandler = (e, type) => {
    if (type === "card-select") {
      this.setState({
        selectedDropDownOption: e.value
      })
      this.currencyConverter(e.value);
    }


  }
  render() {
    return ( <
      Card cardData = {this.state.cardData}
      dropDownOptions = {this.state.dropDownOptions}
      selectedDropDownOption = {this.state.selectedDropDownOption}
      changeHandler = {this.changeHandler}
      />
    );
  };
}

export default Product;
