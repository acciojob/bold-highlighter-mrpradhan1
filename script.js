function highlight() {
    //Write your code here
	let green = document.getElementsByTagName('strong');
	for( const strong of green){
		strong.style.color='green';
	}

}


function return_normal() {
    //Write your code here
	let black = document.getElementsByTagName('strong');
	for( const strong of black){
		strong.style.color='black';
	}
    
}
