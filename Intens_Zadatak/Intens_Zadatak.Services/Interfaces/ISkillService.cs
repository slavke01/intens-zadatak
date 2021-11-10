using Intens_Zadatak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Intens_Zadatak.Services.Interfaces
{
    public interface ISkillService
    {

        void AddNewSkill(Skill skill);
        List<Skill> GetAllSkills();
    }
}
