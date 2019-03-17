<template>
  <div style="height: -webkit-fill-available;">
    <md-button @click="showModal = true" class="md-raised md-primary md-start">Get Started</md-button>

    <QuestionsModal v-if="showModal" @serviceClicked="serviceClicked" @close="showModal = false">
      <h3 slot="header">Available Services</h3>
    </QuestionsModal>


    <Shelters v-if="showModalShelters" @close="showModalShelters = false">
      <h3 slot="header">Available Services</h3>
    </Shelters>


  </div>
</template>

<script>
  import QuestionsModal from './questionsModal'
  import Shelters from './Shelters'
export default {
  name: 'Home',
  components:{
    QuestionsModal,
    Shelters
  },
  data () {
    return {
      showModal: false,
      showModalShelters: false,
      service: ''
    }
  },
  methods:{
    serviceClicked: function(service){
      this.$data.service = service;
      if (this.$data.service == "Shelters"){
        this.$data.showModalShelters = true;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-start{
  font-size: 18px;
  padding: 10px;
  margin: auto;
  left: 20%;
  right: 0;
  position: absolute;
  bottom: 0;
  top: 45%;
  background-color: #462d50!important;
  border-radius: 5px;
}
</style>
