let walletElement = document.getElementById('Wallet');
let wallet = 0;

function updateWallet() {
  wallet += 101;
  walletElement.textContent = `E$${wallet.toLocaleString()}`;
}

setInterval(updateWallet, 0.1);