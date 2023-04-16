document.getElementsByClassName('form').addEventListener('submit', function(event) {
     

    try {
      document.getElementById('inputField').value = '';
      alert('Success! Form submitted successfully.');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  });