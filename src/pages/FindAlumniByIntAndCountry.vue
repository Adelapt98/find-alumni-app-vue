<template>
  <div class="container">
    <!-- <div class="d-flex justify-content-start     mb-3">
            <router-link to="/" class="btn btn-sm btn-outline-secondary">back</router-link>
    </div>-->
    <h1>{{window.location.href}}</h1>
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex flex-column align-items-start">
        <h2>Find Alumni By Interests And Country</h2>
        <span class="text-muted">Please enter the details</span>
      </div>
    </div>
    <div class="card pl-4 pt-5 pb-5 pr-4 mt-5">
      <form action @submit.prevent="submitUserDetails">
        <vue-form-generator tag="div" :schema="schema" :options="formOptions" :model="model" />
        <div class="d-flex justify-content-end mt-3 pr-4">
          <button
            v-if="!isLoading"
            type="submit"
            class="btn btn-primary btn-lg"
          >{{ isSaving ? 'Saving...' : 'Search'}}</button>
          <rotate-square2 v-if="isLoading"></rotate-square2>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import intCountFormSchema from "../forms/intCountFormSchema";
import axios from "axios";
import { RotateSquare2 } from "vue-loading-spinner";
import Vue from "vue";

export default {
  name: "FindAlumniByIntAndCountry",
  components: {
    RotateSquare2,
  },
  mounted() {},
  data() {
    return {
      model: {
        countryName: "",
        interests: ""
      },
      schema: intCountFormSchema,
      formOptions: {
        validateAfterChanged: true,
      },
      isSaving: false,
      isLoading: false,
    };
  },
  methods: {
    navigate(data) {
      this.$router.push({
        name: "ChooseCorrectAlumni2",
        params: { list: data },
      });
    },
    async submitUserDetails() {
      this.isLoading = true;
      try {
        let res = await axios.post("http://visualminer.com/api/scholar-find-interest-country", {
          ...this.model,
        });
        this.isLoading = false;
        Vue.$toast.success(res.data.message.en);
        this.navigate(res.data.result);
      } catch (e) {
        this.isLoading = false;
        Vue.$toast.error('Something unexpected happend!');
      }
    },
  },
};
</script>

<style></style>