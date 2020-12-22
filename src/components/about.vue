<template>
  <main>
    <div class="about">
      <div class="txt">
        <h1>Nuestra historia</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          sapiente officiis repudiandae sed maxime esse, voluptatem ad sit
          mollitia accusantium iusto dolorem. Ipsum voluptate omnis blanditiis.
          Mollitia saepe voluptatem, doloremque eaque itaque sed aperiam
          voluptates adipisci impedit similique eum hic illum dolores obcaecati
          quam amet officiis quis quibusdam atque, velit, eveniet maiores nemo.
          Officiis odit sit soluta itaque delectus iste recusandae aut, velit ut
          iusto esse obcaecati ducimus est autem perferendis totam tenetur
          placeat! Explicabo nisi delectus dolorum debitis temporibus officiis
          cupiditate vel pariatur reprehenderit hic adipisci non quas modi
          harum, expedita illo2 perspiciatis facilis quibusdam aliquid facere.
          Perferendis, quidem?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          sapiente officiis repudiandae sed maxime esse, voluptatem ad sit
          mollitia accusantium iusto dolorem. Ipsum voluptate omnis blanditiis.
          Mollitia saepe voluptatem, doloremque eaque itaque sed aperiam
          voluptates adipisci impedit similique eum hic illum dolores obcaecati
          quam amet officiis quis quibusdam atque, velit, eveniet maiores nemo.
          Officiis odit sit soluta itaque delectus iste recusandae aut, velit ut
          iusto esse obcaecati ducimus est autem perferendis totam tenetur
          placeat! Explicabo nisi delectus dolorum debitis temporibus officiis
          cupiditate vel pariatur reprehenderit hic adipisci non quas modi
          harum, expedita illo2 perspiciatis facilis quibusdam aliquid facere.
          Perferendis, quidem?
        </p>
        <p>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptate
          molestias fuga nostrum molestiae. Placeat quod sunt aliquam esse illo
          minus quisquam molestiae consectetur cum nulla, minima ad, rerum quis?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          sapiente officiis repudiandae sed maxime esse, voluptatem ad sit
          mollitia accusantium iusto dolorem. Ipsum voluptate omnis blanditiis.
          Mollitia saepe voluptatem, doloremque eaque itaque sed aperiam
          voluptates adipisci impedit similique eum hic illum dolores obcaecati
          quam amet officiis quis quibusdam atque, velit, eveniet maiores nemo.
          Officiis odit sit soluta itaque delectus iste recusandae aut, velit ut
          iusto esse obcaecati ducimus est autem perferendis totam tenetur
          placeat! Explicabo nisi delectus dolorum debitis temporibus officiis
          cupiditate vel pariatur reprehenderit hic adipisci non quas modi
          harum, expedita illo2 perspiciatis facilis quibusdam aliquid facere.
          Perferendis, quidem?
        </p>
        <div class="img-about">
          <img src="../assets/vintage.jpg" alt="" />
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "about",
};
</script>
<style>
h1 {
  text-align: center;
  margin: 5px;
}
.about {
  background-color: #da975c;
  color: white;
  margin: 0px auto;
  width: 95vw;
  border: 20px;
  border-radius: 15px;
  overflow: hidden; /* will contain if #first is longer than #second */
}
.about p{
  font-size: 16px;
}
.txt {
  width: auto;
  margin: 2vw;
  overflow: hidden; /* if you don't want #second to wrap below #first */
  text-align: center;
}
.txt p {
  text-align: justify;
}
.img-about {
  display: block;
  width: 90vw;
  margin: 5px;
  margin-top: 5px;
}
.img-about img {
  display: block;
  width: 85vw;
  height: 70vh;
  margin: auto;
}
@media (max-width: 600px) {
  .about {
    width: auto;
    margin: 10px;
  }
  .about p{
  font-size: 16px;
}
  .txt {
    margin: 5px;
  }
  .txt p {
    text-align: justify;
  }
}
</style>