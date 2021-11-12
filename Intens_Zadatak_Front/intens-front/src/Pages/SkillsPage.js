import AddSkill from "../Components/AddSkill";
import SkillsTable from "../Components/SkillsTable";
import { columns } from "../Common/skillTableConfig";
import React, { useState, useEffect } from "react";
import { GetAllSkills } from "../Services/SkillService";

export default function SkillsPage() {
  const [rows, setRows] = useState(null);
  useEffect(() => {
    const data = GetAllSkills("http://localhost:42866/api/skill/getallskills");
    data.then((res) => {
      console.log(res);
      setRows(res);
    });
  }, []);
  if (!rows) return <div>Loading...</div>;
  return (
    <div style={{ marginLeft: "20%" }}>
      <div style={{ position: "absolute", marginTop: 40, marginLeft: 40 }}>
        <AddSkill />
      </div>
      <div style={{ position: "absolute", marginTop: 100 }}>
        <SkillsTable rows={rows} columns={columns} />
      </div>
    </div>
  );
}
