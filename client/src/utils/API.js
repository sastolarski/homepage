import axios from "axios";

export default {
  // Gets articles from the NYT API
  getUsers: function(params) {
    return axios.get("/users/users");
  }
//   },
//   // Gets all saved articles
//   getSavedArticles: function() {
//     return axios.get("/api/articles");
//   },
//   // Deletes the saved article with the given id
//   deleteArticle: function(id) {
//     return axios.delete("/api/articles/" + id);
//   },
//   // Saves an article to the database
//   saveArticle: function(articleData) {
//     return axios.post("/api/articles", articleData);
//   }
};