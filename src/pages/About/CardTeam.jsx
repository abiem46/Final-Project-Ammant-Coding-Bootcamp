import React from 'react'
import './about.css'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {GrInstagram} from'react-icons/gr'
import {BsLinkedin} from 'react-icons/bs'
import Photo from '../../assets/MI.png'
import Photo2 from '../../assets/IK.jpeg'
import ME from '../../assets/ME.png'
import Photo4 from '../../assets/GI.jpg'


function CardTeam() {
        return (
            <div className='row'>
                <h3>Team KSB-SMART</h3>
                <div className="col-3">
                    <div className="card radius-15">
                        <div className="card-body text-center">
                            <div className="p-4 border radius-15">
                                <img src={ME} width="110" height="110" className="rounded-circle shadow" alt="" />
                                <h5 className="mb-0 mt-5">Ahmad Fauzul Kabir</h5>
                                <p className="mb-3">Team I</p>
                                <div className="medsos mt-3 mb-3"> 
                                    <a href='https://www.whatsapp.com/082340992450'><AiOutlineWhatsApp/></a>
                                    <a href='https://instagram.com/abiem_houdini/' target="_blank" rel='noreferrer'><GrInstagram/></a>
                                    <a href='https://www.linkedin.com/in/umi-uzli-aulia-29b493232/' target="_blank" rel='noreferrer'><BsLinkedin/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card radius-15">
                        <div className="card-body text-center">
                            <div className="p-4 border radius-15">
                                <img src={Photo4} width="110" height="110" className="rounded-circle shadow" alt="" />
                                <h5 className="mb-0 mt-5">Virgina Nita Y</h5>
                                <p className="mb-3">Team II</p>
                                <div className="medsos mt-3 mb-3"> 
                                    <a href='https://www.whatsapp.com/082340992450'><AiOutlineWhatsApp/></a>
                                    <a href='https://instagram.com/abiem_houdini/' target="_blank" rel='noreferrer'><GrInstagram/></a>
                                    <a href='https://www.linkedin.com/in/umi-uzli-aulia-29b493232/' target="_blank" rel='noreferrer'><BsLinkedin/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card radius-15">
                        <div className="card-body text-center">
                            <div className="p-4 border radius-15">
                                <img src={Photo} width="110" height="110" className="rounded-circle shadow" alt="" />
                                <h5 className="mb-0 mt-5">Umi Uzli Aulia</h5>
                                <p className="mb-3">Team III</p>
                                <div className="medsos mt-3 mb-3"> 
                                    <a href='https://instagram.com/miumy2805/' target="_blank" rel='noreferrer'><GrInstagram/></a>
                                    <a href='https:///www.whatsapp.com/085337262535'><AiOutlineWhatsApp/></a>                                    
                                    <a href='https://www.linkedin.com/in/umi-uzli-aulia-29b493232/' target="_blank" rel='noreferrer'><BsLinkedin/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card radius-15">
                        <div className="card-body text-center">
                            <div className="p-4 border radius-15">
                                <img src={Photo2} width="110" height="110" className="rounded-circle shadow" alt="" />
                                <h5 className="mb-0 mt-5">Ikbal Fitrayansyah</h5>
                                <p className="mb-3">Team IV</p>
                                <div className="medsos mt-3 mb-3"> 
                                    <a href='https://instagram.com/miumy2805/' target="_blank" rel='noreferrer'><GrInstagram/></a>
                                    <a href='https:///www.whatsapp.com/085337262535'><AiOutlineWhatsApp/></a>                                    
                                    <a href='https://www.linkedin.com/in/umi-uzli-aulia-29b493232/' target="_blank" rel='noreferrer'><BsLinkedin/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
}


export default CardTeam    