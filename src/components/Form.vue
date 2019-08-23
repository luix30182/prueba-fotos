<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m7 offset-m3">
        <h3 class="teal-text">SUBIR/EDITAR FOTO</h3>
        <div class="card">
          <div class="card-content">
            <form action class="row">
              <div class="input-field col s12">
                <input
                  v-model="nombre"
                  placeholder="Nombre"
                  id="nombre"
                  type="text"
                  class="validate"
                />
                <label for="nombre">*Nombre</label>
              </div>
              <div class="file-field input-field col s12">
                <div class="btn-floating btn-large waves-effect waves-light teal">
                  <i class="material-icons">cloud_up</i>
                  <input @change="onFileChange" type="file" />
                </div>
                <div class="file-path-wrapper">
                  <input class="file-path validate" type="text" />
                </div>
              </div>
              <div class="input-field col s12">
                <textarea v-model="descripcion" id="deswcripcion" class="materialize-textarea"></textarea>
                <label for="descripcion">*Descripcion</label>
              </div>
              <div class="right-align">
                <a @click="sendImage" class="waves-effect waves-light btn blue center-align">
                  <i class="material-icons left">save</i>GUARDAR
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  data: function() {
    return {
      nombre: "",
      descripcion: "",
      imagen: null,
      data: {}
    };
  },
  methods: {
    onFileChange: function(e) {
      const file = e.target.files[0];
      const fr = new FileReader();
      this.imagen = file.name;
      let baseString;
      fr.onloadend = function() {
        baseString = fr.result;
        console.log(baseString);
      };
      fr.readAsDataURL(file);
    },
    sendImage: function() {
      this.data["nombre"] = this.nombre;
      this.data["descripcion"] = this.descripcion;
      this.data["imageName"] = this.imagen;
      console.log(this.data);
    }
  }
};
</script>

