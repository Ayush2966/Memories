let gallery = document.querySelector('ul');
let add = document.querySelector('button');

add.addEventListener('click', () => {
  let li = document.createElement('li');
  li.innerHTML = '<img src="https://source.unsplash.com/random?turky" alt="">';
  gallery.append(li);
});
  