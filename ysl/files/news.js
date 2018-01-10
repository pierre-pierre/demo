    $(document).ready(function () { 
	var NewsDefault = $("#newsfilterdefault").html();
	 $(".select").html(NewsDefault);
	 $("#ThemeType").attr('title',NewsDefault); 
  });
  function GetNews() {
        var ThemeType = $("#ThemeType option:selected").val();
        var url = "/mvc/Medias/NewsCarousal";
   
            var Data = { "Theme": ThemeType }        
                $.ajax({
                    url: url,
                    data: Data,
                    type: "GET",
                    contentType: "application/json;charset=utf-8",
                    success: function (result) {
                      
                        if (result != null && result != undefined && result.length > 0) {
                            $('#dynamicDiv').html(result);
                            var tempHtml = $("#dynamicDiv .news_flexslider").html();
                            $('.news_flexslider').removeData("flexslider");                         
                            $('#dynamicDiv').html("");
                            $('#Newsid .news_flexslider').html("");
                            $('#Newsid .news_flexslider').html(tempHtml);
                          //  $("#Newsid ul li").attr('style', 'width: 309.333px; float: left; display: block;');
                            flexInit();
                        }
                    },
                    error: function (result) {
                       
                    }
                });
              
    }
    
    function getGridSize() {
                       
        return (window.innerWidth < 480) ? 1 :
            (window.innerWidth < 600) ? 2 :
            (window.innerWidth < 1400) ? 3 : 4;
		
    }
    function flexInit() {     
        $('.news_flexslider').flexslider({
            randomize: false,
            animation: "slide",
            useCSS:false,
            itemWidth: 330,
            minItems: getGridSize(),
            maxItems: getGridSize(),
           start: function (slider) {
                flexslider = slider;
           }

        });
    }