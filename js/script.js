var name;
console.log(name);
/* .focus で選択されたテキストエリアの id を取得
        取得した id は hidden にいれて前回の操作対象を記憶 */
        $("textarea").focus(function(){
            var cur = $(this).attr("id");
            name = cur;
            $("#cur").val(cur);
            console.log(cur);
            chrome.runtime.sendMessage({name: cur},
                function(response){
                    console.log("message sent");
            });
        });
        
        var selectionObject = window.getSelection();
    var textarea = document.querySelector('#' + name);
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

    // 送信側 contents -> background
    chrome.runtime.sendMessage(
        { value: { contents: "test value from contents" } }
    );

        /* alert を出す */
    $("#func-alert").click(function(){
        var cur = $("#cur").val();
        var str = $("#" + cur).selection();
        console.log(str);
        /* 選択された文字があるかのチェック (適当) */
        if (str.match(/.+/)) {
            alert(str);
        }
    });