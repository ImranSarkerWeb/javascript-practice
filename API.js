
//random quote
function display(){
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(quotes => displayQuote(quotes))

    function displayQuote(quotes){
        const blockQuote = document.getElementById('quote')
        blockQuote.innerText = quotes.quote;
        console.log(quotes.quote)
    }
   }

   function back(){
    window.location.href = 'index.html'
   }


   //random user
   const displayUser = function () {
    fetch('https://randomuser.me/api/?gender=female')
        .then(response => response.json())
        .then(user => display(user))

    function display(user){
        const userImg = document.getElementById('user-img');
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        userImg.setAttribute('src', `${user.results[0].picture.large}`)
        name.innerText = `Name: ${user.results[0].name.title} ${user.results[0].name.first} ${user.results[0].name.last}`
        email.innerText = `Email: ${user.results[0].email}`
    }
}