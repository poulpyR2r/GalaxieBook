<template>
    <div class="container mt-6">
        <div class="box is-flex is-flex-direction-column">
            <h1 class="title is-align-self-center" id="title">{{ astreDetails.name }}</h1>


            <div class="columns">
                <div class="column">
                    <div class="box" id="box_generals">
                        <div class="subtitle" id="subtitle">Identité</div>
                        <div><strong>Nom anglais:</strong>
                            {{ astreDetails.englishName }}
                        </div>
                        <div><strong>Nom alternatif:</strong>
                            {{ astreDetails.alternativeName }}
                        </div>

                        <div>
                            <div v-if="astreDetails.isPlanet"><strong>{{ astreDetails.name }}</strong> est une planete</div>
                            <div v-else><strong>{{ astreDetails.name }}</strong> n'est pas une planet</div>

                        </div>

                        <div><strong>Type d'objet:</strong>
                            {{ astreDetails.bodyType }}
                        </div>
                    </div>


                </div>

                <div class="column">
                    <div class="box" id="box_generals">
                        <div class="subtitle" id="subtitle">Caractéristiques de la planète:</div>

                        <div class="columns">
                            <div class="column">
                                <div><strong>Température moyenne:</strong>
                                    {{ astreDetails.avgTemp }} °C
                                </div>
                                <div><strong>Gravité:</strong>
                                    {{ astreDetails.gravity }} m/s²
                                </div>
                                <div class="volume"><strong>Masse:</strong></div>
                                <ul>
                                    <li v-for="(propMassValue, propMass) in astreDetails.mass" :key="propMass">
                                        - {{ propMass }} : {{ propMassValue }}
                                    </li>
                                </ul>
                                <div class="volume"><strong>Volume : </strong></div>
                                <div v-for="(propVolumeValue, propVolume) in astreDetails.vol" :key="propVolume">
                                    - {{ propVolume }} : {{ propVolumeValue }} km³
                                </div>
                            </div>
                            <div class="column">
                                <div><strong>Densité:</strong>
                                    {{ astreDetails.density }} g/cm³
                                </div>
                                <div><strong>Rayon moyen:</strong>
                                    {{ astreDetails.meanRadius }} km
                                </div>
                                <div><strong>Rayon polaire:</strong>
                                    {{ astreDetails.polarRadius }} km
                                </div>
                                <div><strong>Aplatissement:</strong>
                                    {{ astreDetails.flattening }}
                                </div>
                                <div><strong>Dimension:</strong>
                                    {{ astreDetails.dimension }}
                                </div>
                                <div><strong>Inclinaison:</strong>
                                    {{ astreDetails.inclination }} degrés
                                </div>
                            </div>
                        </div>

                    </div>




                </div>
            </div>

            <div class="columns">
                <div class="column">
                    <div class="box" id="box_generals">
                        <div class="subtitle" id="subtitle">Orbite et rotation</div>

                        <div class="columns">
                            <div class="column">

                                <div><strong>Axe semi-majeur:</strong>
                                    {{ astreDetails.semimajorAxis }} km
                                </div>
                                <div><strong>Périgée:</strong>
                                    {{ astreDetails.perihelion }} km
                                </div>
                                <div><strong>Apogée:</strong>
                                    {{ astreDetails.aphelion }} km
                                </div>
                                <div><strong>Eccentricité:</strong>
                                    {{ astreDetails.eccentricity }}
                                </div>

                                <div><strong>Orbite sidérale:</strong>
                                    {{ astreDetails.sideralOrbit }} jours
                                </div>
                                <div><strong>Rotation sidérale:</strong>
                                    {{ astreDetails.sideralRotation }} jours
                                </div>
                                <div><strong>Rayon équatorial:</strong>
                                    {{ astreDetails.equaRadius }} km
                                </div>
                                <div><strong>Inclinaison axiale:</strong>
                                    {{ astreDetails.axialTilt }} degrés
                                </div>
                            </div>
                        </div>



                    </div>
                </div>


                <div class="column">
                    <div class="box" id="box_generals">
                        <div class="subtitle" id="subtitle">Paramètres orbitaux</div>

                        <div class="columns">
                            <div class="column">
                                <div><strong>Anomalie principale:</strong>
                                    {{ astreDetails.mainAnomaly }}
                                </div>
                                <div><strong>Argument du périapside:</strong>
                                    {{ astreDetails.argPeriapsis }} degrés
                                </div>
                                <div><strong>Longitude du nœud ascendant:</strong>
                                    {{ astreDetails.longAscNode }} degrés
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>















            <div class="box" id="box_generals">
                <div class="subtitle" id="subtitle">{{ astreDetails.name }} tourne autour de :</div>

                <div class="columns">
                    <div class="column">
                        <div>
                            <div v-for="(propautourdevalue, propautourde) in astreDetails.aroundPlanet" :key="propautourde">
                                <strong>{{ propautourdevalue }}</strong>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="box" id="box_generals">
                <div class="subtitle" id="subtitle">
                    Découverte et autres informations
                </div>

                <div class="columns">
                    <div class="column">
                        <div><strong>Découvert par:</strong>
                            {{ astreDetails.discoveredBy }}
                            <div><strong>Date de découverte:</strong>
                                {{ astreDetails.discoveryDate }}
                            </div>
                            <div><strong>Vitesse d'échappement:</strong>
                                {{ astreDetails.escape }} m/s
                            </div>





                        </div>
                    </div>
                    <div class="column">



                    </div>
                </div>





            </div>

            <div class="box " id="box_generals">
                <div class="subtitle">Les Lunes</div>

                <!-- <div>{{ astreDetails.moons }}</div> -->
                <div v-for="(propmoonvalue, propmoon  ) in astreDetails.moons" :key="propmoon">
                    <div class="">
                        {{ propmoonvalue.moon }}
                        {{ propmoonvalue.rel }}
                    </div>

                    <div class="">
                        <router-link :to ="{name : 'astreDetails' , params : { moonId: extractIdUrl(propmoonvalue.rel) }}">Détails</router-link>

                    </div>

                </div>



            </div>





















        </div>
    </div>
</template>

<script>



export default {
    name: "AstresIdComponent",

    methods: {

        extractIdUrl (url) {
            const segments = url.split('/')
            return segments[segments.length - 1]
        }
    },


    mounted() {
        console.log('ici')
        console.log(this.$route.params.id)
        const astreId = this.$route.params.id;
        console.log(this.$store.getters.getAstreById(astreId));
    },




    computed: {
        astreDetails() {
            const astreId = this.$route.params.id;
            return this.$store.getters.getAstreById(astreId);
        }

    },


}


</script>

<style scoped>
#box_generals {
    height: 100% !important;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

#title {
    font-style: italic;
    font-family: Neo-bold;
    font-size: 80px;
}

#subtitle {
    font-style: italic;
    font-family: Neo-bold;
    font-size: 40px;

}
</style>