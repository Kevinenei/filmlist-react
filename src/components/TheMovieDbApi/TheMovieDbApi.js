import React, { Component } from 'react';
import axios from 'axios'

const API_KEY = 'b646b550ce8d5cf2d596fea24456bd8d';
class TheMovieDbApi {
 constructor() {
 this.axios = axios.create({
 baseURL: 'https://api.themoviedb.org/3',
 params: {
 api_key: API_KEY,
 language: 'es-AR',
 },
 })
 }
 getPopularMovies = (page = 1) => (
 this.axios.get(`/discover/movie?sort_by=popularity.desc`, {
 params: {page: page}
 })
 );
 getPopularSeries = (page = 1) => (
 this.axios.get(`/tv/popular`, {
 params: {page: page}
 })
 );
 getCategories = (page = 1) => (
 this.axios.get(`/genre/movie/list`, {
 params: {page: page}
 })
 );
 
}

export default TheMovieDbApi;