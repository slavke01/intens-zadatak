using Intens_Zadatak.Database_Interfaces;
using Intens_Zadatak.Models;
using Intens_Zadatak.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Intens_Zadatak.Services
{
    public class SkillService : ISkillService
    {

        public readonly ISkillOperations operations;

        public SkillService(ISkillOperations operations)
        {
            this.operations = operations;
        }
        public void AddNewSkill(Skill skill)
        {
            this.operations.AddNewSkill(skill);
        }

        public List<Skill> GetAllSkills() 
        {
           List<Skill> retval= this.operations.GetAllSkills();
           return retval;
        }
    }
}
