const $textElement = document.querySelector('#textElement');
$textElement.oninput = handleTextChange;

function handleTextChange(e) {
  const $texts = document.querySelectorAll('.text');
  $texts.forEach(($text) => $text.innerHTML = e.target.value);
}
