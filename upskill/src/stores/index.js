import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import url from "url";

// const baseUrl = "https://upskill-production.up.railway.app";
const baseUrl = "http://localhost:2500";

export const useDataStore = defineStore("data", {
  state: () => ({
    pros: [],
    agents: [],
    agentDetail: {},
    coachingData: [],
    username: "",
    isLogin: false,
  }),
  getters: {},
  actions: {
    getUsername() {
      this.username = localStorage.username
    },

    handleLogout() {
      localStorage.clear();
      this.isLogin = false;
      this.router.push("/");
    },

    async handleDiscordLogin(value) {
      try {
        const { data } = await axios({
          url: baseUrl + `/users/oauth/discord/${value}`,
          method: "POST",
        });

        localStorage.access_token = data.access_token;
        localStorage.username = data.username;
        localStorage.status = data.status;
        this.getUsername()
        this.isLogin = true;

        this.router.push("/");
      } catch (err) {
        console.log(err);
      }
    },

    async handleRegister(value) {
      try {
        const { username, email, password, phoneNumber } = value;
        const { data } = await axios({
          url: baseUrl + "/users/register",
          method: "POST",
          data: {
            username,
            email,
            password,
            phoneNumber,
          },
        });

        const dataLogin = {
          input: email,
          password,
        };

        this.handleLogin(dataLogin);
      } catch (err) {
        console.log(err);
      }
    },

    async handleLogin(value) {
      try {
        const { input, password } = value;
        let isEmail = false;

        for (let i = 0; i < input.length; i++) {
          if (input[i] === "@") {
            isEmail = true;
          }
        }

        const dataInput = () => {
          let obj = {};

          if (isEmail) {
            obj.email = input;
            obj.password = password;
            return obj;
          } else {
            obj.username = input;
            obj.password = password;
            return obj;
          }
        };

        const { data } = await axios({
          url: baseUrl + "/users/login",
          method: "POST",
          data: dataInput(),
        });

        localStorage.access_token = data.access_token;
        localStorage.username = data.username;
        localStorage.status = data.status;
        localStorage.email = data.email;
        this.getUsername()
        this.isLogin = true;

        this.router.push("/");
      } catch (err) {
        console.log(err);
      }
    },

    async fetchAgents() {
      try {
        const { data } = await axios({
          url: baseUrl + "/external/val/agents",
          method: "GET",
        });

        this.agents = data;
      } catch (error) {
        console.log(error);
      }
    },

    async fetchAgentDetails(value) {
      try {
        const { data } = await axios({
          url: baseUrl + `/external/val/agents/${value}`,
          method: "GET",
        });

        console.log(data);

        this.agentDetail = data;
      } catch (err) {
        console.log(err);
      }
    },

    async fetchPros() {
      try {
        const { data } = await axios({
          url: baseUrl + "/pros",
          method: "GET",
        });

        this.pros = data;
      } catch (err) {
        console.log(err);
      }
    },

    async fetchCoaching() {
      try {
        const { data } = await axios({
          url: baseUrl + "/coaching",
          method: "GET",
          headers: {
            access_token: localStorage.access_token,
          },
        });

        this.coachingData = data;
      } catch (err) {
        console.log(err);
      }
    },

    async hireCoach(value) {
      try {
        const { data } = await axios({
          url: baseUrl + `/coaching/${value.uuid}`,
          method: "POST",
          headers: {
            access_token: localStorage.access_token
          },
          data: {
            email: localStorage.email,
            date: value.date,
            link: value.link
          }
        })

        console.log(data);
        this.router.push("/pros");
      } catch (err) {
        console.log(err);
      }
    }
  },
});
