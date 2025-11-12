import React from 'react';
import { FaLinkedin, FaGithub, FaGoogle } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const TeamCard = ({ member }) => {
    const {
        name,
        workplace,
        position,
        email,
        googleScholar,
        github,
        linkedin,
        role,
        image
    } = member;

    return (
        <div className="bg-white rounded-lg border-2 p-2 border-green-primary overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="relative h-64 overflow-hidden">
                <img 
                    src={image || '/assets/placeholder-profile.jpg'} 
                    alt={name}
                    className="w-full h-full object-cover object-center rounded-md"
                    onError={(e) => {
                        e.target.src = '/assets/placeholder-profile.jpg';
                    }}
                />
            </div>

            <div className="p-5 flex-grow flex flex-col">
                <div className="mb-2">
                    <h3 className="text-xl font-bold font-nunito text-gray-800">{name}</h3>
                    <p className="text-green-primary font-semibold">{role}</p>
                </div>
                
                <div className="text-gray-600 text-sm mb-4 flex-grow">
                    <p className="mb-1">{position}</p>
                    <p className="italic">{workplace}</p>
                </div>
                
                <div className="flex space-x-3 mt-auto">
                    {email && (
                        <a 
                            href={`mailto:${email}`} 
                            className="text-gray-500 hover:text-green-primary transition-colors duration-300"
                            aria-label="Email"
                        >
                            <MdEmail size={20} />
                        </a>
                    )}
                    
                    {googleScholar && (
                        <a 
                            href={googleScholar} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-green-primary transition-colors duration-300"
                            aria-label="Google Scholar"
                        >
                            <FaGoogle size={18} />
                        </a>
                    )}
                    
                    {github && (
                        <a 
                            href={github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-green-primary transition-colors duration-300"
                            aria-label="GitHub"
                        >
                            <FaGithub size={20} />
                        </a>
                    )}
                    
                    {linkedin && (
                        <a 
                            href={linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-green-primary transition-colors duration-300"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={20} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeamCard;