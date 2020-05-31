import React, {Component} from "react";

class Item extends Component {
 tryClick (e) {
  e.currentTarget.textContent = "✗"
  }
 render() {
    let itemTemp

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    itemTemp = numbers.map((number) =>
    <div className="grid-item  field"  key={number}  onClick={this.tryClick}></div>
   )


      return (

        <article className="grid-container">
          {itemTemp}
        </article>

      )
    }
}


export default Item;
