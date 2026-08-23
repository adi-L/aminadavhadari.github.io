
document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

const section = document.getElementById('bottom');
const house  =  document.querySelector('#house');
const box5  =  document.querySelector('.box5');
    var houseRect =  house.getBoundingClientRect();
const anchor  =  document.querySelector('.container1');

box5.style.display = "none";
const onScroll = () =>{

const bounding = anchor.getBoundingClientRect();

	if (
	bounding.top >= 0 &&
	bounding.left >= 0 &&
	bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
	bounding.bottom - 300 <= (window.innerHeight || document.documentElement.clientHeight)
) {
	box5.classList.remove('fade-out');
	box5.classList.add('fade-in');
		box5.style.display = "block"

} else {
		box5.classList.add('fade-out');
	box5.classList.remove('fade-in');
	setTimeout(function(){ 
			box5.style.display = "none"
}, 500);
}


	// console.log("scroll",$(window.document.body).scrollTop(),houseRect.top );
	// 	 if($(window.document.body).scrollTop() > 2445 && $(window.document.body).scrollTop()<houseRect.top+300 ){
	// 			box5.style.display = "block"
	// 	}
	// 	else if($(window.document.body).scrollTop()<houseRect.top ){
	// 		box5.style.display = "none"
	// 	}
	


}
if(section){
    var sectionRect =  section.getBoundingClientRect();
}
if(box5){
    var box5Rect = box5.getBoundingClientRect();

}
onScroll();

window.addEventListener('scroll',(e)=>{
	onScroll(e);

})




