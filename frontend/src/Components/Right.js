import React from "react";
import "../styles/Hero.css";
import Dashboard from './Dashboard';
export default function Right({ selectedItem }) {
  let content;

  // Render different content based on the selected item
  switch (selectedItem) {
    case "dashboard":
      content = <Dashboard/>;
      break;
    case "books":
      content = <div className="right">Books Content</div>;
      break;
    // Add cases for other items as needed
    default:
      content = <div className="right">Default Content</div>;
  }

  return <div>{content}</div>;
}

