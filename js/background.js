var textareaName


var script01 = function()
{
    console.log("-----------------");
    console.log(textareaName);
    //var textarea = $("#"+textareaName);
    //var str1 = $("#"+textareaName).val();
    //console.log(str1);
    var selectionObject = window.getSelection();
    var textarea = document.querySelector('#' + textareaName);
    console.log (textarea)
    console.log (selectionObject)
    var pos_start = textarea.selectionStart;
    var pos_end = textarea.selectionEnd;
    var val = textarea.value;
    var range = val.slice(pos_start, pos_end);
    var beforeNode = val.slice(0, pos_start);
    var afterNode = val.slice(pos_end);
    var insertNode = range.replace( /\!\[image\]\(/g, '<img src="' ).replace(/\)/g, '" width="320">');
    textarea.value = beforeNode + insertNode + afterNode;
    alert("拡張機能を実行しました");
};
 
(function()
{
    //chrome.browserAction.onClicked.addListener(script01);
    chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.executeScript(null, { file: "js/jquery.js" }, function() {
            chrome.tabs.executeScript(null, { file: "js/script.js" });
        });
    });
})();

chrome.runtime.onMessage.addListener(
	function(request,sender,sendResponse){
		parseItems = [];
		console.log(request);
		console.log(sender);
		console.log(sendResponse);
        textareaName = request.name;
        console.log("!!!!aaa!");
        console.log(id);
		var res = "finish";
		sendResponse(res);
	}
);