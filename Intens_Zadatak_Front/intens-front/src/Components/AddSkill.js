import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { AddSkillMethod } from "../Services/SkillService";

export default function AddSkill() {
  const [open, setOpen] = useState(false);
  const [skillName, setSkillName] = useState("");
  const [disabled, setDisabled] = useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const validate=()=>{
    if(skillName==="")
      setDisabled(true);
      else
      setDisabled(false);
  }
  const handleClose = () => {
    setOpen(false);
    setDisabled(true);
  };
  const handleSend = () => {
    const skill = {
      name: skillName,
    };

    AddSkillMethod("http://localhost:42866/api/skill/addskill", skill);
    window.location.reload()
    setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add New Skill
      </Button>
      <Dialog open={open}>
        <DialogTitle>Skill</DialogTitle>
        <label>Skill Name:</label>
        <input
          style={{ width: 200, height: 25, marginLeft: 10, marginRight: 10 }}
          onChange={(e) => {
            setSkillName(e.target.value);
            console.log(skillName)
            validate();
            
          }}
          type="text"
          className="in-text"
        />
        <DialogActions>
          <Button disabled={disabled} onClick={handleSend}>
            Add
          </Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
