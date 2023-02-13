import React from 'react'
import uno from '../assets/marketing.jfif';
import ingles from '../assets/ingles.webp';
import cisco from '../assets/cisco.jfif';
import java from '../assets/javascript.png';


export default function Curso() {

   
  return (
    <>

            
            <div className='animate__animated animate__backInDown'>
                <h1>Cursos</h1>

            </div>
                 
         <div className='container  '>
                       
                    <div class="card-group animate__animated animate__backInLeft " >
                        <div class="card bordes">
                            <img className="img-cursos card-img-top" src={uno} alt="Card image cap"/>
                        <   div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div class="card bordes">
                            <img className="img-cursos card-img-top" src={ingles} alt="Card image cap"/>
                            <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div class="card bordes">
                            <img className="img-cursos card-img-top" src={cisco} alt="Card image cap"/>
                            <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div class="card bordes">
                            <img className="img-cursos card-img-top" src={java} alt="Card image cap"/>
                            <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                    <div class="card-group animate__animated animate__backInRight " >
                        <div class="card bordes">
                            <img className="img-cursos card-img-top" src={uno} alt="Card image cap"/>
                        <   div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        <div class="card bordes">
                            <img className="img-cursos card-img-top" src={ingles} alt="Card image cap"/>
                            <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                        
                        <div class="card bordes">
                        <img className="img-cursos card-img-top" src={java} alt="Card image cap"/>
                            <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                          

                        </div>
                    </div>

                    
                    
                </div>
                
      

    </>
  )
}
