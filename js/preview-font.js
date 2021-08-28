const $fileElement = document.getElementById('fileElement');
$fileElement.addEventListener('change', previewFont, false);

function previewFont() {
  console.debug(this);

  if (this.files && this.files[0]) {
    const reader = new FileReader();
    const [fileName, fileExtension] = this.files[0].name.split('.');

    reader.onload = (e) => {
      const html = `
        <style>
          @font-face {
            font-family: '${fileName}';
            src: url(${e.target.result});
          }
        </style>

        <div class="row title">
            <span class="text" style="font-family: '${fileName}'">
                The quick brown fox jumps over the lazy dog
            </span>
            <div class="font-name">${fileName}</div>
        </div>`;

      document.querySelector('#fonts-container').insertAdjacentHTML('beforeend', html);
    };

    reader.readAsDataURL(this.files[0]);
  }
}
