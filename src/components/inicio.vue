<template>
  <main>
    <div class="inicio">
      <div class="img-inicio">
        <img src="../assets/pan.jpg" alt="" />
      </div>
      <div class="txt">
        <h2>Variedad de panes</h2>
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
        <h2>Años en el mercado nos respaldan</h2>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptate
          molestias fuga nostrum molestiae. Placeat quod sunt aliquam esse illo
          minus quisquam molestiae consectetur cum nulla, minima ad, rerum quis?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptate
          molestias fuga nostrum molestiae. Placeat quod sunt aliquam esse illo
          minus quisquam molestiae consectetur cum nulla, minima ad, rerum quis?
        </p>
      </div>
      <div class="clearfix"></div>
    </div>
  </main>
</template>
<script>
export default {
  name: "inicio",
};
</script>
<style>
h2 {
  margin-bottom: 2px;
}
.inicio {
  background-color: #da975c;
  margin-left: 40px;
  margin-left: 40px;
  display: inline-block;
  width: 95vw;
  color: white;
  border: 20px;
  border-radius: 15px;
}
.inicio p {
  font-size: 16px;
}
.img-inicio {
  padding-left: 2vw;
  float: left; /* add this */
  margin: 15px 0px;
}
.img-inicio img {
  width: 30vw;
  height: 55vh;
  margin-right: 2vw;
}
.txt {
  width: auto;
  margin: 15px;
  overflow: hidden; /* if you don't want #second to wrap below #first */
  text-align: center;
}
.txt p {
  text-align: justify;
  padding-right: 2vw;
}
.clear-fix {
  clear: both;
}
@media (max-width: 1280px) {
  .inicio {
    width: 85vw;
    margin: 10px;
  }
  .inicio p {
    font-size: 14px;
  }
  .img {
    margin: 5px;
    height: auto;
  }
  .img-inicio img {
    width: 80vw;
    height: 60vh;
    margin: 0.02em;
  }
  .txt {
    float: left;
    width: auto;
    margin: 5px;
  }
  .txt p {
    text-align: justify;
  }
}
</style>