    const form = document.getElementById('form')

    form.addEventListener('submit',(event) => {
       event.preventDefault();
       let Nome = document.getElementById('nome').value;
       let Email = document.getElementById('email').value;
       
       //{
       //     nome: Nome
       //    email: Email}

       let data = {
           Nome,
           Email,
       }
       let convertData = JSON.stringify(data)

       localStorage.setItem('lead', convertData)
    }) 