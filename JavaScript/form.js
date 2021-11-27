function validatefirst(form)
{
    var first=form.element["first"];
    if(first.element.valueMissing)
    {
        first.setcustomValidity("Please enter your first name");
        return false;
    }else{
        first.setcustomValidity("");
        return true;
    }
}
function validatelast(form)
{
    var last=form.element["last"];
    if(last.element.valueMissing)
    {
        last.setcustomValidity("Please enter your last name");
        return false;
    }else{
        last.setcustomValidity("");
        return true;
    }
}
function validateemail(form)
{
   var email=form.element["email"];
    if(email.element.valueMissing)
    {
        email.setcustomValidity("Please enter your email");
        return false;
    }else if(email.validity.typeMismatch){
        email.setCustomValidity("Email is not a correct format");
        return false;
      }
        else{
        email.setcustomValidity("");
        return true;
    }
}
function validatecomment(form)
{
    var comment=form.element["comment"];
    if(comment.element.valueMissing)
    {
        comment.setcustomValidity("Please enter your email");
        return false;
    }else{
        comment.setcustomValidity("");
        return true;
    }

}
function validateform(form){
    if(validatecomment(form)&&validateemail(form)&&validatefirst(form)&&validatelast(form))
    {
      return true;
    }else
    {
        return false;
    }
}