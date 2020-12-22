<template>
  <div class="contact_container">
    <form id="contact" action="" method="post">
      <h3>Contactanos</h3>
      <h4>
        Llenalo y te enviaremos una respuesta lo mas pronto posible
      </h4>
      <fieldset>
        <input
          placeholder="Nombre Completo *"
          type="text"
          tabindex="1"
          required
          autofocus
        />
      </fieldset>
      <fieldset>
        <input
          placeholder="Correo *"
          type="email"
          tabindex="2"
          required
        />
      </fieldset>
      <fieldset>
        <input placeholder="Numero" type="tel" tabindex="3" />
      </fieldset>
      <fieldset>
        <input placeholder="Direccion" type="url" tabindex="4" />
      </fieldset>
      <fieldset>
        <input placeholder="Direccion linea 2" type="url" tabindex="5" />
      </fieldset>
      <fieldset>
        <input placeholder="Ciudad, Estado, Codigo Postal" type="url" tabindex="6" />
      </fieldset>
      <fieldset>
        <textarea
          placeholder="Escribe aqui tu mensaje.... *"
          tabindex="7"
          required
        ></textarea>
      </fieldset>
      <fieldset>
        <button
          name="submit"
          type="submit"
          id="contact-submit"
          data-submit="...Sending"
        >
          Submit
        </button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");



.contact_container {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  font-size: 16px;
  line-height: 30px;
  color: white;
  background: #c07347;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea,
#contact button[type="submit"] {
  font: 400 12px/16px Montserrat;
}

#contact {
  background: #da975c;
  padding: 25px;
  margin: 50px 0;
}

#contact h3 {
  color: white;
  display: block;
  font-size: 30px;
  font-weight: 400;
  text-align: center;
}

#contact h4 {
  margin: 5px 0 15px;
  display: block;
  font-size: 13px;
  text-align: center;
  color: white;
}

fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea {
  width: 100%;
  border: 1px solid #ccc;
  background: #fff;
  margin: 0 0 5px;
  padding: 10px;
}

#contact input[type="text"]:hover,
#contact input[type="email"]:hover,
#contact input[type="tel"]:hover,
#contact input[type="url"]:hover,
#contact textarea:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  -moz-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
  border: 1px solid #aaa;
}

#contact textarea {
  height: 100px;
  max-width: 100%;
  resize: none;
}

#contact button[type="submit"] {
  cursor: pointer;
  width: 100%;
  border: none;
  background: #231942;
  color: #fff;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
}

#contact button[type="submit"]:hover {
  background: #5e548e;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

#contact button[type="submit"]:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}

#contact input:focus,
#contact textarea:focus {
  outline: 0;
  border: 1px solid #999;
}
::-webkit-input-placeholder {
  color: #888;
}
:-moz-placeholder {
  color: #888;
}
::-moz-placeholder {
  color: #888;
}
:-ms-input-placeholder {
  color: #888;
}
</style>