import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "./AccordionHeading.css";

// FaAngleDown FaAngleUp
function AccordionHeading(props) {
  // console.log(props.heading);
  // heading={props.title

  // const handleClass = () => {
  //   console.log("Open the accordion!");
  // };

  return (
    <div
      className='accordionHeadingContainer'
      onClick={() => props.handleAccordion()}
    >
      <p>{props.heading}</p>
      {/* added ternary operator for angle icon to show up and down dynamically */}
      <span>{props.isActive ? <FaAngleUp /> : <FaAngleDown />}</span>
    </div>
  );
}

export default AccordionHeading;
