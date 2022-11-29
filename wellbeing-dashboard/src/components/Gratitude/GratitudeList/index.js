import React from "react";
import "./index.css";
import { FaTrashAlt } from "react-icons/fa";

/** Component responsible for displaying the information contained on  "Gatitude list" stored at our DB. */
export default function GratitudeList({

/* Reveives the current state of our list and the "handleDelete" fn passed down by props in the Gratitude component */   
  list,
  handleDelete,
  // handleEdit
}) {


  return (
    <ul className="GratitudeList">
      {list.length > 0 &&  //this line 12 conditional rendering. Checks if there are any items in the list. If there are, it will continue with the rest of this JS code. If not, it won't render anything and it also won't give an error.
        list.map((listItem) => {
          return (
            <li className="gratitudeListItem" key={listItem.id}>
              {listItem.gratitude}
              <button
                className="gratitudeDeleteButton"
                onClick={() => {
                  handleDelete(listItem.id);
                }}
              >
                <FaTrashAlt />
              </button>
            </li>
          );
          // handleEdit={() => {
          //   handleEdit(index);
          // }}
          // handleDelete={() => {
          //   handleDelete(index);
          // }}
        })}
    </ul>
  );
}
