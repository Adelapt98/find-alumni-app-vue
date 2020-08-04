<template>
  <div id="app">
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <img alt="Ferdowsi" src="./assets/ferdowsi.png">
         <router-link to="/" class="navbar-brand"><h1>Tracer</h1></router-link>
        <img alt="Ferdowsi" src="./assets/ferdowsi.png" style="visibility: hidden">
      </div>
    </nav>

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <router-link to="/" class="navbar-brand decoration">Search alumni</router-link>
        <router-link to="/find-alumni-int-countery" class="navbar-brand decoration">Search by interests and country</router-link>
        <router-link to="/upload-alumni-file" class="navbar-brand decoration">Upload file</router-link>
        <button class="navbar-toggler" type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <!-- <a class="nav-link" href="#">Find Alumni <span class="sr-only">(current)</span></a> -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container my-5">
      <router-view/>
    </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
.navbar.navbar-dark.bg-dark{
    background-color: #0077b5!important;
 }

 .navbar.navbar-dark.bg-primary{
    background-color: #0094b5!important;
 }

  body {
    background-color: #fafafa !important;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .vue-form-generator > div{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-grow: 1;
  }

  .form-group{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2%;
    width: 50%;
  }

  .field-wrap, .wrapper{
    width: 100%;
  }

  .dropList{
    z-index: 10;
    background-color: #FFF;
    position: relative;
    width: 40%;
    top: 5px;
    right: 12px;
  }

  legend{
    margin: 10px 0 20px 18px;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
  }

  .hint{
    font-size: 10px;
    font-style: italic;
    color: purple;
  }

  .help-block{
    color: red;
  }

  .decoration {
    text-decoration: underline;
  }
</style>