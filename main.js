$(document).ready(function () {
    // Add task event listener
    $('#task-form').submit(function (event) {
        event.preventDefault();
        var task = $('#task-input').val();
        if (task !== '') {
            $('#task-list').append('<li>' + task + '</li>');
            $('#task-input').val('');
        }
    });

    // Task list item click event listener
    $('#task-list').on('click', 'li', function () {
        $(this).toggleClass('line-through');
    });
});