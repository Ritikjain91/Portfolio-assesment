import { Container ,Row,Col,Image} from 'react-bootstrap';
import './App.css';
import 'animate.css';
import Profilepic from './Images/Ritik jain.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
   
<Container>
  <h1 className='display-1'> Introduction</h1>

  <Row>
  <Col className="fade-in">
  <Image className='animate__animated animate__bounce' src={Profilepic} alt="Image description" fluid width="80%" />

  </Col>


<Col>
I am Ritik Jain, a dedicated and driven software engineering professional with a fervent dedication to innovation and problem-solving. Proficient in a diverse array of programming languages, including Basic Core Java, React.js, SQL, Basic C, HTML, CSS, and JavaScript, I excel in dynamic environments where creativity intertwines with technical prowess.

I recently undertook the challenge of crafting a Netflix clone Movie App Dashboard, demonstrating my expertise in front-end development and user interface design. My academic journey led me to graduate from Shri Ram Institute of Technology with a commendable cumulative GPA of 7.81, solidifying my foundation in Object-Oriented Programming and sharpening my problem-solving skills through platforms like Leetcode.

My professional experience encompasses teaching Core Java at Hacktech and interning as a React developer at Avestian Technology. These roles provided me with invaluable hands-on experience in utilizing frameworks like Chakra UI, Bootstrap, and Tailwind CSS to create intuitive and responsive user interfaces.

Furthermore, my involvement in community-based organizations has enriched my understanding of teamwork, communication, and leadership. This, coupled with my academic achievements, such as securing a 7.8 CGPA in schooling from Marthome Gram Jyoti School and attaining a 68% score in my 12th-grade exams, underscores my commitment to excellence in all endeavors.

I am eager to bring my blend of technical skills, academic achievements, and practical experience to contribute positively to your esteemed company. I look forward to the opportunity to discuss how my capabilities align with the needs of your team.



</Col>



  </Row>


</Container>

      
      </header>

      <Container  style={{ margin: '200px', display:"flex",justifyContent:"center"   }}>
      <p>Click the link below to view my resume: &nbsp;

</p>


    
      <a href="https://docs.google.com/document/d/1hbDiG1-vRBDlAJ0eRRAnUqAbT3di-Oc6DfWMaR3n1U0/edit" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Resume</a>
    </Container>
    <p>
  Note-Please open The Resume for github link  AND Linkedin profile
</p>
    </div>
  );
}

export default App;
