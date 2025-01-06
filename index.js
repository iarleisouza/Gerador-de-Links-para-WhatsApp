function generateWhatsAppLink() {
    // Obtenção de dados do usuário
    const phoneNumber = document.getElementById('phoneNumber').value;
    const message = document.getElementById('message').value || '';
  
    // Codificação da mensagem
    const encodedMessage = message ? `&text=${encodeURIComponent(message)}` : '';
  
    // Geração de links para versão web e mobile
    const whatsappLink = `https://wa.me/${phoneNumber}${encodedMessage}`;
    const whatsappWebLink = `https://web.whatsapp.com/send?phone=${phoneNumber}${encodedMessage}`;
    const whatsappMobileLink = `https://api.whatsapp.com/send?phone=${phoneNumber}${encodedMessage}`;
  
    // Exibição dos links gerados
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `
      <h2>Links Gerados:</h2>
      <p><strong>WhatsApp Web:</strong> <a href="${whatsappWebLink}" target="_blank">${whatsappWebLink}</a></p>
      <p><strong>WhatsApp Mobile:</strong> <a href="${whatsappMobileLink}" target="_blank">${whatsappMobileLink}</a></p>
    `;
  }