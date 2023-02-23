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

// now let's display the collected data to the webpag dynamically

document.getElementById('addUsers').addEventListener('click', function(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => display(users))
    
    function display(users){
        for(const user of users){
            const li = document.createElement('li')
            li.innerText = user.name;
            positionToAdd.appendChild(li)
        }
    }
    document.getElementById('addUsers').setAttribute('disabled', 'true')
})

//now let's display some post using fetch API

const addPostBtn = document.getElementById('addPosts')
addPostBtn.addEventListener('click', function(){
      const postDiv = document.getElementById('post-container');
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => displayPost(posts))

    function displayPost(posts){
        for(const post of posts){
            const div = document.createElement('div');
            div.classList.add('post');
            div.innerHTML = `
            <h4> User-${post.userId}</h4>
            <h3> Title: ${post.title}</h3>
            <p>Post Description: ${post.body}</p>
            `
            postDiv.appendChild(div)
        }
    } 
    addPostBtn.innerText = 'Posted';
    addPostBtn.setAttribute('disabled', true)
})


