import React from "react";
import '../index.css'
import image from '../images/Shop.png'
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div> 
      <div className='about'>
        <div>
      
          <div className='textAlign'>
            <h1>The act of treating ones self to something that relaxes them or that they enjoy</h1>
            <h3>Three words for you: Treat. Yo. Self.</h3>
          <p> A term that originated in popular NBC television show Parks and Recreation, 
            when Tom and Donna two financially self destructive adults that work in the
             Parks and Rec. Department of Pawnee, Indiana decide to spend an entire day pampering and spoiling themselves. 
            However in the process end up destroying their bank accounts. </p>
            <p>
              "Once a year Donna and I spend a day treating ourselves. What do we treat ourselves to?"
              "Clothes". "Treat Yo Self". "Fragrances". "Treat Yo Self". "Massages". "Treat Yo Self". "Mimosas."
                "Treat Yo Self"
                "Fine leather goods"
                "Treat Yo Self" 
                </p>
                <p style={style.font}>Do you have any doubs? <NavLink style={style.link} to={'/contact'}>Contact us!</NavLink> </p>

          </div>
        
      </div>
      <img id='aboutImg'
        src={image} alt="girl with shopping cart"/> 
        </div>
      </div>
  );
};

export default About;

const style = {
  font: {
    fontFamily: 'Abril Fatface',
    fontSize: '25px'
  },
  link: {
    textDecoration: 'underline'
  }
}
