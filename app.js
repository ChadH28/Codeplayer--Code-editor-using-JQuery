
// to change the code which is viewed through the iframe
function updateOutput() {
    $('iframe').contents().find('html').html(
        "<html><head><style type='text/css'>" + $('#cssTextPanel').val()
        + "</style></head><body>" + $('#htmlTextPanel').val() + "</body></html>"
    )
    // eval function, evaluates / executes javascript code strings
    document.getElementById('outputTextPanel').contentWindow.eval($('#javascriptTextPanel').val());
}

updateOutput();
// function to toggle a button to be active or not 
$('.button').click(function() {
    $(this).toggleClass('active')
    var panelId = $(this).attr('id') + 'TextPanel'
    $('#' + panelId).toggleClass('hidden')
    var activePanels = 4 - $('.hidden').length;
    $('.panel').width(($(window).width() / activePanels) - 10.8);

})

// to measure the exact width and height according to the window the user is using 
$('.panel').height($(window).height() - $('.navbar').height());
$('.navbar').width($(window).width())
// to update the output before refresh of page
updateOutput();
$('textarea').on('change keyup paste', function() {
    // to update the output after refresh of page
    updateOutput();
})