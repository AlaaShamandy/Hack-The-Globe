<template>
    <md-card md-with-hover @click.native="shelterClicked" class="ShelterCard">
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{shelter.name}}</div>
          <div class="md-subhead">{{shelter.address_1}}, {{shelter.province}}, {{shelter.city}}</div>
        </md-card-header>

        <md-card-content>
          <img :src="'https://maps.googleapis.com/maps/api/staticmap?zoom=17&size=300x200&markers=size:small%7Ccolor:red%7C'+shelter.latitude+','+shelter.longitude+'&key=AIzaSyAd3wtjLyr3jVGnZYrHiJVUiWJ9FMgGJEE'"/>
        </md-card-content>
      </md-ripple>
    </md-card>
</template>

<script>
export default {
  name: 'ShelterCard',
  props: {
    shelter: Object
  },
  data () {
    return {
      cols: 3
    }
  },
  methods: {
    shelterClicked: function(){
      // window.location.href = this.$props.shelter.url
      window.open(this.$props.shelter.url, '_blank');
    },
  } 
}
</script>

<style>
  /* Cyan theme */
.ShelterCard{
  margin-bottom: 50px;
  max-height: 300px;
  overflow:auto;
}

</style>
