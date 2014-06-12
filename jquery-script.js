$(document).ready(function () {
    var input = $("#search");
    var list = $("#mid-rightUL");

    list.on("click", ".remove", function() {
        $(this).parent().remove();
    });

    $("#form1").submit(function () {
        var text = input.val();
        var li = $("<li class='listitem'><span class='toDoText'>"+text+"</span>"+
                    "<button class='remove' type='button'>Remove</button>"+
                    "<button class='decreasePrior'>Down</button>"+
                    "<button class='increasePrior'>UP</button></li>");
        list.append(li);
        return false;
    });

    list.delegate(".toDoText","click",function(){
        var tempText = $(this).clone().children().remove().end().text();
        var inputBox =$("<form><input class=\"editbox\" type=\"text\" value=\""+tempText+"\"></form>"); 
        $(this).replaceWith(inputBox);

        return false;
    });
    list.delegate(".editbox","dblclick",function () {
        var newtext=$(".editbox").val();
        $(this).replaceWith("<li>"+newtext+"</li>");
    });
    list.delegate(".increasePrior","click",function(){
        $(this).parent().insertBefore( $(this).parent().prev());
    });
   list.delegate(".decreasePrior","click",function(){
        $(this).parent().insertAfter($(this).parent().next());
   });
});