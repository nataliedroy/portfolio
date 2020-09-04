// a function to create tabs on my portfolio site!
// first time doing something like this, heavily copied from w3schools
function openTab(evt, tabName) {
  // variables
  var i, tabcontent, tablinks;

  // hide tabs
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // collect elements and remove active class
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // show sleected tab and declare it active
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
