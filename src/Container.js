import { useState } from "react";
import AccordionHeading from "./components/AccordionHeading";
import AccordionPara from "./components/AccordionPara";
import "./Container.css";

const Container = (props) => {
  let { title, itemPara } = props;
  const [isActive, setIsActive] = useState(false);

  // function for handling the accordion
  const handleAccordion = () => {
    // console.log("handle accordion");
    setIsActive(!isActive);
  };
  // let title = props.title;
  // let itemPara = props.itemPara;
  return (
    <div className='accordionItem'>
      <AccordionHeading
        heading={title}
        handleAccordion={handleAccordion}
        isActive={isActive}
      />
      <AccordionPara itemPara={itemPara} isActive={isActive} />
    </div>
  );
};

export default Container;
