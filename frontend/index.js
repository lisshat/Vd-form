const BACKEND_URL = 'https://vd-form-backend.onrender.com';

async function handleSubmit(e) {
  e.preventDefault();

  const form = e.target; 
  
  const formData = {
    firstName: document.querySelector('input[type="text"]').value,
    starter: document.querySelector('input[name="starter"]:checked').value,
    main: document.querySelector('input[name="main"]:checked').value,
    dessert: document.querySelector('input[name="dessert"]:checked').value,
    dietaryRequirements: document.querySelector('textarea').value
  };

  try {
    const response = await fetch(`${BACKEND_URL}/api/submit-response`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      alert('Thank you for your response!');
      form.reset();
    }
  } catch (error) {
    console.error('Error:', error);
    alert('There was an error submitting your response');
  }
}


document.querySelector('form').addEventListener('submit', handleSubmit);