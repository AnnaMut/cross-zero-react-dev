import React, {Component} from "react";


import '../../styles/App.css';
import Item from "../item/item";





class Main extends Component {
state = {
  start: false,
  note: "Твой ход! ✗",
  play: false,
  player1: true
  //computerTurn: drawO()
}

  drawField = () => {

    this.setState({
      start: true,
      })
  }

  checkE = (e) => {
    if(e.currentTarget.nextSibling.textContent == "") {
      e.currentTarget.nextSibling.textContent = "𐒠"
    }
  }

  drawX = (e) => {
    e.persist();

    if(e.currentTarget.textContent == "") {
      e.currentTarget.textContent = "✗"
    }

   /*  alert(e.currentTarget.key); */
   /*  const checkE = () => {
      if(e.currentTarget.nextSibling.textContent == "") {
        e.currentTarget.nextSibling.textContent = "𐒠"
      }
    }

    setTimeout(checkE, 9500); */

  /*   if(e.currentTarget.nextSibling.textContent == "") {
      e.currentTarget.nextSibling.textContent = "𐒠"
    } else if (e.currentTarget.previousSibling.textContent == ""){
      e.currentTarget.previousSibling.textContent = "𐒠"
    } */
    this.setState({ /* rating: 100500, */
      play: true,
      player1: false,
     /*  setTimeout(checkE, 9500); */
     // computerTurn: drawO()
      })
  }





/*

<p>Твой ход!</p>
{ !start &&  <article className="grid-container">
<div className="grid-item item-1" onClick={this.drawField}>1</div><div className="grid-item item-2">2</div> <div className="grid-item item-3">3</div><div className="grid-item item-4">4</div> <div className="grid-item item-5">5</div><div className="grid-item item-6">6</div>
 <div className="grid-item item-7">7</div><div className="grid-item item-8">8</div><div className="grid-item item-9">9</div>
</article>}
{ start &&  <article className="grid-container">
<div className="grid-item item-1 field">1</div><div className="grid-item item-2 field">2</div> <div className="grid-item item-3 field">3</div><div className="grid-item item-4 field">4</div> <div className="grid-item item-5 field">5</div><div className="grid-item item-6 field">6</div>
<div className="grid-item item-7 field">7</div><div className="grid-item item-8 field">8</div><div className="grid-item item-9 field">9</div>
</article>}
{dataCards.map((it) => <PlaceCard key={it.id} element={it}/>)}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const listItems = numbers.map((number) =>
    <div className="grid-item"  key={number}></div>
   );

   const listItemsStart = numbers.map((number) =>
    <div className="grid-item  field"  key={number} onClick={this.drawX}></div>
   );

 { !start && <article className="grid-container">{listItems}</article>}
  { start && <article className="grid-container">{listItemsStart}</article>}
*/



  render() {
    const { start, note, play, player1 } = this.state

    return (
      <React.Fragment>
      <div className="box">
      <h1 onClick={this.drawField}>Начинаем игру!  &#128515; </h1>
      { start && !play && <p className="notification">{note}</p>}
      { start && play && <p className="notification none">{note}</p>}
      { start && <Item/> }



  </div>
  </React.Fragment>
    )
  }
}

export default Main;
