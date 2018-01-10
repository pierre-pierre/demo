$(document).ready(function () {
	$('#country_popup_wrapper').popup({transition: 'all 0.3s'});
});
function CountryPopUp(idelement)
		{
		
		idvalue=idelement.id;
	    GetCountryPopUp(idvalue);
		}

function GetCountryPopUp(ItemId) {
		
        var url = "/mvc/Common/Countries";
		
            var Data = { "ItemId": ItemId }
			
            $.ajax({
                url: url,
                data: Data,
                type: "GET",
                success: function (result) {
                     if (result != null && result != undefined && result.length > 0) {
                           				  
                           $('.dynamicCountryPopin').html(result);
						   
                    } 
                },
                error: function (result) 
                 {
                   return false;
                }
            });
        }
    
function toggleMore() {
    var more = document.getElementById("ErrorMorePanel");
    more.style.display = more.style.display == "none" ? "" : "none";
}
    
    