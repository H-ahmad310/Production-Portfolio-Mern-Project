import Layout from "./component/layout/Layout";
import About from "./pages/About/About";
import Educations from "./pages/Educations/Educations";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/WorkExp/WorkExp";
import Content from './pages/Content/content';
import ScrollToTop from "react-scroll-to-top";
import MobileNav from "./component/MobileNav/MobileNav";
import { useTheme } from "./context/ThemeContext";

function App() {
  const [theme] = useTheme();
  return (
    <>
    <div id={theme}>
         <MobileNav/>
         <Layout/>
         <div className="container">
         <About/>
         <Educations/>
         <Techstack/>
         <Projects/>   
         <WorkExp/>     
         <Content/>
         </div>
         
             <div className="footer pb-3 ms-3">
              <h4 className="text-center"> Made with 😍 Hussnain Ahmad &copy; 2025</h4>
             </div>
         </div>
         <ScrollToTop smooth 
         color="white"
         style={{backgroundColor:"rgba(207, 97, 24, 0.938)",borderRadius:"80px"}}/>
    </>
  );
}
export default App;



