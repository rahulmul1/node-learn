//client side script
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
            console.log(textStatus)
            addMessage(data)
        },
        "json"
    );
}

function addMessage(data) {
    $.each(data, function (index, item) {
        $('#messages').append(`<h1>${item.name}</h1> <p>${item.message}</p>`)
    });
}

function postMessages(message) {
    $.ajax({
        type: "post",
        url: "http://localhost:3000/messages",
        data: message,
        dataType: "json",
        success: function (response) {
            console.log(response);
        }
    });
}
