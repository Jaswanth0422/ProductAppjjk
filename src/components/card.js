import React from "react";
import "../styles/card.css";
import Select from "react-select";
const Cards =(props)=>{
  const selectStyles={
    control:(base,state)=>({...base,background:"#ebe6e6",color:"fff",boxShadow:"none",border: state.isFocused&"none"}),
    indicatorSeparator:()=>{},
    option:(base,state)=>({...base,background:"#ebe6e6"})
    // dropdownIndicator:defaultStyles=>({
    //   ...defaultStyles,'& svg':{display:'none'}
    // })
  };
  return(
    <div>
      <div className="d-flex">
      {props.cardData.map((card)=>{
        return(
          <div key={card.id} className="card">
            <img src={card.imgURL} alt={card.name} className="img"/>
            <h4>{card.amount}</h4>
          </div>
        );
      })}
    <div>
      <Select
      className="dropdown-card-select"
      options={props.dropDownOptions}
      placeholder={props.selectedDropDownOption}
      value={props.selectedDropDownOption}
      isSearchable={false}
      onChange={(e)=>{props.changeHandler(e,"card-select")}}
      styles={selectStyles}
      />
      </div>


      </div>
    </div>
  );
}

export default Cards;
