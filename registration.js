var firstname= document.getElementById("firstName");
var lastname= document.getElementById("lastName");
var countrycode= document.getElementById("countrycode");
var email= document.getElementById("email");
var phoneNumber= document.getElementById("phoneNumber");
var startDate= document.getElementById("startDate");
var endDate= document.getElementById("endDate");



var regexpem=/^([a-zA-Z0-9.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
function validate()
{
    if(firstname.value.trim()=="" || lastname.value.trim()=="") 
    {
        document.getElementById("message1").innerHTML="User Name Can't be empty";
        document.getElementById("message1").style.visibility="visible";
        
        return false;
    }
    else if(email.value.trim()=="")
    {
        document.getElementById("message1").innerHTML="Enter your E-mail"; 
        document.getElementById("message1").style.visibility="visible";
        
        return false;
    }

    else if( !regexpem.test(email.value))
    {   
       document.getElementById("message1").innerHTML="Invalid E-mail format";
        document.getElementById("message1").style.visibility="visible";
        
        return false;
    }
    else if(startDate.value.trim()=="" || endDate.value.trim()=="")
        {
            document.getElementById("message1").innerHTML="Select Date";
            document.getElementById("message1").style.visibility="visible";
            return false;
        }
    else if(phoneNumber.value.trim()=="")
        {
            document.getElementById("message1").innerHTML="Add  Phone Number";
            document.getElementById("message1").style.visibility="visible";
            return false;
        }
    
    else
    {   
        return true;
    }

}


