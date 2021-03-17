			const scriptURL = 'https://script.google.com/macros/s/AKfycbzGzLfIQ4DUzg8wBSRobCjgCAvSAlq7kAqCe9vrf9mPuO_GhaNHlQrs2xVK-OobYa4D/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Feedback..!"))
                .catch(error => console.error('Error!', error.message))
            })
