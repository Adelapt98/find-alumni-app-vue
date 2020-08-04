<template>
  <div class="container">
    <div class="d-flex justify-content-start mb-3">
      <router-link to="/" class="btn btn-sm btn-outline-secondary">back</router-link>
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex flex-column align-items-start">
        <h2>Results</h2>
        <span class="text-muted">list of all persons</span>
      </div>
      <!-- <router-link to="/find" class="btn btn-primary">Create new user</router-link> -->
    </div>
    <div class="table-responsive mt-5 bg-white">
      <div class="text-center" v-if="isLoading">Fetching Persons</div>
      <table v-if="!isLoading && users.length" class="table">
        <thead>
          <tr>
            <th>SN</th>
            <th>Image</th>
            <th>Name</th>
            <!-- <th>Email</th> -->
            <th>Affiliation</th>
            <th>Interests</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td style="text-align: center; vertical-align: middle; text-align;">{{index+1}}</td>
            <td style="text-align: center; vertical-align: middle; text-align;">
              <img v-bind:src="user.url_picture" style="zoom:50%;" />
            </td>
            <td style="text-align: center; vertical-align: middle; text-align;">{{user.name}}</td>
            <!-- <td style="text-align: center; vertical-align: middle; text-align;">{{user.email}}</td> -->
            <td style="text-align: center; vertical-align: middle; text-align;">{{user.affiliation}}</td>
            <td
              style="text-align: center; vertical-align: middle; text-align;"
            >{{user.interests.toString().replace('"', '').replace('[', '').replace(']', '')}}</td>
            <td style="text-align: center; vertical-align: middle; text-align;">
              <div class="flex-col">
                <!-- <button class="btn btn-sm">view</button> -->
                <a
                  class="btn btn-sm btn-primary"
                  style="margin: 2px; white-space: nowrap;"
                  target="_blank"
                  v-bind:href="'https://scholar.google.com/citations?user='+ user.profileId"
                >scholar profile</a>&nbsp;
                <button
                  @click="chooseCorrectPerson(user.find_scholarId)"
                  class="btn btn-sm btn-success"
                  style="margin: 2px"
                >Accept</button>
                <!-- <router-link :to="`/edit/${user.id}`" class="btn btn-sm btn-success">Accept</router-link> -->
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-center" v-if="!isLoading && !users.length">No persons found</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";

export default {
  name: "Users",
  mounted() {
    this.fetchUsers();
  },
  data() {
    return {
      users: [],
      isLoading: true,
    };
  },
  methods: {
    fetchUsers() {
      try {
        this.users = this.$route.params.list;
      } catch (e) {
        console.log(e);
      }
      this.isLoading = false;
    },
    async chooseCorrectPerson(id) {
      try {
        let res = await axios.get(
          `http://localhost:2000/api/choose-correct-person/${id}`
        );
        Vue.$toast.success(res.data.message.en);

        setTimeout(() => {
          this.$router.go({ name: "FindAlumni" });
        }, 1500);
      } catch (e) {
        Vue.$toast.error("Manual disambiguation was successful!");
      }
    },
  },
};
</script>

<style scoped>
.flex-col {
  display: flex;
  flex: 1;
  flex-direction: column;
}
</style>