import { FaAngleDown } from "react-icons/fa";
import "./AccordionHeading.css";

// FaAngleDown FaAngleUp
function AccordionHeading(props) {
  // console.log(props.heading);
  // heading={props.title

  const handleClass = () => {
    console.log("Open the accordion!");
  };

  return (
    <div className="accordionHeadingContainer" onClick={handleClass}>
      <p>{props.heading}</p>
      <span>
        <FaAngleDown />
      </span>
    </div>
  );
}

export default AccordionHeading;
