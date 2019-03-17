<template>
  <div>

    <b-container class="bv-example-row">

    <b-row style="margin-bottom: 20px">
      <b-col style="padding-top: 12px">Do you have a Health Card?</b-col>
      <b-col>
        <v-select @change="optionChanged" style="width: auto!important;" id="v-select2" v-model="haveHealthCard" :options="['Yes','No']"></v-select>
      </b-col>
    </b-row>


    <!-- <b-row>
      <b-col style="padding-top: 12px">Do you have a Health Card?</b-col>
      <b-col>
        <v-select id="v-select" :options="['Yes','No']"></v-select>
      </b-col>
    </b-row> -->

    <div v-if="showDisclaimer" class="disclaimer">
      Please go to this <a href="http://www.streethealth.ca/services/access-to-health-cards-for-the-homeless#.XI4zARNKjEY">link</a> to obtain a health card.
    </div>

    <b-row v-if="showServices">
      <b-col>
        <div id="Shelters" class="polaroid button" @click="shelters($event)" style="cursor: pointer;">
          <span class="ion-help-circled"></span>
          <img src="../assets/shelters.png" alt="5 Terre" style="width: 100px;height: auto;margin-top: 10px">
          <div class="container">
            <p>Search Services nearby</p>
          </div>
        </div>
      </b-col>

      <b-col>
        <div id="appt" class="polaroid button" @click="shelters" style="cursor: pointer;">
          <span class="important-help-circled"></span>
          <img src="../assets/calendar.png" alt="5 Terre" style="width: 168px;height: auto;margin-top: 10px;padding: 8px">
          <div class="container">
            <p>Book an online consultation</p>
          </div>
        </div>
      </b-col>
    </b-row>




  </b-container>
  </div>
  
</template>

<script>
export default {
  name: 'Questions',
  data () {
    return {
      haveHealthCard: '',
      showServices: '',
      showDisclaimer: false
    }
  },
  methods: {
    shelters(event){
      let targetId = event.currentTarget.id;
      this.$emit('serviceClicked', targetId);
    },
    optionChanged(){
      if (this.$data.haveHealthCard == 'Yes'){
        this.$data.showServices = true
        this.$data.showDisclaimer = false
      } else {
        if (this.$data.showServices !== ""){
          this.$data.showDisclaimer = true
        }
        this.$data.showServices = false
      }
    }
  } 
}
</script>

<style>
  /* Cyan theme */
#v-select .selected-tag {
    color: #147688;
    background-color: #d7f3f9;
    border-color: #91ddec;
    width: -webkit-fill-available;
}

#v-select2 .selected-tag {
    color: #147688;
    background-color: #d7f3f9;
    border-color: #91ddec;
}

#v-select.dropdown.open .dropdown-toggle,
#v-select.dropdown.open .dropdown-menu {
    border-color: #4CC3D9;
}

#v-select .active a {
    background: rgba(50,50,50,.1);
    color: #333;
}

#v-select.dropdown .highlight a,
#v-select.dropdown li:hover a {
    background: #4CC3D9;
    color: #fff;
}

div.polaroid {
  width: 80%;
  background-color: #cabebe;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
}

div.container {
  text-align: center;
  padding: 10px 20px;
}

.disclaimer{
      background: blanchedalmond;
    margin-top: 10px;
    font-size: 30px;
    border-radius: 30px;
    color: #b11616;
}

</style>
