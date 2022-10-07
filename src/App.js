import "./App.css";
import { accordionContent } from "./utils/content";
import Container from "./Container";

const App = () => {
  // let title = ["HTML", "CSS", "JavaScript"]
  // let title = {
  //   item_1: "What is HTML?",
  //   item_2: "What is CSS?",
  //   item_3: "What is JavaScript?",
  //   item_4: "What is React JS?",
  //   item_5: "What is Next JS?",
  // };
  // let itemPara = {
  //   item_1_para:
  //     "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
  //   item_2_para:
  //     "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
  //   item_3_para:
  //     "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries",
  //   item_4_para:
  //     "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",
  //   item_5_para:
  //     "Next.js is an open-source web development framework created by Vercel enabling React-based web applications with server-side rendering and generating static websites.",
  // };

  return (
    <section className='accordionContainer'>
      {/* mapping the accordion content file to get all the data */}
      {accordionContent.map(({ id, title, itemPara }) => (
        <Container key={id} title={title} itemPara={itemPara} />
      ))}
      {/* <Container title={title.item_1} itemPara={itemPara.item_1_para} />
      <Container title={title.item_2} itemPara={itemPara.item_2_para} />
      <Container title={title.item_3} itemPara={itemPara.item_3_para} />
      <Container title={title.item_4} itemPara={itemPara.item_4_para} />
      <Container title={title.item_5} itemPara={itemPara.item_5_para} /> */}
    </section>
  );
};

export default App;
