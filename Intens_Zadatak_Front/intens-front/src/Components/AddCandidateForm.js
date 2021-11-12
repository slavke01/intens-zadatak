import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GetAllSkills } from "../Services/SkillService";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { AddCandidateMethod } from "../Services/CandidateService";
const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  }
  /*
    if (!values.dateOfBirth) {
        errors.dateOfBirth = 'Required';
      } 
      */
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.contactNumber) {
    errors.contactNumber = "Required";
  } else if (!/^[0-9]+\/[0-9]+$/i.test(values.contactNumber)) {
    errors.contactNumber = "Invalid contact number";
  }
  return errors;
};
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const AddCandidateForm = () => {
  const [allSkills, setAllSkills] = useState(null);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contactNumber: "",
      dateOfBirth: new Date(),
      skills: [],
    },
    validate,
    onSubmit: (values) => {
      AddCandidateMethod(
        "http://localhost:42866/api/candidate/addnewcandidate",
        values
      );
      console.log(JSON.stringify(values));
    },
  });
  useEffect(() => {
    const data = GetAllSkills("http://localhost:42866/api/skill/getallskills");
    data.then((res) => {
      console.log(res);
      setAllSkills(res);
    });
  }, []);
  if (!allSkills) return <div>Loading...</div>;
  const handleDateChange = (value) => {
    console.log(value);
    formik.values.dateOfBirth = value;
  };
  const handleSelectChange = (event) => {
    formik.values.skills.push(
      event.target.value[event.target.value.length - 1]
    );
    setAllSkills(allSkills.filter((e)=>e.skillId!==event.target.value[event.target.value.length - 1].skillId));
    console.log(formik.values.skills)
  };

  return (
    <form onSubmit={formik.handleSubmit} style={{ width: 500, height: 500 }}>
      <label htmlFor="name">Full Name</label>
      <input
        style={{ marginLeft: 53, marginRight: 10, marginBottom: 5 }}
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}

      <br />
      <label htmlFor="email">Email Address</label>
      <input
        style={{ marginLeft: 26, marginRight: 10, marginBottom: 5 }}
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <br />
      <label htmlFor="contactNumber">Contact Number</label>
      <input
        style={{ marginLeft: 7, marginRight: 10, marginBottom: 5 }}
        id="contactNumber"
        name="contactNumber"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.contactNumber}
      />
      {formik.touched.contactNumber && formik.errors.contactNumber ? (
        <div>{formik.errors.contactNumber}</div>
      ) : null}
      <br />
      <div>
        <label htmlFor="name">Date of birth</label>
        <DatePicker
          dateFormat="MMMM d, yyyy"
          className="form-control"
          name="dateOfBirth"
          value={formik.values.dateOfBirth}
          onChange={(value) => handleDateChange(value)}
        />
      </div>

      <br />
      <div>
      <label htmlFor="name">Skills</label>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          width="500"
          multiple
          value={formik.values.skills}
          renderValue={(selected) => selected.lenght}
          input={<OutlinedInput label="Tag" />}
          onChange={handleSelectChange}
          MenuProps={MenuProps}
        >
          {allSkills.map((skill) => (
            <MenuItem key={skill.skillId} value={skill}>
              <Checkbox
                checked={
                  formik.values.skills.filter(
                    (e) => e.skillId === skill.skillId
                  ).length > 0
                }
              />
              <ListItemText primary={skill.name} />
            </MenuItem>
          ))}
        </Select>
      </div>

      <br />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default AddCandidateForm;
