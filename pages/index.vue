<template>
  <!-- Add some ionic markup... -->
  <ion-page>
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-title>Ionic Nuxt App</ion-title>
      </ion-toolbar>
    </ion-header>
    <Logo/>
    <ion-content class="content">
      <ion-card>
        <ion-card-subtitle>Ololo</ion-card-subtitle>
        <ion-card-title><div class="bg-black">Trololo</div></ion-card-title>
        <div class="bg-black">hmmm</div>
        <ion-card-content>
          <h1>Hololo!</h1>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
  import Logo from '~/components/Logo.vue';

  export default {
    components: {
      Logo,
    },
  };
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
