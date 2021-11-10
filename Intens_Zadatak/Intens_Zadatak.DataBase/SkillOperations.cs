using Intens_Zadatak.Database_Interfaces;
using Intens_Zadatak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Intens_Zadatak.DataBase
{
    public class SkillOperations : ISkillOperations
    {

        public readonly IntensDbContext context;

        public SkillOperations(IntensDbContext context) 
        {
            this.context = context;
        }
        public void AddNewSkill(Skill skill)
        {
            if (skill == null) 
            {
                throw new Exception("Skill can't be null.");
            }
            context.Skills.Add(skill);
            context.SaveChanges();

        }

        public List<Skill> GetAllSkills()
        {
            List<Skill> retVal = new List<Skill>();
            retVal= this.context.Skills.ToList();
            return retVal;
        }
    }
}
