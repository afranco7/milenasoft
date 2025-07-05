const form = document.getElementById('user-form');
form.addEventListener('submit', sendEmail);

const serviceId ='service_oaoizif';
const templateId = 'template_5eiqphm';
const apiKey = 'RjLTFPRbJ_wsVEULO';

function sendEmail(event){
    event.preventDefault();
    emailjs.init(serviceId);
    emailjs.sendForm(serviceId, templateId, form, apiKey)
    .then()
    .catch()
}