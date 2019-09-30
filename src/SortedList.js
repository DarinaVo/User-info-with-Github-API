import React from "react";
import "./styles.css";

const SortedList = props => {
  if (props.repitems) {
    return (
      <ul>
        {props.repitems.map(repitem => (
          <li key={repitem.id}>
            <div>
              <div>
                <a href={repitem.html_url} target="_blank">
                  {repitem.name}
                </a>{" "}
              </div>

              <div>
                <i>{repitem.description}</i>
              </div>
              <hr />
            </div>
          </li>
        ))}
      </ul>
    );
  } else {
    return null;
  }
};
export default SortedList;
