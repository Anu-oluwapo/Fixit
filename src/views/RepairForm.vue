<template>
  <div class="welcome"><h4>Request A Repair</h4></div>
  <br />

  <div class="">
    <div>
      <Back />
    </div>

    <br />
    <br />

    <div class="jumbotron">
      <form @submit.prevent="submit(), sendEmail()" class="request-form" id="request-form">
        <div class="form-group">
          <label><h5>What Gadget Do You Want To Fix :</h5></label>
          <select
            v-model="gadget.type"
            class="form-control"
            id="FormControlSelect1"
            required
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
            required
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
          <label><h5>What Do You Want To Fix :</h5></label>
          <select
            v-model="selectedRepair"
            class="form-control"
            id="FormControlSelect3"
            required
          >
            <option
              v-for="repairType in repairTypes"
              :key="repairType._id"
              :value="repairType"
            >
              {{ repairType.name }}
            </option>
          </select>
          <small class="form-text text-muted"
            >Go back and
            <router-link to="diagnose"><b>run diagnosis</b></router-link> first
            if you don't know whats wrong with your device yet.</small
          ><br />
        </div>

        <div class="form-group">
          <label><h5>Input Device Details :</h5></label>
          <input v-model="gadget.name" class="form-control" type="text" required />
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
            required
          />
          <small class="form-text text-muted"
            >Usually Seen At The Back Of The Device</small
          ><br />
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

        <h5>Delivery Method :</h5>
        <div class="form-Check ml-4">
          <input
            class="form-check-input"
            name="radio"
            @click="toggleTrue()"
            type="Radio"
          />
          <label class="form-check-label">Request A Pick Up </label><br />

          <input
            class="form-check-input"
            name="radio"
            @click="toggleFalse()"
            type="Radio"
          />
          <label class="form-check-label">Drop Off At Our Office</label
          ><br /><br />
        </div>

        <div v-if="showPickup" class="form-group">
          <label><h5>Pickup Address :</h5></label>
          <input
            v-model="pickup.address"
            class="form-control"
            type="text"
          /><br />

          <label><h5>Landmark :</h5></label>
          <input
            v-model="pickup.landmark"
            class="form-control"
            type="text"
          /><br />

          <label><h5>Notes :</h5></label>
          <input
            v-model="pickup.notes"
            class="form-control"
            type="text"
          /><br />
        </div>

        <div v-else></div>

        <h5>Payment Method :</h5>
        <div class="form-Check ml-4">
          <input
            class="form-check-input"
            name="radio2"
            @click="togglePtrue()"
            type="Radio"
          />
          <label class="form-check-label">Pay Now </label><br />

          <input
            class="form-check-input"
            name="radio2"
            @click="togglePfalse()"
            type="Radio"
          />
          <label class="form-check-label"
            >Pay With Cash On Pickup Or Drop Off</label
          ><br /><br />
        </div>

        <h2>Price : ₦{{ price.toLocaleString("en-US") }}</h2>
        <br />

        <button v-if="payment" class="btn btn-warning" @click.prevent="payWithPaystack()">
          Pay ₦{{ price.toLocaleString("en-US") }}
        </button>

        <!-- <paystack v-if="payment"
    :amount="price * 100"
    :email="userr.email"
    :paystackkey="key"
    :reference="refkey"
    :callback="processPayment"
    :close="close"
  >
    Make Payment
 </paystack> -->

        <button
          v-else
          type="submit"
          class="btn btn-info"
        >
          Proceed
        </button>

        <!--input type="submit" v-else
          class="btn btn-info" value="Proceed"/-->
      </form>
    </div>
  </div>
  

<!-- Modal -->
<div id="success_tic" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div style="" class="modal-content">
      <a class="close" href="#" data-dismiss="modal">&times;</a>
      <div class="page-body">
    

  <h1 style="text-align: center;">
  <div class="checkmark-circle">
  <div class="background"></div>
  <div class="checkmark draw"></div>
  </div>
  </h1>
  
  <div class="head">  
      <h3 style="margin-top: 5px;">{{successMessage}}</h3>
