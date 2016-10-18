/**
 * Created by doramedgyasszay on 2016. 10. 18..
 */
$(document).ready(function () {
    $("#counter").hide();
    $("li").hide();
    $('.button-1').click(function () {
        var input = $('.input-1').val();
        $("li").show();
        //$('#result').html('<p>' +input+'</p>');
        $('.word').append('<li>' +input+'</li>')
    });
    var counter = 0;
    $('.button-2').click(function () {
        counter++;
        $("#counter").show();
        $('#counter').html('<p>'+counter+'</p>');

    });
    $('.calculate').click(function () {
        var n = $('.mynumber').val();
        var number = $('.longnumber').val();
        var guess = [];
        $('.num-result').html('<p>'+numberFinder(n, number)+'</p>')
})
    });