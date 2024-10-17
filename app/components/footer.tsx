
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-custom-navy text-custom-cream font-pixel py-8">
            <div className="container mx-auto px-4">
                <div className="flex justify-center space-x-6 mb-6">
                    <a href="#" className="text-3xl hover:text-custom-yellow transition duration-300"><FaFacebook /></a>
                    <a href="#" className="text-3xl hover:text-custom-yellow transition duration-300"><FaInstagram /></a>
                    <a href="#" className="text-3xl hover:text-custom-yellow transition duration-300"><FaYoutube /></a>
                    <a href="#" className="text-3xl hover:text-custom-yellow transition duration-300"><FaTwitter /></a>
                </div>

                <ul className="flex flex-wrap justify-center mb-6">
                    <li className="mx-4 my-2"><a href="#" className="hover:text-custom-orange transition duration-300">Contact us</a></li>
                    <li className="mx-4 my-2"><a href="#" className="hover:text-custom-orange transition duration-300">Our Services</a></li>
                    <li className="mx-4 my-2"><a href="#" className="hover:text-custom-orange transition duration-300">Privacy Policy</a></li>
                    <li className="mx-4 my-2"><a href="#" className="hover:text-custom-orange transition duration-300">Terms & Conditions</a></li>
                </ul>

                <div className="text-center text-sm">
                    <p>RETRO SITE Copyright © 2024 - All rights reserved</p>
                    <p>Designed with 8-bit love</p>
                </div>
            </div>
        </footer>
    );
};
