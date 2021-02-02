import React from "react";
import '../index.css'
import image from '../images/Treatyoself.png'

const About = () => {
  return (
    <div> 
      <h1>Treat yo self store</h1>
      <div className='about'>
        <div>
        <img id='aboutImg'
        src={image} alt="girl with shopping cart"/> 
        <h3>Three words for you: Treat. Yo. Self.</h3>
        </div>
      
          <div>
            <h2>The act of treating ones self to something that relaxes them or that they enjoy</h2>
          <p>♪ Treat yourself 2011. ♪ </p>
          <p> A term that originated in popular NBC television show Parks and Recreation, 
            when Tom and Donna two financially self destructive adults that work in the
             Parks and Rec. Department of Pawnee, Indiana decide to spend an entire day pampering and spoiling themselves. 
            However in the process end up destroying their bank accounts. </p>
            <quote>
              "Once a year Donna and I spend a day treating ourselves. What do we treat ourselves to?"
              "Clothes". "Treat Yo Self". "Fragrances". "Treat Yo Self". "Massages". "Treat Yo Self". "Mimosas."
                "Treat Yo Self"
                "Fine leather goods"
                "Treat Yo Self" 
                </quote>

          <p>♪ The best day of the year ♪.</p></div>
        
      </div>
      </div>
  );
};

export default About;