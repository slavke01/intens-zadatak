using Intens_Zadatak.Database_Interfaces;
using Intens_Zadatak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Intens_Zadatak.DataBase
{
    public class CandidateOperations : ICandidateOperations
    {
        public readonly IntensDbContext context;

        public CandidateOperations(IntensDbContext context) 
        {
            this.context = context;
        }
        public void AddNewCandidate(Candidate candidate)
        {
            if (candidate == null)
            {
                throw new Exception("Candidate can't be null");
            }
            context.Candidates.Add(candidate);
            context.SaveChanges();     
        }

        public void AddSkillToCandidate(int candidateId, int skillId)
        {
            Skill toadd = this.context.Skills.Find(skillId);
            if (toadd == null) 
            {
                throw new Exception("There is no skill with given ID");
            }
            Candidate candidate = this.context.Candidates.Find(candidateId);
            if (candidate == null) 
            {
                throw new Exception("There is no candidate with given ID");
            }
            context.Candidates.Attach(candidate);
            candidate.Skills.Add(toadd);
            context.SaveChanges();
            
        }

        public List<Candidate> GetAllCandidates()
        {
            List<Candidate> retval = new List<Candidate>();
            retval = this.context.Candidates.ToList();
            return retval;
        }

        public void RemoveCandidate(int candidateId)
        {
            Candidate candidate = this.context.Candidates.Find(candidateId);
            if (candidate == null)
            {
                throw new Exception("There is no candidate with given ID");
            }
            this.context.Candidates.Remove(candidate);
            this.context.SaveChanges();
        }

        public void RemoveSkillFromCandidate(int candidateId, int skillId)
        {
            Candidate candidate = this.context.Candidates.Find(candidateId);
            if (candidate == null)
            {
                throw new Exception("There is no candidate with given ID");
            }
            Skill toremove = candidate.Skills.Where(s => s.SkillId == skillId)
                                             .FirstOrDefault<Skill>();
            if (toremove == null)
            {
                throw new Exception("Candidate doesn't posses given skill. So we can't remove it");
            }

            context.Candidates.Attach(candidate);
            candidate.Skills.Remove(toremove);
            context.SaveChanges();
        }
    }
}
