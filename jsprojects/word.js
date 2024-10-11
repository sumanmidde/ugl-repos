// here take the html document classes and assign into js variables
const textareaEl=document.querySelector('.textarea');
const characterNumberEl=document.querySelector('.stat__number--character');
const twitterNumberEl=document.querySelector('.stat__number--twitter');
const wordNumberEl=document.querySelector('.stat__number--words');
const facebookNumberEl=document.querySelector('.stat__number--facebook');
//    const inputHandler = () => { };  calling arrow func inputHandler
function inputHandler(){
   //determine character count
  const numberOfCharacters=textareaEl.value.length;
  const twitterNumberLeft=300-numberOfCharacters;
  const facebookNumberLeft=2200-numberOfCharacters;
  let numberOfWords=textareaEl.value.split(' ').length;

  //add visual indicator if limit is exceeded
if(textareaEl.value.length === 0){
    numberOfWords=0;
}
//input validation 
if (textareaEl.value.includes('<script>')){
    alert("you can't use this combination");
    textareaEl.value=textareaEl.value.replace('<script>',' ');
}

  if(twitterNumberLeft<0){
    // twitterNumberEl.style.color='red';
    twitterNumberEl.classList.add('stat__number--limit');
  } 
  else{
    twitterNumberEl.classList.remove('stat__number--limit');
  }
  if(facebookNumberLeft < 0){
    facebookNumberEl.classList.add('stat__number--limit');
  } else{
    facebookNumberEl.classList.remove('stat__number--limit');
  }



//Set new numbers
  characterNumberEl.textContent=numberOfCharacters;
  twitterNumberEl.textContent=twitterNumberLeft;
  facebookNumberEl.textContent=facebookNumberLeft;
  wordNumberEl.textContent=numberOfWords;



}
// calling inputHandler method
textareaEl.addEventListener('input', inputHandler);