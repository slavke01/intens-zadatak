import React, { useState,useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import SkillsTable from "./SkillsTable";
import { columns } from "../Common/skillTableConfig";
import {ManageSkill} from "../Services/CandidateService"
import {GetAllSkills} from "../Services/SkillService"
export default function CandidateInformation(props) {
  const [open, setOpen] = useState(false);
  const { candidate } = props;
  const [skills, setSkills] = React.useState(candidate.skills);
  const [availableSkills, setAvailableSkills] = useState(null);

  useEffect(() => {
    const data = GetAllSkills(
      "http://localhost:42866/api/skill/getavailableskills/"+candidate.candidateId
    );
    data.then((res) => {
      setAvailableSkills(res);
    });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDeleteClick = (event, param) => {
    event.stopPropagation();
    console.log(param.row);
    
    ManageSkill(
      "http://localhost:42866/api/candidate/removeskillfromcandidate/"+candidate.candidateId+"/"+param.row.skillId
    ).then(() => {
      setSkills(skills.filter((row)=>row.skillId!==param.row.skillId));
      setAvailableSkills([...availableSkills,param.row]);
    });
   
  };

  const handleAddClick = (event, param) => {
    event.stopPropagation();
    
    ManageSkill(
      "http://localhost:42866/api/candidate/addskilltocandidate/"+candidate.candidateId+"/"+param.row.skillId
    ).then(() => {
      setAvailableSkills(availableSkills.filter((row)=>row.skillId!==param.row.skillId));
      setSkills([...skills,param.row]);
    });
   
  };
  const DeleteButton = [
    {
      field: "Delete",
      width: 200,
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
              handleDeleteClick(event, cellValues);
            }}
          >
            Remove Skill
          </Button>
        );
      },
    },
  ];
  const AddButton = [
    {
      field: "Delete",
      width: 200,
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
              handleAddClick(event, cellValues);
            }}
          >
            Add Skill
          </Button>
        );
      },
    },
  ];
  const columnsButtonDelete = [...columns, ...DeleteButton];
  const columnsButtonAdd = [...columns, ...AddButton];
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Candidate Information
      </Button>
      <Dialog  open={open}  >
        <DialogTitle>Candidate</DialogTitle>
        <div>
        <SkillsTable style={{width:"500px"}} rows={skills} columns={columnsButtonDelete} />
          <br/>
          <SkillsTable style={{width:"500px"}} rows={availableSkills} columns={columnsButtonAdd} />
        </div>
        
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
