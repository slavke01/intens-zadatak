import axios from "axios";

export const AddSkillMethod = (URL, data) =>
  axios.post(URL, data).then((response) => response.data);

export const GetAllSkills = (URL) =>
  axios.get(URL).then((response) => response.data);
