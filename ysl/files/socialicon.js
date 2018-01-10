    
	var CurrentURL = "";
 	var SocialUrl = "";
	$(document).ready(function() 
    {
       $('#Emailpopup_wrapper').popup({ transition: 'all 0.3s' });
       CurrentURL = $(location).attr('href');
        $("#currentUrl").html(CurrentURL);
    });
   
   function SendEmail(){
   	ClearUserErrorMessages();
	   var CustomerFirstName = document.getElementById('fname').value;
       var CustomerLastName = document.getElementById('lname').value;
	   var CustomerEmail = document.getElementById('email').value;
       var Friend1Email = document.getElementById('friend1email').value;
	   var Friend2Email = document.getElementById('friend2email').value;
       var Friend3Email = document.getElementById('friend3email').value;
	   var Message = document.getElementById('Message').value;
	        
   	if(validateSocialIconEmail()){
   		try{
			var Data = { "CustomerFirstName": CustomerFirstName,"CustomerLastName":CustomerLastName,"CustomerEmail": CustomerEmail,"Friend1Email":Friend1Email,"Friend2Email": Friend2Email,"Friend3Email":Friend3Email,"Message":Message,"CurrentPageURL":CurrentURL}
   			SocialUrl = "/mvc/Common/SocialIconMail";
			$.ajax({
			url : SocialUrl,
			data : Data, 
			type : "POST",
			success: function(result){     		
				var url = 'http://' + location.hostname + '/ConfirmationPage';
                        $(location).attr('href', url);
   			},
   			error : function(result){
			if($("#errFailure")!=null && $("#errFailure")!=undefined && $("#errFailure").length>0){
                   $("#errFailure").show();
               } 			   
   			}
   			});
   		 }
   		catch(err){
   			var error = err;
   		} 
   	}
}

function validateSocialIconEmail()
{    		
        var flag = true;
        var emailReg =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var email = $("#email").val();
	 if ($("#fname") != null && $("#fname") != undefined && $("#fname").length > 0 && $("#fname").val() == "") 
	        {
	            if ($("#errFirstName") != null && $("#errFirstName") != undefined && $("#errFirstName").length > 0) {
	                $("#errFirstName").show();
			$("#fname").addClass("error-field");
	                flag = false;
	            }
        	}
        
        if ($("#lname") != null && $("#lname") != undefined && $("#lname").length > 0 && $("#lname").val() == "") {
	            if ($("#errLastName") != null && $("#errLastName") != undefined && $("#errLastName").length > 0) {
	                $("#errLastName").show();
			$("#lname").addClass("error-field");
	                flag = false;
	            }
        	}
       
        if ($("#email") != null && $("#email") != undefined && $("#email").length > 0 && $("#email").val() == "")  
	        {
	            if ($("#errMail") != null && $("#errMail") != undefined && $("#errMail").length > 0) {
	                $("#errMail").show();
			$("#email").addClass("error-field");
	                flag = false;
	            }
	        }
	        else if(!$("#email").val().match(emailReg))
	        {
	            if ($("#errMailFormat") != null && $("#errMailFormat") != undefined && $("#errMailFormat").length > 0) 
	            {
	                $("#errMailFormat").show();
			$("#email").addClass("error-field");
	                flag = false;
	            }
        	}
        if ($("#friend1email") != null && $("#friend1email") != undefined && $("#friend1email").length > 0 && $("#friend1email").val() == "")  
	        {
	            if ($("#errFriend1Mail") != null && $("#errFriend1Mail") != undefined && $("#errFriend1Mail").length > 0) 
				{
	                $("#errFriend1Mail").show();
					$("#friend1email").addClass("error-field");
	                flag = false;
	            }
	        }
	        else if(!$("#friend1email").val().match(emailReg))
	        {
	            if ($("#errFriend1MailFormat") != null && $("#errFriend1MailFormat") != undefined && $("#errFriend1MailFormat").length > 0) 
	            {
	                $("#errFriend1MailFormat").show();
					$("#friend1email").addClass("error-field");
	                flag = false;
	            }
        	}
     
	
        if ($("#friend2email") != null && $("#friend2email") != undefined && $("#friend2email").length > 0 && $("#friend2email").val().length >0) 
		{
			     if(!$("#friend2email").val().match(emailReg))
				        {
				            if ($("#errFriend2MailFormat") != null && $("#errFriend2MailFormat") != undefined && $("#errFriend2MailFormat").length > 0) 
				            {
				                $("#errFriend2MailFormat").show();
								$("#friend2email").addClass("error-field");
				                flag = false;
				            }
						}
		}
			if ($("#friend3email") != null && $("#friend3email") != undefined && $("#friend3email").length > 0 && $("#friend3email").val().length >0) 
			{
			     if(!$("#friend3email").val().match(emailReg))
				        {
				            if ($("#errFriend3MailFormat") != null && $("#errFriend3MailFormat") != undefined && $("#errFriend3MailFormat").length > 0) 
				            {
				                $("#errFriend3MailFormat").show();
								$("#friend3email").addClass("error-field");
				                flag = false;
				            }
						}
        	}
	         
       		 
       		 	if(flag == false)
	        	{
					if($("#errFailure")!=null && $("#errFailure")!=undefined && $("#errFailure").length>0)
					{
						$("#errFailure").show();
					}
	        	}
			return flag;
	       
	}
	
	
	
		
	 function ClearUserErrorMessages(){
		if($(".error")!=null && $(".error")!=undefined && $(".error").length>0){
			$(".error").hide();
		}
		if ($("#fname") != null && $("#fname") != undefined && $("#fname").length > 0) {
              if($("#fname").hasClass("error-field")){				
				$("#fname").removeClass("error-field");
				}
            }
			if ($("#lname") != null && $("#lname") != undefined && $("#lname").length > 0) {
              if($("#lname").hasClass("error-field")){				
				$("#lname").removeClass("error-field");
				}
            }
			if ($("#email") != null && $("#email") != undefined && $("#email").length > 0) {
              if($("#email").hasClass("error-field")){				
				$("#email").removeClass("error-field");
				}
            }
			if ($("#friend1email") != null && $("#friend1email") != undefined && $("#friend1email").length > 0) {
              if($("#friend1email").hasClass("error-field")){				
				$("#friend1email").removeClass("error-field");
				}
            }
			if ($("#friend2email") != null && $("#friend2email") != undefined && $("#friend2email").length > 0) {
              if($("#friend2email").hasClass("error-field")){				
				$("#friend2email").removeClass("error-field");
				}
            }
			if ($("#friend3email") != null && $("#friend3email") != undefined && $("#friend3email").length > 0) {
              if($("#friend3email").hasClass("error-field")){				
				$("#friend3email").removeClass("error-field");
				}
            }
	}
	
	function formclear() 
{
        $('.std-form input[type=text]').val('');
        $('.std-form textarea').val('');
        $('.error').hide();
        if($("#fname").hasClass("error-field"))
        {
            $("#fname").removeClass("error-field");
        }
        if ($("#lname").hasClass("error-field"))
        {
            $("#lname").removeClass("error-field");
        }
        if ($("#email").hasClass("error-field"))
        {
            $("#email").removeClass("error-field");
        }
        if ($("#friend1email").hasClass("error-field"))
        {
            $("#friend1email").removeClass("error-field");
        }
        if ($("#friend2email").hasClass("error-field"))
        {
            $("#friend2email").removeClass("error-field");
        }
        if ($("#friend3email").hasClass("error-field"))
        {
            $("#friend3email").removeClass("error-field");
        }
    }
