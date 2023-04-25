<script setup>
import { usecrudMovieStore } from "@/stores/crudMovie";
import { computed, ref, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";

const crudMovStore = usecrudMovieStore();
const route = useRoute()
const { id } = route.params
onMounted(async () => {
  crudMovStore.editActorFname = await crudMovStore.fetchSingleActor1(id)
  crudMovStore.editActorLname = await crudMovStore.fetchSingleActor2(id)
  crudMovStore.editActorGender = await crudMovStore.fetchSingleActor3(id)

})


</script>

<!-- <script setup>
import { usecrudMovieStore } from "@/stores/crudMovie";
import { computed, ref, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
const crudMovStore = usecrudMovieStore();
const route = useRoute()
const {id} = route.params
onMounted(async () => {
  crudMovStore.editData = await crudMovStore.toUpdate(id)

})

</script>  -->

<template>
  <!-- <p>{{ crudMovStore.editActor?.act_fname }}</p> -->
  <!-- <p>{{ id }}</p> -->
  <div class="column is-three-fifths is-offset-one-fifth">
    <h1 class="has-text-centered is-size-1 pt-6">Edit</h1>
    <div class="columns ">
      <div class="column  ">
        <form action="">
          <div class="subtitle has-text-white">
            <div class="mb-6">
              <label for="">First Name</label>
              <input class="input" type="text" v-model="crudMovStore.editActorFname" name="firstname" id="firstname">
            </div>
            <div class="mb-6">
              <label for="">Last Name</label>
              <input class="input" type="text" v-model="crudMovStore.editActorLname" name="lastname" id="lastname">
            </div>
            <div class="mb-6">
              <label for="">Gender</label> <br>
              <div class="select">
                <select class="editselect" v-model="crudMovStore.editActorGender">
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </div>
            </div>
            <!-- <h1>{{ crudMovStore.editActorGender }}</h1> -->
          </div>
        </form>
      </div>
    </div>
    <div class="columns">
      <div class="column has-text-centered">
        <RouterLink to="/adminview">
          <button type="submit" style="width:90%;" class="button subtitle is-5">CANCEL</button>
        </RouterLink>
      </div>
      <div class="column has-text-centered">
        <router-link to="/adminview">
          <button type="submit" style="width:90%;" class="button subtitle is-5 is-primary is-outlined"
            @click="crudMovStore.updatePeople(id)">CONFIRM</button>
        </router-link>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "editpeople",
  data() {
    return {

    }
  },
  methods: {
    // submitformpeople() {
    //   const newpeople={
    //     fname: this.movadd.fname,
    //     lname: this.movadd.lname,
    //     dob: this.movadd.dob,
    //     national: this.movadd.national,
    //   }
    //   this.$emit('save2', [newpeople, false]);
    // },
  }


}
</script>
