import AddCandidate from "../Components/AddCandidate";
import CandidatesTable from "../Components/CandidatesTable";
import CandidateInformation from "../Components/CandidateInformation";
import { columns } from "../Common/candidateTableConfig";
import React, { useState, useEffect } from "react";
import {
  GetAllCandidates,
  DeleteCandidate,
  AddCandidateMethod,
} from "../Services/CandidateService";
import Button from "@mui/material/Button";

export default function CandidatesPage() {
  const [rows, setRows] = useState(null);
  const [candidateName, setCandidateName] = useState("");
  const [skillName, setSkillName] = useState("");
  useEffect(() => {
    const data = GetAllCandidates(
      "http://localhost:42866/api/candidate/getallcandidates"
    );
    data.then((res) => {
      setRows(res);
    });
  }, []);

  const handleSearchClick = () => {
    const searchparams = {
      candidateName: candidateName,
      skillName: skillName,
    };
    const data = AddCandidateMethod(
      "http://localhost:42866/api/candidate/searchcandidates/",
      searchparams
    );
    data.then((res) => {
      setRows(res);
    });
  };
  const handleDeleteClick = (event, param) => {
    event.stopPropagation();
    DeleteCandidate(
      "http://localhost:42866/api/candidate/removecandidate/" +
        param.row.candidateId
    ).then((response) => {
      setRows(rows.filter((row) => row.candidateId !== param.row.candidateId));
    });
  };

  const Buttons = [
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
            Delete
          </Button>
        );
      },
    },
    {
      field: "Show Information",
      width: 200,
      renderCell: (cellValues) => {
        return <CandidateInformation candidate={cellValues.row} />;
      },
    },
  ];

  const columnsButton = [...columns, ...Buttons];
  if (!rows) return <div>Loading...</div>;
  return (
    <div style={{ marginLeft: "20%" }}>
      <div style={{ position: "absolute", left: "20%" }}>
        <div>
          <label>Candidate Name:</label>
          <input
            style={{ width: 200, height: 25, marginLeft: 10, marginRight: 10 }}
            onChange={(e) => {
              setCandidateName(e.target.value);
            }}
            type="text"
            className="in-text"
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <label>Skill Name:</label>
          <input
            style={{ width: 200, height: 25, marginLeft: 55, marginRight: 10 }}
            onChange={(e) => {
              setSkillName(e.target.value);
            }}
            type="text"
            className="in-text"
          />
        </div>
        <Button style={{ left: "40%" }} onClick={handleSearchClick}>
          Search
        </Button>
      </div>
      <div style={{ position: "absolute", marginTop: 70, marginLeft: 40 }}>
        <AddCandidate />
      </div>
      <div style={{ position: "absolute", marginTop: 100 }}>
        <CandidatesTable rows={rows} columns={columnsButton} />
      </div>
    </div>
  );
}
