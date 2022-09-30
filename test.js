function appendImg2(index){
  console.log(index)
    document.querySelectorAll('.img1')[index].setAttribute('style', 'display: none;');
    document.querySelectorAll('.img2')[index].setAttribute('style', 'display: block;');
}
function appendImg1(index){
    document.querySelectorAll('.img2')[index].setAttribute('style', 'display: none;');
    document.querySelectorAll('.img1')[index].setAttribute('style', 'display: block;');
}