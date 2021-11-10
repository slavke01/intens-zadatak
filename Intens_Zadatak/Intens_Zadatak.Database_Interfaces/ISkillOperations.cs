using Intens_Zadatak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Intens_Zadatak.Database_Interfaces
{
    public interface ISkillOperations
    {

        List<Skill> GetAllSkills();

        void AddNewSkill(Skill skill);
    }
}
