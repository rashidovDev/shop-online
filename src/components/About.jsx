import React from 'react';
import { NavLink } from 'react-router-dom';


const About = () => {
    return (
       <>
       <div className="container">
           <div className="row my-5">
               <div className="col-md-6 p-5">
                   <h1 className='text-primary fw-bold mb-4'>
                       About Us
                   </h1>
                   <p className='lead mb-4'>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, molestiae
                        quam aperiam nobis nulla tempore, facilis atque officia consequuntur ea
                         praesentium eum sapiente commodi. Totam, obcaecati! Fuga, tempore, soluta
                          ullam reiciendis officia nobis repellendus alias voluptas aliquid quod sunt
                           possimus quasi delectus consequuntur similique, eaque ab beatae veritatis
                            voluptatem accusantium cupiditate iste! Dignissimos doloremque ipsam odio 
                            dicta quae accusamus ad tempore cum ea libero rerum quo ut laudantium 
                            officiis dolor, ipsum iure quisquam quas quaerat nostrum accusantium 
                            aliquid eligendi sapiente? Cupiditate deleniti obcaecati magni 
                       doloremque sed corporis odit qui similique expedita eaque enim repudiandae dicta 
                       aliquam perspiciatis, saepe magnam facilis?
                   </p>
                   <NavLink to="/contact" className="btn btn-outline-primary">Contact Us</NavLink>
               </div>
               <div className="col-md-6 p-5 d-flex justify-content-center mt-5">
                   <img src={require('./asset/about.jpg')} alt="About" height="400px" width="550px"  />
               </div>
           </div>
       </div>
       </>
    );
}

export default About;