<template>
  <div class="welcome"><h4>Request A Diagnosis</h4></div>
  <br />

  <div class="">
    <div>
      <Back />
    </div>

    <br />
    <br />

    <div class="jumbotron">
      <FORM class="request-form" id="request-form" >
        <div class="form-group">
          <label><h5>What Gadget Do You Want To Diagnose :</h5></label>
          <select
            v-model="gadget.type"
            class="form-control"
            id="FormControlSelect1"
          >
            <option>Phone</option>
            <option>Tablet</option>
            <option>Television</option>
            <option>Laptop</option>
            <option>Watch</option></select
          ><br />
        </div>

        <div class="form-group">
          <label><h5>Select Gadget Brand :</h5></label>
          <select
            v-model="selectedBrand"
            class="form-control"
            id="FormControlSelect2"
          >
            <option v-for="brand in brands" :key="brand._id" :value="brand">
              {{ brand.name }}
            </option>
          </select>
          <small class="form-text text-muted"
            >If the brand of your device isn't listed here, We're sorry We dont
            cover that brand yet.</small
          ><br />
        </div>

        <div class="form-group">
          <label><h5>Input Device Details :</h5></label>
          <input v-model="gadget.name" class="form-control" type="text" />
          <small class="form-text text-muted"
            >Eg (Iphone 12 Pro Max, Samsung Q10 Television)</small
          ><br />
        </div>

        <div class="form-group">
          <label><h5>Input Device Model Number :</h5></label>
          <input
            v-model="gadget.modelNumber"
            class="form-control"
            type="text"
          />
          <small class="form-text text-muted"
            >Usually Seen At The Back Of The Device</small
          ><br />
        </div>

        <div class="form-group">
          <label><h5>Explain Problem :</h5></label>
          <textarea v-model="gadget.problem" class="form-control" rows="6" >
          
          </textarea>
          
        </div>

        

        <div class="form-group">
          <label><h5>Input Your Name :</h5></label>
          <input
            class="form-control"
            type="text"
            :value="userr.firstname + userr.lastname"
          /><br />
        </div>

        <div class="form-group">
          <label><h5>Phone Number :</h5></label>
          <input class="form-control" type="text" :value="userr.phone" /><br />
        </div>

        <div class="form-group">
          <label><h5>Email :</h5></label>
          <input class="form-control" type="text" :value="userr.email" /><br />
        </div>

        

        <button
          @click.prevent="submit(); sendEmail()"
          class="btn btn-info"
        >
          Proceed
        </button>

        <!--input type="submit" v-else
          class="btn btn-info" value="Proceed"/-->
      </FORM>
    </div>
  </div>
</template>

<script>
import Back from '../components/BackButton.vue'
import emailjs from '../email-js';
export default {
components:{Back},
 props: ["userr", "brands", "repairTypes"],

   data(){
    return {
      title: "Payments",
      logo: "https://cdn.logo.com/hotlink-ok/enterprise/eid_422203f0-477b-492b-9847-689feab1452a/logo-dark-2020.png",
      key: "pk_test_a3ed809a4b68a94ce004988fd8a33cc70be3695d",
      refkey: "DIG" + Math.floor(Math.random() * 1000000000 + 1),
      isProduction: true,
      currency: "NGN",
      country: "NG",
      paymentMethod: "",
      showPickup: "",
      payment: false,
      selectedBrand: {},
      selectedRepair: {},

      gadget: {
        name: "",
        type: "",
        modelNumber: "",
        problem: "",
      },

     
    }
  },

  computed: {
    date() {
      return (
        new Date().getDate() +
        " " +
        new Date().toLocaleString("default", { month: "long" }) +
        ", " +
        new Date().getFullYear()
      );
    },

    time() {
      return (
        new Date().getHours().toLocaleString("default") +
        " : " +
        new Date().getMinutes().toLocaleString("default")
      );
    },
  },

  methods:{
    submit() {
      console.log("Sending Diagnosis Order to server");
      fetch("https://fixit-ng.herokuapp.com/collection/diagnosis", {
        method: "POST",
        body: JSON.stringify({
          Uid: this.userr.id,
          Name: this.userr.firstname + this.userr.lastname,
          Email: this.userr.email,
          PhoneNumber: this.userr.phone,
          DiagnosisID: this.refkey,
          GadgetType: this.gadget.type,
          GadgetBrand: this.selectedBrand.name,
          GadgetName: this.gadget.name,
          GadgetModel: this.gadget.modelNumber,
          GadgetProblem: this.gadget.problem,
          DiagnosisStatus: "ongoing",
          Date: this.date,
          Time: this.time,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then(() => {
          alert("Your Diagnosis Request Has Succesfully Been Sent");
          window.location = "/";
        });
    },

    sendEmail() {
      
    try {
            emailjs.send(
              "service_gs2ovps",
              "template_q1vmk3p",
              
              {
                name: this.userr.firstname + this.userr.lastname,
                email: this.userr.email,
                message:
                  "Dear "+this.userr.firstname+", This is Your Confirmation reciept to let you know that we have recieved your diagnosis request For Your " +
                  this.gadget.name + " With Model Number : " +this.gadget.modelNumber+
                  ". The diagnosis typically takes 2 - 3 Hours and we will be in touch with you shortly by the email you provided after carrying out the diagnosis on your device to give you the final results. Any other Information Will be passed to You as we carry on with the diagnosis of your device. Thank You For Choosing Fixit"
              },
              "user_fZfqFU2yW1AN3CpSWiXvW"
              
            );
          } catch (error) {
            console.log({ error });
          }
     },
  }


}

</script>

<style>
.welcome{
  overflow: auto;
}
</style>