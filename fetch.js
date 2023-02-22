/* 
    The fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers.
*/
const url = 'https://jsonplaceholder.typicode.com/todos/1';
fetch(url)//get the data from the url
    .then(response => response.json()) //converts the data to JSON object
    .then(json => console.log(json)) // Displays the JSON object

// now collect users data using fetch API and connect with HTML

function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => displayData(users))
}

//we can also connect function

function displayData(data){
    console.log(data)
}