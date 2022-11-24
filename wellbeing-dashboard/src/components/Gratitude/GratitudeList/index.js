import React from "react";

export default function GratitudeList({
  list,
  handleDelete,
  // handleEdit
}) {
  return (
    <ul>
      {list.length > 0 &&
        list.map((listItem) => {
          return (
            <li key={listItem.id}>
              {listItem.gratitude}
              <button
                onClick={() => {
                  handleDelete(listItem.id);
                }}
              >
                <i className="fi fi-ss-trash"></i>
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
