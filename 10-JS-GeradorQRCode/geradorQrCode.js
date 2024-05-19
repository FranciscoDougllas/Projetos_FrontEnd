const qrForm = document.getElementById("qr-form");
const qrInput = document.getElementById("input-text");
const qrImage = document.getElementById("qr-image");
const generateBtn = document.getElementById("generate-btn");
const container = document.querySelector(".container");

function generateQRCode() {
  const qrInputValue = qrInput.value.trim();

  if (!qrInputValue) return;

  generateBtn.innerText = "Gerando código...";

  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInputValue}`;

  qrImage.onload = () => {
    container.classList.add("active");
    generateBtn.innerText = "Código criado!";
  };
}

generateBtn.addEventListener("click", generateQRCode);

qrForm.addEventListener("submit", (e) => {
  e.preventDefault();
  generateQRCode();
});

qrInput.addEventListener("input", () => {
  if (!qrInput.value.trim()) {
    container.classList.remove("active");
    generateBtn.innerText = "Gerar QR Code";
  }
});
