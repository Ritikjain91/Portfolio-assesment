import React from 'react';
import AnimalCard from './AnimalCard.jsx';
import ProjectImage2 from '../../Images/Netflixclone.png'
import ProjectImage1 from '../../Images/Screenshot 2024-03-24 031602.png'
import ProjectImage3 from '../../Images/Screenshot 2024-03-24 032408.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import projectImage4 from '../../Images/Screenshot 2024-03-24 172621.png'
import ProjectImage5 from '../../Images/Screenshot 2024-03-24 173249.png'
import ProjectImage6 from '../../Images/Screenshot 2024-03-24 180342.png'

const AnimalCardsContainer = () => {
  const Projects = [
    {
      name: 'Movie App',
      image: ProjectImage1,
      description: 'Movie App was created using HTML, CSS, and JavaScript,The app utilizes The Movie Database (TMDB) API to display a collection of movies.Api integration Users are able to search for movies according to their preferences.',
      details: 'The app provides a detailed overview of each movie, including its rating .The user interface is designed to be user-friendly, allowing users to easily browse and search for movies. The app provides an enjoyable user experience for movie enthusiasts who are looking for new movies to watch. The app is a great resource for movie lovers who want to keep up-to-date with the latest movie releases and reviews. The app provides an excellent platform for users to discover new movies that they may have missed.Your Movie App is a great example of how web technologies can be used to create interactive and engaging applications.',
      link: 'https://ritikjain91.github.io/MovieApp/' 

    },
    {
      name: 'Netflix-clone',
      image: ProjectImage2,
      description: 'An app streaming application that offers a similar user experience to Netflix, with a vast library of movies, TV shows, and original content.  Framework & tools-Redux, Firebase,.,TMDB Api Web technologies-HTML,CSS,React js React Router dom.',
      details: 'With the app, users can easily browse through the different categories and genres, search for specific titles, and add them to their watchlist. The app also allows users to create their own profiles, with personalized recommendations based on their viewing history  The TMDB API provides the app with access to a vast library of content, including information on movies and TV shows, reviews, and trailers. This ensures that users have access to the latest and greatest content, and can easily stay up to date with the latest releases The apps design is user-friendly, with a clean and intuitive interface that allows users to quickly and easily navigate through the different sections. The use of React js  ensures that the app is responsive, providing a seamless experience across different devices and screen sizes.Overall, the Netflix-Clone app is a great alternative to the original Netflix app, providing users with a similar experience while also offering unique features and functionality. With its vast library of content, personalized recommendations, and user-friendly design, it is sure to be a hit with movie and TV show lovers everywhere.',
      link:'https://65f2221fc400023871a10344--spiffy-marigold-995a64.netlify.app/',
    },
    {
      name: 'DashBoard',
      image: ProjectImage3,
      description: 'The dashboard of the application is built using React.js with Redux for state management and Chakra UI for styling. Routing within the application is implemented, and the deployment is handled using Vercel. Additionally, the application features OTP (One-Time Password) submission functionality.',
      details: 'The application provides features for viewing, adding, editing, and deleting employee records. Users can access a dashboard that displays a summary of employee data, including their names, job titles, departments, and contact information. Additionally, the application offers search functionality, allowing users to quickly find specific employees by name or department. With its intuitive user interface and comprehensive functionality, Avestan Employee Management streamlines the process of managing employee information, making it an essential tool for HR departments and business administrators.',
      link:'https://avestan-fe-employee.vercel.app/'
    },
    {
      name: 'MJ Biography',
      image: projectImage4,
      description: 'The MJ Biography web app is a user-friendly platform built using web technologies like HTML, CSS, and JavaScript. Interactive Design: Utilizing advanced CSS techniques, the app boasts an appealing and intuitive user interface. Custom animations and transitions enhance the browsing experience. Media Integration: Enjoy an immersive experience by listening to MJs iconic songs directly within the app. Users can play their favorite tracks while reading about his remarkable journey ',
      details: 'The MJ Biography web app is a dynamic tribute to the iconic artist, Michael Jackson, crafted using HTML, CSS, and advanced JavaScript. This user-friendly platform offers a comprehensive biography of MJ, detailing his life, career milestones, personal anecdotes, and enduring legacy. Employing advanced CSS techniques, the app boasts an immersive and visually captivating interface, complemented by seamless animations and transitions. Users can delve into MJs journey while enjoying his timeless hits through integrated media playback controls. With its engaging design and rich content, the MJ Biography web app provides an insightful and memorable experience for fans of the King of Pop.'
    },
    {
      name: 'VehicleWorth',
      image: ProjectImage5,
      description: 'Vehicle Worth is totally made on React js Redux Css we will use firebase and we use deploy for NetlifyVehicle Worth is entirely built using React.js, Redux, and CSS. We utilize Firebase for backend services and deploy the application on Netlify ',
      details: 'In this app, you can browse and purchase vehicles. It offers user authentication through sign-in and sign-up APIs. Once authenticated, users can select a vehicle and proceed with the purchase. Payment options include debit card, credit card, and direct communication with the company for purchasing both new and second-hand vehicles.      '      
    },
    {
      name: 'Portfolio',
      image:  ProjectImage6,
      description: 'I created this portfolio using React.js, implementing routing with react-router-dom, and incorporating advanced CSS techniques. Additionally, I integrated Firebase Authentication for user authentication, ensuring a secure login process.',
      details: 'Welcome to my portfolio! Here, you WIll find a curated collection of my projects, experiences, and skills as a software engineer. Using React.js, I ve meticulously crafted this portfolio to provide you with a glimpse into my journey and expertise in the world of technology.As you navigate through the various sections, you WIll discover a diverse range of projects I HAve worked on, each demonstrating my proficiency in different technologies and problem-solving abilities. From web applications to mobile apps, I HAve tackled various challenges and honed my skills to deliver high-quality solutions.',
      link:'https://ritikportfolio-33816.web.app/',
    },



  ];


  return (
    <div className="container">
 <h1 className="mt-50">Project made by me</h1>


      <div className="row justify-content-center mb-5">
        {Projects.map((animal, index) => (
          <div key={index} className="col-md-4 mb-4">
            <AnimalCard animal={animal} />
          </div>
        ))}
      </div>
    </div>

  );
};

export default AnimalCardsContainer;
