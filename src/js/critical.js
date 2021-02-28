const details = document.querySelector('details')
let mq = window.matchMedia('(min-width: 770px)')
mq.addListener(() => {
  window.innerWidth > 770 ?
  handleDeviceChange('open') :
  handleDeviceChange('closed')
});

if(mq.matches) {
  handleDeviceChange('open')
} else {
  handleDeviceChange('closed')
}


function handleDeviceChange(state) {
  if (state === 'open') {
    document.querySelector('details').removeAttribute('closed')
    document.querySelector('details').setAttribute('open', 'open')
    document.querySelector('body').classList.remove('menu--is-open')
  } else {
    document.querySelector('details').removeAttribute('open')
    document.querySelector('details').setAttribute('closed', 'closed')
    document.querySelector('body').classList.remove('menu--is-open')
  }
}

details.addEventListener("toggle", function() {
  if (details.open && window.innerWidth < 770) {
    document.querySelector('body').classList.add('menu--is-open')
  } else {
    document.querySelector('body').classList.remove('menu--is-open')
  }
})

// svg stacking 
function addSVGs(inputStrings){
  let svgMain = document.createElement("svg");
  inputStrings.forEach(string => {
      let domParser = new DOMParser();
        while(string.childNodes.length>0){
            svgMain.appendChild(string.childNodes[0]);
        }
  })
  return svgMain
}

var cup = document.querySelector(".teacup")
var blob1 = document.querySelector(".blob1")
var blob2 = document.querySelector(".blob2")
var blob3 = document.querySelector(".blob3")
var svgMain = addSVGs([blob1, blob2, blob3, cup]);
document.querySelector(".swap").innerHTML = svgMain.innerHTML;