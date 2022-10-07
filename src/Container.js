import AccordionHeading from "./components/AccordionHeading";
import AccordionPara from "./components/AccordionPara";

import "./Container.css";
const Container = (props) => {
  let title = props.title;
  let itemPara = props.itemPara;
  return (
    <div className="accordionItem">
      <AccordionHeading heading={title} />
      <AccordionPara itemPara={itemPara} />
    </div>
  );
};

export default Container;