<h4>Your Payment Has been Recieved! Click Okay to continue </h4>
      <button @click.prevent="sendEmail2(); submit() " class="btn btn-success"> Okay </button>
    </div>

  </div>
</div>
    </div>

  </div>
 
  
</template>

<script>
import emailjs from '../email-js';
import Back from "../components/BackButton.vue";
//import $ from 'jquery';


export default {
  components: {
    Back,
  },

  props: ["userr", "brands", "repairTypes"],

  data() {
    return {
      title: "Payments",
      logo:
        "https://cdn.logo.com/hotlink-ok/enterprise/eid_422203f0-477b-492b-9847-689feab1452a/logo-dark-2020.png",
      key: "pk_test_a3ed809a4b68a94ce004988fd8a33cc70be3695d",
      refkey: "RPR" + Math.floor(Math.random() * 1000000000 + 1),
      isProduction: true,
      currency: "NGN",
      country: "NG",
      paymentMethod: "",
      showPickup: "",
      payment: false,
      selectedBrand: {},
      selectedRepair: {},
      successMessage:"",

      gadget: {
        name: "",
        type: "",
        modelNumber: "",
      },

      pickup: {
        address: "",
        landmark: "",
        notes: "",
      },
    };
  },

  computed: {
    price: function() {
      return this.selectedRepair.price + this.selectedBrand.price;
    },

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

  methods: {
    // payWithPaystacko(){
    //     window.$('#success_tic').modal('show');
    // },

    payWithPaystack() {
      // eslint-disable-next-line no-undef
      var handler = PaystackPop.setup({
        key: this.key,
        email: this.userr.email,
        amount: this.price * 100,
        currency: "NGN",
        ref: this.refkey,

        async callback(res) {
          //this.submit()
          let message = "Payment confirmed! Reference: " + res.reference;
          this.successMessage = message
          window.$('#success_tic').modal('show');
        },

        onClose() {
          alert("Transaction was not completed, Window Closed");
        },
      });
      handler.openIframe();
    },

    submit() {
      // console.log("Sending Order to server");
      fetch("https://fixit-ng.herokuapp.com/collection/repairs", {
        method: "POST",
        body: JSON.stringify({
          Uid: this.userr.id,
          Name: this.userr.firstname + this.userr.lastname,
          Email: this.userr.email,
          PhoneNumber: this.userr.phone,
          RepairID: this.refkey,
          RepairType: this.selectedRepair.name,
          GadgetType: this.gadget.type,
          GadgetBrand: this.selectedBrand.name,
          GadgetName: this.gadget.name,
          GadgetModel: this.gadget.modelNumber,
          Price: this.price,
          PaymentStatus: this.payment,
          RepairStatus: "ongoing",
          "PickUpAndDelivery ": this.showPickup,
          Address: this.pickup.address,
          Landmark: this.pickup.landmark,
          Notes: this.pickup.notes,
          Date: this.date,
          Time: this.time,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then(() => {
        //alert("Your Repair Request Has Succesfully Been Sent");
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
              "Dear Customer, This is Your Online Reciept To Confirm Your Repair Order to fix your " +
              this.selectedRepair.name +
              " On your " +
              this.gadget.name +
              ". Please Note That The Repair Costs ₦" +
              this.price.toLocaleString("en-US") +
              " Naira, And You'd be required to pay Once we come Pick up or You come Drop Off Your Device. Further Information Will be passed to You as we carry on with your repair. Thank You For Choosing Fixit",
          },
          "user_fZfqFU2yW1AN3CpSWiXvW"
        );
      } catch (error) {
        alert({ error });
      }
    },

    sendEmail2() {
      try {
        emailjs.send(
          "service_gs2ovps",
          "template_q1vmk3p",

          {
            name: this.userr.firstname + this.userr.lastname,
            email: this.userr.email,
            message:
              "Dear Customer, This is Your Online Reciept To Confirm Your Repair Order to fix your " +
              this.selectedRepair.name +
              " On your " +
              this.gadget.name +
              ". We have recieved your payment and will be expecting your device as soon as possible. Further Information Will be passed to You as we carry on with your repair. Thank You For Choosing Fixit",
          },
          "user_fZfqFU2yW1AN3CpSWiXvW"
        );
      } catch (error) {
        alert({ error });
      }
    },

    toggleTrue() {
      this.showPickup = true;
    },

    togglePtrue() {
      this.payment = true;
    },

    togglePfalse() {
      this.payment = false;
    },

    toggleFalse() {
      this.showPickup = false;
    },
  },
};
</script>

<style scoped>
#success_tic .page-body{
  max-width:300px;
  background-color:#FFFFFF;
  margin:10% auto;
}
 #success_tic .page-body .head{
  text-align:center;
}
/* #success_tic .tic{
  font-size:186px;
} */
#success_tic .close{
      opacity: 1;
    position: absolute;
    right: 0px;
    font-size: 30px;
    padding: 3px 15px;
  margin-bottom: 10px;
}
#success_tic .checkmark-circle {
  width: 150px;
  height: 150px;
  position: relative;
  display: inline-block;
  vertical-align: top;
}
.checkmark-circle .background {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: #1ab394;
  position: absolute;
}
#success_tic .checkmark-circle .checkmark {
  border-radius: 5px;
}
#success_tic .checkmark-circle .checkmark.draw:after {
  -webkit-animation-delay: 300ms;
  -moz-animation-delay: 300ms;
  animation-delay: 300ms;
  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-timing-function: ease;
  -moz-animation-timing-function: ease;
  animation-timing-function: ease;
  -webkit-animation-name: checkmark;
  -moz-animation-name: checkmark;
  animation-name: checkmark;
  -webkit-transform: scaleX(-1) rotate(135deg);
  -moz-transform: scaleX(-1) rotate(135deg);
  -ms-transform: scaleX(-1) rotate(135deg);
  -o-transform: scaleX(-1) rotate(135deg);
  transform: scaleX(-1) rotate(135deg);
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
#success_tic .checkmark-circle .checkmark:after {
  opacity: 1;
  height: 75px;
  width: 37.5px;
  -webkit-transform-origin: left top;
  -moz-transform-origin: left top;
  -ms-transform-origin: left top;
  -o-transform-origin: left top;
  transform-origin: left top;
  border-right: 15px solid #fff;
  border-top: 15px solid #fff;
  border-radius: 2.5px !important;
  content: '';
  left: 35px;
  top: 80px;
  position: absolute;
}

@-webkit-keyframes checkmark {
  0% {
    height: 0;
    width: 0;
    opacity: 1;
  }
  20% {
    height: 0;
    width: 37.5px;
    opacity: 1;
  }
  40% {
    height: 75px;
    width: 37.5px;
    opacity: 1;
  }
  100% {
    height: 75px;
    width: 37.5px;
    opacity: 1;
  }
}
@-moz-keyframes checkmark {
  0% {
    height: 0;
    width: 0;
    opacity: 1;
  }
  20% {
    height: 0;
    width: 37.5px;
    opacity: 1;
  }
  40% {
    height: 75px;
    width: 37.5px;
    opacity: 1;
  }
  100% {
    height: 75px;
    width: 37.5px;
    opacity: 1;
  }
}
@keyframes checkmark {
  0% {
    height: 0;
    width: 0;
    opacity: 1;
  }
  20% {
    height: 0;
    width: 37.5px;
    opacity: 1;
  }
  40% {
    height: 75px;
    width: 37.5px;
    opacity: 1;
  }
  100% {
    height: 75px;
    width: 37.5px;
    opacity: 1;
  }
}
</style>