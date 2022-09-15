import React from "react";
import '../Team/team.css'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {GrInstagram} from'react-icons/gr'
import {BsLinkedin} from 'react-icons/bs'
import Photo from '../../assets/MI.png'
import Photo2 from '../../assets/IK.jpeg'
// import Photo3 from '../../assets/no.png'
import Photo4 from '../../assets/GI.jpg'

const Team = () => {
    return(
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {/* <div className="col">
                    <div className="card">
                    <img src={Photo3} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Ahmad Fauzul Kabir</h5>
                        <a href='https://www.whatsapp.com/082340992450'><AiOutlineWhatsApp/></a>
                        <a href='https://instagram.com/abiem_houdini/' target="_blank" rel='noreferrer'><GrInstagram/></a>
                        <a href='https://www.linkedin.com/in/umi-uzli-aulia-29b493232/' target="_blank" rel='noreferrer'><BsLinkedin/></a>
                    </div>
                    </div>
                </div> */}
                <div className="col">
                    <div className="card">
                    <img src={Photo4} className="card-img-top" alt="..." style={{width: "50"}}/>
                    <div className="card-body">
                        <h5 className="card-title">Virgina Nita Y</h5>
                        <a href='https://www.whatsapp.com/085337728408'><AiOutlineWhatsApp/></a>
                        <a href='https://instagram.com/piijjiinn/' target="_blank" rel='noreferrer'><GrInstagram/></a>
                        <a href='https://www.linkedin.com/in/umi-uzli-aulia-29b493232/' target="_blank" rel='noreferrer'><BsLinkedin/></a>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src={Photo} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Umi Uzli Aulia</h5>
                        <a href='https://www.whatsapp.com/085337262535'><AiOutlineWhatsApp/></a>
                        <a href='https://instagram.com/miumy2805/' target="_blank" rel='noreferrer'><GrInstagram/></a>
                        <a href='https://www.linkedin.com/in/umi-uzli-aulia-29b493232/' target="_blank" rel='noreferrer'><BsLinkedin/></a>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src={Photo2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Ikbal Fitrayansyah</h5>
                        <a href='https://www.whatsapp.com/085337262535'><AiOutlineWhatsApp/></a>
                        <a href='https://instagram.com/fitrayansyah_ikbal/' target="_blank" rel='noreferrer'><GrInstagram/></a>
                        <a href='https://www.linkedin.com/in/umi-uzli-aulia-29b493232/' target="_blank" rel='noreferrer'><BsLinkedin/></a>
                    </div>
                    </div>
                </div>
            </div>

        </>
    //     <div className="about_team">
    //     <div>
    //         <h3>Team</h3>
    //         <div className="container2">
    //             <div className="gallery">
    //                 <div>
    //                     <img className="photo" src={Photo} alt="photo1" />
    //                     <div className="text"> 
    //                         <h4>Umi Uzli A</h4>
    //                         <a href='https://www.whatsapp.com/085337262535'><AiOutlineWhatsApp/></a>
    //                         <a href='https://instagram.com/miumy2805/' target="_blank" rel='noreferrer'><GrInstagram/></a>
    //                         <a href='https://www.linkedin.com/in/umi-uzli-aulia-29b493232/' target="_blank" rel='noreferrer'><BsLinkedin/></a>
    //                     </div>
    //                 </div>
    //                 <div>
    //                     <img className="photo" src={Photo2} alt="photo1" />
    //                     <div className="text"> 
    //                         <h4>Ikbal Fitrayansyah</h4>
    //                         <a href='https://www.whatsapp.com/085337262535'><AiOutlineWhatsApp/></a>
    //                         <a href='https://instagram.com/fitrayansyah_ikbal/' target="_blank" rel='noreferrer'><GrInstagram/></a>
    //                         <a href='https://www.linkedin.com/in/umi-uzli-aulia-29b493232/' target="_blank" rel='noreferrer'><BsLinkedin/></a>
    //                     </div>
    //                 </div>
    //                 {/* <div>
    //                     <img className="photo" src={Photo3} alt="photo1" />
    //                     <div className="text"> 
    //                         <h4>Ahmad Fauzul K</h4>
    //                         <a href='https://www.whatsapp.com/082340992450'><AiOutlineWhatsApp/></a>
    //                         <a href='https://instagram.com/abiem_houdini/' target="_blank" rel='noreferrer'><GrInstagram/></a>
    //                         <a href='https://www.linkedin.com/in/umi-uzli-aulia-29b493232/' target="_blank" rel='noreferrer'><BsLinkedin/></a>
    //                     </div>
    //                 </div> */}
    //                 <div>
    //                     <img className="photo" src={Photo4} alt="photo1" />
    //                     <div className="text"> 
    //                         <h4>Virgina Nita S</h4>
    //                         <a href='https://www.whatsapp.com/085337728408'><AiOutlineWhatsApp/></a>
    //                         <a href='https://instagram.com/piijjiinn/' target="_blank" rel='noreferrer'><GrInstagram/></a>
    //                         <a href='https://www.linkedin.com/in/umi-uzli-aulia-29b493232/' target="_blank" rel='noreferrer'><BsLinkedin/></a>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
            
    //     </div>
    // </div>
    )
}
export default Team