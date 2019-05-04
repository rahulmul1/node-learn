//client side script
/**
 * On click of send send post request to server. Datta on server is maintained in server side cache.
 * Get is used to retrieve the data from server side cache and display on the screen.
 */
$(() => {
    $('#send').click(() => {
        var message = { name: $("#name").val(), message: $("#message").val() }
        postMessages(message);
    });

    getMessages();
})

function getMessages() {
    $.get("http://localhost:3000/messages",
        (data, textStatus, jqXHR) => {
            console.log('Inside success of getMessages : ', textStatus, data);
            addMessage(data)
        },
        "json"
    );
}

function addMessage(data) {
    $('#messages').empty()
    $.each(data, function (index, item) {
        $('#messages').append(`<h1>${item.name}</h1> <p>${item.message}</p>`)
    });
}
/**
 * @param {*} message 
 * 
 * data is always posted with 
 * Content-Type: application/x-www-form-urlencoded; charset=UTF-8
 */
function postMessages(message) {
    $.ajax({
        type: "post",
        url: "http://localhost:3000/messages",
        data: message,

        success: function (data, textStatus, jqXHR) {
            console.log('Inside success of postMessages : ', textStatus, data);
            getMessages();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('Inside ERROR of postMessages : ', textStatus, errorThrown);
        }
    });
}
