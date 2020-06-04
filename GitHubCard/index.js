/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// axios.get('https://api.github.com/users/jduell12')
//   .then(data => {
//     console.log(data);
//     console.log(data.data.avatar_url);
//   })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

// axios.get('https://api.github.com/users/jduell12')
//   .then(data => {
//     let front = data.data;
//     let card = makeCard({imgURL: front.avatar_url, name: front.name, userName: front.login, location: front.location, address: front.html_url, fs: front.followers, fg: front.following, info: front.bio});
//     let cardArea = document.querySelector('.cards');
//     cardArea.appendChild(card);
    
//   })
//   .catch(err => {
//     console.log(err);
//   })

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const usersArray = ['jduell12', 'MaryamMosstoufi', 'sage-jordan', 'tsbarrett89', 'emilioramirezeguia', 'Roboblox'];

usersArray.forEach(item => {
  axios.get(`https://api.github.com/users/${item}`)
  .then(data => {
    let front = data.data;
    let card = makeCard({imgURL: front.avatar_url, name: front.name, userName: front.login, location: front.location, address: front.html_url, fs: front.followers, fg: front.following, info: front.bio});
    let cardArea = document.querySelector('.cards');
    cardArea.appendChild(card);
    
  })
  .catch(err => {
    console.log(err);
  })
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/


function makeCard (obj){
  const {imgURL, name, userName, location, address, fs, fg, info} = obj;

  //create elements
  let card = document.createElement('div');
  let img = document.createElement('img');
  let cardInfo = document.createElement('div');
  let nameH3 = document.createElement('h3');
  let username = document.createElement('p');
  let loc = document.createElement('p');
  let profile = document.createElement('p');
  let profileLink = document.createElement('a');
  let followers = document.createElement('p');
  let following = document.createElement('p');
  let bio = document.createElement('p');

  //add class names to each element 
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  username.classList.add('username');

  //add information to each element 
  img.src = imgURL;
  nameH3.textContent = name;
  username.textContent = userName;
  loc.textContent = `Location: ${location}`;
  profileLink.href = address;
  profileLink.textContent = address;
  profile.textContent = `Profile: `;
  followers.textContent = `Followers: ${fs}`;
  following.textContent = `Following: ${fg}`;
  bio.textContent = `Bio: ${info}`;


  //append each element onto each other appropiately
  profile.appendChild(profileLink);

  let elements = [nameH3, username, loc, profile, followers, following, bio];

  elements.forEach(item => {
    cardInfo.appendChild(item);
  })
  card.appendChild(img);
  card.appendChild(cardInfo);

  //returns the card
  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
