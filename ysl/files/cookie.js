$(document).ready(function () {
			CookieDiv=document.getElementById('cookie_banner');
             if(document.cookie.indexOf('CookiesEnabled') != -1)  /*if Cookie exists*/
			 {
					if(CookieDiv != null)
					{
					CookieDiv.parentNode.removeChild(CookieDiv);
					var elmReposition = $('#header .wrapper, #content');
					elmReposition.css('top', 0);
					}
			 }
			 else
			 {
					CookieDiv.removeAttribute('hidden');
			 }
                //var CookieExist=FindCookie();              
});           

      function getCookie() {

            var TestCookieLength = GetCookieLength();
			return TestCookieLength;
        }


        /*
         *  Check any cookie is set in server side and get its value.
         */
    function GetCookieLength() {
        var SiteUrl = location.protocol + "//" + location.host;
        var url = SiteUrl + "/mvc/Home/SetCookie";
        var Data = "true";
        var CookieLength = "";
        if (url != null && url != undefined) {
            $.ajax({
                url: url,
                data: Data,
                type: "GET",
                async: false,
                success: function(CookiePreference) {
                      CookieLength = CookiePreference;
			          CookieDiv=document.getElementById('cookie_banner');
			          CookieDiv.parentNode.removeChild(CookieDiv);
                },
                error: function(CookiePreference) {
                    CookieLength = CookiePreference;
                }
            });
        }
		console.log(CookieLength);
        return CookieLength;
    }
	
	function FindCookie() {
        var SiteUrl = location.protocol + "//" + location.host;
        var url = SiteUrl + "/mvc/Home/CheckCookie";
        var cookieLength = "";
        if (url != null && url != undefined) {
            $.ajax({
                url: url,
                type: "GET",
                async: false,
                success: function(lengthValue) {
                      cookieLength = lengthValue;
					  CookieDiv=document.getElementById('cookie_banner');
                if(cookieLength == "False" || cookieLength == "false")
                {
				//if cookie does not exists
				CookieDiv.removeAttribute('hidden');
				//	$('#cookie_banner').css('display','block');				    
				}
				else{//if cookie exists
					CookieDiv.parentNode.removeChild(CookieDiv);
					var elmReposition = $('#header .wrapper, #content');
					elmReposition.css('top', 0);
				}  
                },
                error: function(lengthValue) {
                    cookieLength = lengthValue;
                }
            });
        }
		console.log(cookieLength);
        return cookieLength;
    }
