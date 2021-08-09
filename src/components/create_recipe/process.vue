<template>
  <div>
    <v-container class="ma-2">
      <div id="CookingProcess" class="text-center">
        <template>
          <div
            v-for="(process, i) in processes"
            :key="i"
            class="text-fields-row"
            align-content-center
          >
            <v-col cols="4" md="3" sm="3" align-center>
              <v-img
                :src="url_process"
                contain
                max-height="150px"
                max-width="250px"
              ></v-img>

              <v-file-input
                ref="fileInput"
                @change="Preview_imageProcess"
                v-model="urlImg"
                label="Input"
                prepend-icon="mdi-camera"
                chips
                hint="Upload file"
              >
              </v-file-input>
            </v-col>
            <v-col cols="12" md="7" sm="6" xs="2">
              <v-textarea
                solo
                counter
                label="Descript cooking process ex. 1. Boil water"
                
                maxlength="500"
                v-model="process.proDescript"
              ></v-textarea>
            </v-col>
            <v-col cols="1" md="1">
              <v-btn @click="remove4(i)" class="error"
                ><v-icon>mdi-delete</v-icon>delete</v-btn
              >
            </v-col>
          </div>
          <div>
            <v-btn @click="add4" width="100px" rounded class="primary"
              ><v-icon>mdi-plus </v-icon>add</v-btn
            >
          </div>
        </template>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Process",
  data() {
    return {
      processes: [],
      urlImg: null,
      url_process: null,
    };
  },
  methods: {
    add4() {
      this.processes.push({
        proImg: "",
        proDescript: "",
      });
    },
    remove4(index) {
      this.processes.splice(index, 1);
    },
    Preview_imageProcess() {
      this.url_process = URL.createObjectURL(this.urlImg);
    },
  },
};
</script>

<style></style>
