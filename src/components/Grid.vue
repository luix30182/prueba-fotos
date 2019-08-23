<template>
  <div class="container">
    <div class="row">
      <div class="col s4" v-for="(item,i) in links" :key="i">
        <div class="card">
          <div class="card-image">
            <img src="https://source.unsplash.com/random/1024x68" />
            <h4 class="card-title">Card Title</h4>
          </div>
          <div class="card-content">
            <p>
              I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.
            </p>
            <div class="right-align">
              <a class="right-align btn-floating btn-large waves-effect waves-light orange">
                <i class="material-icons">edit</i>
              </a>
              <a class="right-align btn-floating btn-large waves-effect waves-light red">
                <i class="material-icons">delete</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.card-image img {
  min-height: 150px;
}

.card-title {
  font-weight: 400;
}
</style>

<script>
import "materialize-css/dist/js/materialize.min.js";

export default {
  name: "Grid",
  data: function() {
    return {
      links: [
        "https://source.unsplash.com/random/1024x68",
        "https://source.unsplash.com/random/1024x68",
        "https://source.unsplash.com/random/1024x68",
        "https://source.unsplash.com/random/1024x68",
        "https://source.unsplash.com/random/1024x68",
        "https://source.unsplash.com/random/1024x68"
      ]
    };
  },
  onCreated() {
    M.AutoInit();
  }
};
</script>

