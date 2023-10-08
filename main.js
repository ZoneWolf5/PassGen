function generatePassword() {
    var length = 10; // Длина генерируемого пароля
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Символы, из которых будет состоять пароль
    var password = "";
  
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
  
    document.getElementById("password").value = password;
  }
 