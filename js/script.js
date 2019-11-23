var name;

$(document).on('focus', 'textarea', function(){
    name = $(this).attr("id");
    //console.log(name);
});

var selectionObject = window.getSelection();
var textarea = document.querySelector('#' + name);
var pos_start = textarea.selectionStart;
var pos_end = textarea.selectionEnd;
var val = textarea.value;
var range = val.slice(pos_start, pos_end);
var beforeNode = val.slice(0, pos_start);
var afterNode = val.slice(pos_end);
var insertNode = range.replace( /\!\[.*\]\(/g, '<img src="' ).replace(/\)/g, '" width="320">');
textarea.value = beforeNode + insertNode + afterNode;
