import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Thumb = () => (
    <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center md:justify-evenly bg-black text-white py-2 space-y-2 md:space-y-0 md:space-x-4 text-sm md:text-base">
        <span className="font-bold hover:text-red-500 text-center">R. LÍBERO BADARÓ, 496- SAO PAULO - SP</span>

        <a
            href={`https://wa.me/+553191526244?text=Olá! Eu tenho interesse nas suas experiências de massoterapia.`}
            className="font-semibold text-green-500 hover:text-red-500 transition-colors text-center"
            target="_blank"
            rel="noopener noreferrer"
        >
            <span className="flex items-center space-x-2">
                <FaWhatsapp className="text-green-500" />
                <span>+55 31 9152-6244</span>
            </span>
        </a>
        <span className="font-semibold hover:text-red-500 text-center">SEGUNDA A SEXTA: 9h ÀS 19h; SÁBADO: 9h ÀS 14h</span>
    </div>
);

export default Thumb;
