function WriteCookie()
{
    cookievalue=  document.getElementById("username").value;
    document.cookie= cookievalue;
}

$( '#usernameButton' ).click(function() {
    WriteCookie();
})

var cookieArray = document.cookie.split(";");

var username = cookieArray[0];


window.onload = function() {
  
    $( '#username' ).html(username);
  };
