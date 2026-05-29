"use client"

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-0 py-16">
        {/* Grid de conteúdo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* CONTATO */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg mb-2">Contato</h3>

            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="text-blue-600" />
              iacademy@gmail.com
            </p>

            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaPhone className="text-blue-600" />
              +55 11 99999-9999
            </p>

            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaMapMarkerAlt className="text-blue-600" />
              São Caetano do Sul – Brasil
            </p>
          </div>

          {/* MENU */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Home</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Trilhas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Ranking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Comunidade
                </a>
              </li>
            </ul>
          </div>

          {/* REDES SOCIAIS */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Redes</h3>

            <div className="flex justify-center md:justify-start gap-4">
              <a className="p-2 border rounded-lg hover:bg-gray-100 transition">
                <FaFacebookF />
              </a>
              <a className="p-2 border rounded-lg hover:bg-gray-100 transition">
                <FaTwitter />
              </a>
              <a className="p-2 border rounded-lg hover:bg-gray-100 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé final */}
      <div className="text-center py-4 border-t text-sm text-gray-500">
        © 2025 iAcademy. Todos os direitos reservados.
      </div>
    </footer>
  )
}
