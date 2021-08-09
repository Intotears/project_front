<template>
  <v-container justify-content-center>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <h3>
        <strong>{{ currentUser.username }}</strong> Profile
      </h3>
      <p>
        <strong>Token:</strong>
        {{ currentUser.accessToken.substring(0, 20) }} ...
        {{
          currentUser.accessToken.substr(currentUser.accessToken.length - 20)
        }}
      </p>
      <p>
        <strong>Email:</strong>
        {{ currentUser.userEmail }}
      </p>
      <p>
        <strong>User ID:</strong>
        {{ currentUser.userID }}
      </p>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
};
</script>
