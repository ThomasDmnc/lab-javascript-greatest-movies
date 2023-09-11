// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const map1 = moviesArray.map((x) => x.director);

    return map1;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) return 0;
    const map1 = moviesArray.filter((x) => x.director === "Steven Spielberg" && x.genre.includes("Drama"));

    return map1.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;

    const map1 = moviesArray.map((x) => x.score);
    let mapLength = moviesArray.length;
    const initialValue = 0;
    let total = map1.reduce((sum, value) => (typeof value == "number" ? sum + value : sum), initialValue);
    let result = (total / mapLength);
    let result2 = parseFloat(result.toFixed(2));

    return result2;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const arrMapped = moviesArray.filter((x) => x.genre.includes("Drama"));
    const result = scoresAverage(arrMapped);

    return result;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArr = moviesArray.map((x) => x);
    newArr.sort(function(a, b){ 
        if (a.year > b.year) return 1;
        if (a.year < b.year) return -1;
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
    });
    return newArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newArr = moviesArray.map((x) => x.title);
    return newArr.toSorted().splice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {


}
