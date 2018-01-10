$(document).ready(function () {
$("#search_item").focus(function () {
    if (this.value == $("#searchdefaulttext_var").html()) {
        this.value = ''; 
    }
	})
	
});
$(window).load(function () {
    $("a.bt-close").on('click', function () {
        $('#q-results').hide();
    });
    $('#content').on("click", function (e) {
        $('#q-results').hide();
    });
});
var timerid = null;
var Asearchreq = null;
function SearchMdd(event) {
var text = $(search_item).val();
    if (text.length > 2) {
		event.preventDefault();
		
		clearTimeout(timerid);
		
		//LuceneMdd(text);
        timerid = setTimeout(function () { LuceneMdd(text); }, 1000);
		} 
    if (event.which == 13 || event.keyCode == 13) {
        if (Asearchreq != null) {
			Asearchreq.abort();
		}
		SearchResult('search_item');
		}
    else {
		 $('#q-results').hide();
	}
}
function SearchResult(searchid) {
    if (Asearchreq != null) {
			Asearchreq.abort();
		}
								 
/* var SearchKey = document.getElementById("search_item").value; */
var SearchKey = document.getElementById(searchid).value;
    var IsMddValue = false;

var url = "/mvc/Common/LuceneSearchResults";
    var Data = { "SearchKeylist": SearchKey, "IsMdd": IsMddValue }
								
$.ajax({
        url: url,
        data: Data,
        type: "POST",
        dataType: "json",
        beforeSend: function () {
            $('.overlayLayer').css('display', 'block');
		},
        complete: function () {
            $('.overlayLayer').css('display', 'none');
		},
        success: function (SearchResult) {
/*if(searchid == "search_item_top" || searchid == "search_item_bottom")
{
	$('.overlayLayer').css('display','none');
}*/
var Portno = getPort();
            if (Portno != "" && Portno != undefined && Portno != null) {
var url = 'http://' + location.hostname + ':' + Portno + '/LuceneSearchResult' + "?" + "SearchKey=" + SearchKey;
                        $(location).attr('href', url);						
}
 var url = 'http://' + location.hostname + '/LuceneSearchResult' + "?" + "SearchKey=" + SearchKey;
                        $(location).attr('href', url);
						
								 					
},
        error: function (SearchResult) {
/*if(searchid == "search_item_top" || searchid == "search_item_bottom")
{
					$('.overlayLayer').css('display','none');
					}*/
								
return false;
}

}); 
}
var lastCallFired = false;

function LuceneMdd(text) {
    if (!lastCallFired) {
var IsMddValue = true;
        var SearchKey = text;
var url = "/mvc/Common/LuceneSearchBox";
        var Data = { "SearchKeylist": SearchKey, "IsMdd": IsMddValue }
Asearchreq = $.ajax({
            url: url,
            data: Data,
            type: "POST",
            success: function (SearchResult) {
 if (SearchResult != null && SearchResult != undefined && SearchResult.length > 0) {
                    if (window.innerWidth > 767) {
                        if (($("#q-results").css("display") == "none")) {
		showMdd();
	}
  }
  $('#LuceneMDDDynamicDiv').html(SearchResult);
   var tempHtml = $("#LuceneMDDDynamicDiv #q-results").html();
   $("#q-results").html("");
   $("#q-results").html(tempHtml);	
   $('#LuceneMDDDynamicDiv').html("")
   
}
},
            error: function (SearchResult) {
return false;
}
});
setInterval(checkStatus, 500);

    }
}

var checkStatus = function () {
    if (typeof request == "undefined") {
        lastCallFired = false;
		}
    else if (request.readyState != 4) {
            request.abort();
        }
    else {
        lastCallFired = true;
    }
	
};
function showMdd() {

		 $("#q-results")
            .css({
            "display": "block",
            "opacity": 0
          });

    $("#q-results").find('.inner').width($("#q-results").find('.inner').width());
		  $("#q-results")
            .css({
            "width": 0,
            "opacity": 1,
          "float": "right",
          "position": "relative",
          "left": "60px"
          })
            .stop()
            .animate({
            "width": "200%"
          },
      300, function () {
           $("#q-results").find('.inner').removeAttr('style');
          });
		 
}
function GetPdfDownloadLink() {
    var selectedpdfvalue = $('.new-select select').attr('title');
    var pdfkey = '';
    $('select#itemtype option').each(function () {

        var optiontext = $(this).html();

        if (selectedpdfvalue.toLowerCase() == optiontext.toLowerCase()) {
            pdfkey = $(this).attr('value');
}
    });

    window.open(pdfkey, '_blank');
}
function getPort() {
    if (location.port != '') {
      return location.port;  
  }
  }