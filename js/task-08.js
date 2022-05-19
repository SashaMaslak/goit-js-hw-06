const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
   event.preventDefault();
   const email = event.currentTarget.elements.email.value;
   const password = event.currentTarget.elements.password.value;
   if (email && password) {
      const user = new Object();
      // const formData = new FormData(event.currentTarget);
      // console.log(formData);
      user.email = email;
      user.password = password;
      console.log(user);
      form.reset();
   }
   else {
      const message = 'Ну взагалі то не всі поля заповнені, будьте уважні!';
      alert(message);
      return;
   }
}