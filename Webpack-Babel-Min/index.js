const hello = (text = "") => {
  const element = document.createElement("div");

  element.innerHTML = text;

  document.body.appendChild(element);

};

//

document.addEventListener(
  'DOMContentLoaded',
  hello('Hello World!')
);
