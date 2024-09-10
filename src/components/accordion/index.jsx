import React, { useContext, useState } from "react";
import data from "./data";
import './accordion.scss';
import { AppContext } from "../../context/index";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [multiple, setMultiple] = useState(false);
  const [openedAccordions, setOpenedAccordions] = useState([]);
  const context = useContext(AppContext);
  console.log('context from accordion: ', context);
  const {showAccordion} = context;

  const handleSingle = (currentClicked) => {
    setSelected(currentClicked !== selected ? currentClicked : null);
  };

  const handleMultiple = (currentClicked) => {
    // setSelected(currentClicked !== selected ? currentClicked : null);
    const copyOpenedAccordions = [...openedAccordions];
    if (copyOpenedAccordions.indexOf(currentClicked) === -1) {
      copyOpenedAccordions.push(currentClicked);
    } else {
      copyOpenedAccordions.splice(
        copyOpenedAccordions.indexOf(currentClicked),
        1
      );
    }
    // @ts-ignore
    setOpenedAccordions(copyOpenedAccordions);
    console.log(copyOpenedAccordions);
    // setOpenedAccordions([...copyOpenedAccordions]);
  };

  return (
    <>    
      {showAccordion && <div className="wrapper">
        <button onClick={() => setMultiple(!multiple)}>{`Text ${multiple}`}</button>
        <div className="accordion">
          {data && data.length > 0 ? (
            data.map((item) => (
              <div key={item.id} className="item">
                <div
                  className="title"
                  onClick={
                    multiple
                      ? () => handleMultiple(item.id)
                      : () => handleSingle(item.id)
                  }
                >
                  <h3>{item?.question}</h3>
                  <span>+</span>
                </div>
                {multiple ? (
                  // @ts-ignore
                  openedAccordions.indexOf(item?.id) !== -1 && <div className="content">{item?.answer}</div>
                ) : selected === item.id && (
                  <div className="content">{item?.answer}</div>
                )}
                {/* {
                  selected === item.id ? (<div className='content'>
                    {item?.answer}
                  </div>) : null
                } */}
              </div>
            ))
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>}
    </>
  );
};

export default Accordion;
