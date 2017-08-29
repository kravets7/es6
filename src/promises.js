'use strict';

/*
let promise = new Promise((resolve, reject) => {
    resolve(15);
});

promise
    .then(function resultHandler(res) {
        console.log(10, res);
        throw "Error";
    })
    .then(function (res) {
        console.log(14, res);
    })
    .catch(function errorHandler(err) {
        console.log(13, err);
    });*/



const movies = [];

function getData(url) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function() {
            if (xhr.status === 200) {
                let json = JSON.parse(xhr.response);
                resolve(json.Search);
            } else {
                reject(xhr.statusText);
            }
        };
        
        xhr.onerror = function(error) {
            reject(error);
        };
        
        xhr.send();
    });
}

let batman = getData('http://www.omdbapi.com/?s=batman');
let superman = getData('http://www.omdbapi.com/?s=superman');

function addMovieToList(movie) {
    movies.push(movie);
    console.log(movies);
}

batman
    .then(movies =>
        movies.forEach(movie =>
            addMovieToList(movie)))
    .catch(error => console.error(error));
    
superman
    .then(movies =>
        movies.forEach(movie =>
            addMovieToList(movie)))
    .catch(error => console.error(error));

Promise.race([batman, superman])
    .then(movies =>
        movies.forEach(movie =>
            addMovieToList(movie)))
    .catch(error => console.error(error));
