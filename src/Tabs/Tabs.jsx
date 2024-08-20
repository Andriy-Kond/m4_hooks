import React, { useState } from "react";
import items from "./database/tabs.json";

function Tabs() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeTab = items[activeTabIdx];

  console.log("Re-render :>>", Date.now(), new Date().toLocaleTimeString());

  // При кліку на ту саму кнопку вдруге React рендерить знову, бо перевіряє рівність вже після того як поставив в чергу виконнання setActiveTabIdx (третього рендеру вже не відбувається)
  const setActiveTabIdx1 = idx => {
    // запобігання другому рендеру:
    if (idx !== activeTabIdx) {
      setActiveTabIdx(idx);
    }
  };

  return (
    <>
      <div>
        {items.map((item, idx) => {
          return (
            <button
              type="button"
              key={item.label}
              onClick={() => {
                setActiveTabIdx1(idx);
              }}>
              {item.label}
            </button>
          );
        })}
      </div>

      <div>
        <h1>{activeTab.label}</h1>
        <p>{activeTab.content}</p>
      </div>
    </>
  );
}

export default Tabs;
