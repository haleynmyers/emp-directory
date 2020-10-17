import axios from "axios";

// Export a method that gets employees from the User API
export default {
  getEmployees() {
    return axios.get("https://randomuser.me/api/?results=10&nat=us");
  }
};