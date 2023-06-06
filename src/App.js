import "./styles.css";
import React from "react";
import Tag from "./Tag";
import Icon from "./Icon";
import iconImage from "./cloud.png";

export default function App() {
  return (
    <div>
      <h2>Default Tag</h2>
      <div className="tag-container">
        <Tag>Content</Tag>
      </div>

      <h2>Tag with properties</h2>
      <div className="tag-container">
        <Tag color="blue" borderRadius="0.8em">
          Content
        </Tag>
      </div>

      <h2>Icon</h2>
      <div className="tag-container">
        <Icon src={iconImage} alt="Icon" />
      </div>

      <h2>Icon inside tag</h2>
      <div className="tag-container">
        <Tag>
          <Icon src={iconImage} alt="Icon" isHoverable />
          content
        </Tag>
      </div>
    </div>
  );
}
