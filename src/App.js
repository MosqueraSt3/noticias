import React, { Fragment,useState,useEffect } from 'react'

import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'

function App() {

  // STATE
  const [ categoria, guardarCategoria ] = useState('')
  const [ noticias, guardarNoticias ] = useState([])

  // EFFECT
  useEffect(() => {
    const consultarAPI = async () => {
      const API_KEY = 'ad65303ef081493599ec65c8e2a8efdd'
      const COUNTRY = 'co'
      const url = `http://newsapi.org/v2/top-headlines?country=${COUNTRY}&category=${categoria}&apiKey=${API_KEY}`
      const respuesta = await fetch(url)
      const noticias = await respuesta.json()
      guardarNoticias(noticias.articles)
    }
    consultarAPI()
  }, [categoria])
  return (
    <Fragment>
      <Header 
        titulo="Buscador de Noticias"
      />
      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </Fragment>
  )
}

export default App;
