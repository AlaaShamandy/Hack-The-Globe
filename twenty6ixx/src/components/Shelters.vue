<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container2">

          <div class="modal-header">
            <b-row style="display:contents;">
              <b-col>
                
              </b-col>
              <b-col>
                <slot name="header">
                  Available Shelters
                </slot>
              </b-col>
              <b-col>
                <label>Filters</label>
                <v-select @change="getShelters" v-model="selectedFilters" :multiple="true" id="v-select" :options='["Shelter","Drop-in","Out of the Cold","Housing Help","24 Hour Respite Sites","ID Replacement"]'></v-select>
              </b-col>
            </b-row>
          </div>

          <div class="modal-body">
            <slot name="body">
              <b-row v-for="col in columns" :key="col">
                <b-col v-for="row in col" :key="row">
                  <ShelterCard :shelter="row"/>
                </b-col>
              </b-row>
                
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <md-button class=" md-raised md-primary modal-default-button" @click="$emit('close')">Close</md-button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios';
import ShelterCard from './ShelterCard'

export default {
  name: 'Shelters',
  components:{
    ShelterCard
  },
  data () {
    return {
      shelters: [],
      columns: [],
      services: [],
      selectedFilters: ["Drop-in"]
    }
  },
  methods: {
    serviceClicked: function(service){
      this.$emit('serviceClicked', service);
      this.$emit('close');
    },

    getShelters: function(){
      this.$data.services = []
      this.$data.columns = []

      self = this;


      for (var i=0; i < self.$data.selectedFilters.length; i++){
        axios.get(`http://twenty-6ix-htg.herokuapp.com/locations?location_type=`+self.$data.selectedFilters[i])
        .then(response => {
          // JSON responses are automatically parsed.
          self.$data.services = self.$data.services.concat(response.data)

          // alert("response length: " + response.data.length)
          self.splitColumns()
          
        })
        .catch(e => {
          console.log(e)
        })
      }
      
    },
    splitColumns () {
      // alert("services length: " + this.$data.services.length)
      while (this.$data.services.length > 3) {
        let chunk = this.$data.services.splice(0,3);
        this.columns.push(chunk);
      }  
      // alert("column length: " + this.$data.columns.length)
    },
  },

  created() {
    // this.getShelters()

  }
}
</script>

<style>
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container2 {
    width: 1200px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #c7c2c2;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    overflow-y: auto;
    max-height: 600px;
  }

  .modal-header h3 {
    margin-top:0 ;
    color: #000000;
    /*text-s: 50px;*/
    margin: auto;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container2,
  .modal-leave-active .modal-container2 {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }


</style>
