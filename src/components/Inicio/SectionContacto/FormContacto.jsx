import React from 'react'

const FormContacto = () => {
  return (
    <form className="space-y-4 px-6">
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <div className="w-full">
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-marron-100"
            required
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            name="email"
            placeholder="Tu email"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-marron-100"
            required
          />
        </div>
      </div>

      <div>
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-marron-100"
          required
        />
      </div>

      <div>
        <textarea
          name="mensaje"
          placeholder="Mensaje"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-marron-100"
          rows="5"
          required
        ></textarea>
      </div>

      <div className="text-center pb-4">
        <button type="submit" className="px-6 py-2 bg-marron-100 text-white rounded-lg hover:bg-marron-300 transition-colors" required>Enviar</button>
      </div>
    </form>
  )
}

export default FormContacto