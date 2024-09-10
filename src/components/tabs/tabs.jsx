import React, { useState } from "react";

const Tabs = ({ tabs, onChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (currentIndex) => {
    setSelectedTab(currentIndex);
    onChange(currentIndex);
  }

  return (
    <div style={{padding: 50}}>
      {tabs &&
        tabs.length > 0 &&
        tabs.map((item, i) => {
          return (
            <div key={i}>
              <button
                style={{ backgroundColor: selectedTab === i ? "green" : "" }}
                onClick={() => handleTabChange(i)}
              >
                {item.label}
              </button>
            </div>
          );
        })}
      {tabs[selectedTab] && <div>{tabs[selectedTab].content}</div>}
    </div>
  );
};

export default Tabs;
