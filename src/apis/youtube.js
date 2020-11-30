import axios from "axios";

const KEY = "AIzaSyD1HoQ0Tlpl5YNl7Jqm9l80W_qqIemdAbk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
