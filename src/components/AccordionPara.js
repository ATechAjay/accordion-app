import "./AccordionPara.css";
export default function AccordionPara(props) {
  return (
    // used props.isActive to show whether it should show or not.
    <>{props.isActive && <p className='accordionPara'>{props.itemPara}</p>}</>
  );
}
