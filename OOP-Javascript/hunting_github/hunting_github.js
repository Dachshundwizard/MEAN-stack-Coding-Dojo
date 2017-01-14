$(document).ready(function(){
    $('button').one('click', function(){
        $.get("https://api.github.com/users/Quint436", displayName)
        function displayName(data) {
            $('body').append('<p class="name">' + data.name + '</p>');

        }
    });
});
