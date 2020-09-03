/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react'

import { Title } from '../components/Title'
import { SearchForm } from '../components/SearchForm'
import { MoviesList } from '../components/MoviesList'

export class Home extends Component{
    state = { usedSearch: false, results: []}

    _handleResults = (results) =>{
      this.setState({results, usedSearch: true})
    } 
  
    _renderResults(){
      return this.state.results.length === 0
        ? <p>Lo siento! resultado no encontrado <span role="img" arial-label="peach">😔</span></p>
        : <MoviesList movies={this.state.results} />
    }
  
    render(){
        return(
            <div>
                <Title>Buscador de Peliculas</Title>
                <div className='SearchForm-wrapper'>
                <SearchForm onResults= {this._handleResults} />
                </div>
                {this.state.usedSearch
                ? this._renderResults()
                : <small>Utilice el formulario para buscar informacion de tu película favorita</small>
                }
            </div>
        )
    }
}