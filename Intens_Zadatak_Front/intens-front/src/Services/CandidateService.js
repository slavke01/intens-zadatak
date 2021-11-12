import axios from "axios";

  export const AddCandidateMethod = (URL, data) =>
  axios.post(URL, data).then((response) => response.data);

  export const GetAllCandidates =(URL)=>
  axios.get(URL).then((response) => response.data);
  
  export const DeleteCandidate =(URL)=>
  axios.delete(URL).then((response) => response.data);

  export const ManageSkill =(URL)=>
  axios.patch(URL).then((response) => response.data);

