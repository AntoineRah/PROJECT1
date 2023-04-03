// function validateForm() {
//     let firstname = document.forms["LOG IN"]["firstname"].value;
//     let lastname = document.forms["LOG IN"]["lastname"].value;
//     let email = document.forms["LOG IN"]["Email"].value;
    
//     if (firstname == "") {
//       alert("Name must be filled out");
//       return false;
      
//     }
//     if (email == "") {
//         alert("Email must be filled out");
//         return false;
        
//       }
//     if(!allLetter(firstname))
//     {
//         alert("PLease insert only letters");
//         return false;


//     }
//     if (lastname == "") {
//         alert("LastName must be filled out");
//         return false;
        
//     }
//     if(!allLetter(lastname))
//     {
//         alert("PLease insert only letters");
//         return false;


//     }
//     if(ValidateEmail(Email))
//     {
//         alert("You have entered an invalid email");
//         return false;
//     }
    
//     return true;


   
// }


    
  function ValidateEmail(mail) 
{
    
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
   
    return (false)
}

