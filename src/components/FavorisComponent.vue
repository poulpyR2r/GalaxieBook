<!-- FavorisComponent.vue -->
<template>
  <div class="container is-fluid">
    <button class="button mt-2 ml-2" id="button-card" @click="$router.push('/')">Accueil</button>
    <div class="container is-fluid is-flex is-justify-content-center" id="bg-container">
      <div class="title p-5 has-text-white" id="title">Favoris</div>
    </div>

    <div v-if="favoris.length === 0" class="has-text-centered mt-6">
      <p>Aucun astre en favoris pour le moment.</p>
    </div>

    <div class="columns is-multiline" v-else>
      <div class="column is-4" v-for="astre in favoris" :key="astre.id">
        <div class="container" id="card_astres">
          <div class="container p-2 is-flex is-flex-direction-column" id="card_perspective">
            <div class="subtitle is-align-self-center has-text-black" id="subtitle">
              <strong>{{ astre.name }}</strong>
            </div>
            <div v-if="astre.moons === null">
              <p>Cet astre ne possède pas de lune</p>
            </div>
            <div v-if="astre.isPlanet">{{ astre.name }} est une planète</div>
            <div v-else>
              <span class="has-text-weight-bold" id="warning">Attention</span> {{ astre.name }} n'est pas une planète mais
              une lune
            </div>
            <div class="container mt-3 mb-3">
              <router-link :to="{ name: 'astresId', params: { id: astre.id } }" custom v-slot="{ navigate }">
                <button class="button mt-2 is-info" id="button-card" @click="navigate" role="link">
                  Explorer
                </button>
              </router-link>
            </div>
            <button class="button mt-2 is-info" @click="toggleFavori(astre)">
              Retirer des favoris
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapState } from 'vuex';

export default {
  name: 'FavorisComponent',
  computed: {
    ...mapState('favoris', ['favoris']),
  },
  methods: {
    toggleFavori(astre) {
      this.$store.dispatch('favoris/removeFavori', astre.id);
    },
  },
};
</script>
  
<style scoped>
/* Vous pouvez copier les styles de AstresComponent.vue ou les adapter à vos besoins */
</style>
  