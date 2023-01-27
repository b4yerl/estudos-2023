/* 
~~XMLHttpRequest~~
-----------------------------------------------
const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();
  
    xhr.addEventListener('load', () => {
      if(xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    })

  })
}

document.addEventListener('click', (e) => {
  const element = e.target;
  const tag = element.tagName.toLowerCase();

  if(tag === 'a') {
    e.preventDefault();
    loadPage(element);
  }
});

async function loadPage(element) {
  try{
    const href = element.getAttribute('href');
    const res = await request({ method: 'GET', url: href })
    loadResult(res);
  } catch (err) {
    console.log(err);
  }
}
------------------------------------------------------------
*/

document.addEventListener('click', (e) => {
  const element = e.target;
  const tag = element.tagName.toLowerCase();

  if(tag === 'a') {
    e.preventDefault();
    loadPage(element);
  }
});

/*
~~ fetch API com .then().catch() ~~
-------------------------------------
function loadPage(element) {
  fetch(element)
    .then(res => res.text())
    .then(res => loadResult(res))
    .catch(err => console.log(err))
}
---------------------------------------
*/



// ~~ fetch API com async/await ~~
//-------------------------------------
async function loadPage(element) {
  try {
    const res = await fetch(element);
    loadResult(await res.text());
  } catch (err) {
    console.log(err)
  }
}

function loadResult(res) {
  const div = document.querySelector('.resultado');
  div.innerHTML = res;
}
