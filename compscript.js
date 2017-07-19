function comparison(){
	var r=Data1.Input1.value;
	var s=Data2.Input2.value;
	var pi=Math.PI;
	var volumesphere=(4/3)*pi*(r*r*r);
	var volumecube=(s*s*s);
	document.getElementById('volumeS').innerHTML=volumesphere;
	document.getElementById('volumeC').innerHTML=volumecube;

	if((r==0) || (s==0))
	{
window.alert('Enter values');
	}

	if(volumecube>volumesphere)
	{
		alert('CUBE has greater volume');
	}
	else if(volumecube<volumesphere)
	{
		alert('SPHERE has greater volume');
	}
	else if((volumecube==volumesphere) && (volumecube!=0) && (volumesphere!=0))
	{
		alert('SPHERE and CUBE have same volume');
	}

	palindromeCheck(volumecube);
	palindromeCheck(volumesphere);
	

}

function palindromeCheck(str_entry){

   var cstr = str_entry.toString().toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
   var ccount = 0;

	if(cstr==="")
	 {
		alert("Nothing found!");
		return false;
	 }

	if ((cstr.length) % 2 === 0)
	 {
		ccount = (cstr.length) / 2;
	 }
    else 
    {

		if (cstr.length === 1)
		 {
			alert( str_entry + " is a palindrome.");
			document.getElementById('change').innerHTML=" Hurray! we have a PALINDROME here ";
			return true;
		 } else {

			ccount = (cstr.length - 1) / 2;
		        }
	}

	for (var x = 0; x < ccount; x++) 
	{

		if (cstr[x] != cstr.slice(-1-x)[0]) 
		{
			return false;
		}
	}
	alert( str_entry + " is a palindrome.");
	document.getElementById('change').innerHTML="Hurray! we have a palindrome here";
	return true;
}