// Used to toggle the menu on small screens when clicking on the menu button

function smallMenu() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function dropDownFunction(d) {
    document.getElementById(d).classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementsByClassName('dropdown-content')
    console.log(myDropdown)
    for (var i = 0; i < myDropdown.length; i++){
      myDropdown[i]
      if (myDropdown[i].classList.contains('show')) {
        myDropdown[i].classList.remove('show');
      }
    }
  }
}

let quoteArr=["You have to make those little noises, or it just doesn't work","Talent is a pursued interest. Anything that you\'re willing to practice, you can do.", "They say everything looks better with odd numbers of things. But sometimes I put even numbers—just to upset the critics.", "The Universe is made of Stories-not Atoms.", "Creativity is contagious, pass it on.", "The principles of true art is not to portray, but to evoke.", "I want to put a ding in the universe."];
let authorArr=["Bob Ross", "Bob Ross", "Bob Ross", "Muriel Rukeyseir", "Albert Einstein", "Jerzy Kosinski", "Steven Jobs"];

document.onreadystatechange = function(e) {
  if (document.readyState === 'complete') {
    let randID = Math.floor(Math.random() * 7);
    document.getElementById("quote").innerHTML = quoteArr[randID];
    document.getElementById("quoteAuthor").innerHTML = authorArr[randID]
  }
};
