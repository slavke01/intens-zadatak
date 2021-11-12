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
    public class CandidateService : ICandidateService
    {

        private readonly ICandidateOperations operations;

        public CandidateService(ICandidateOperations operations) 
        {
            this.operations = operations;
        }

        public void AddNewCandidate(Candidate candidate)
        {
            this.operations.AddNewCandidate(candidate);
        }

        public void AddSkillToCandidate(int candidateId, int skillId)
        {
            if (candidateId <=0) 
            {
                throw new Exception("Wrong candidate ID. Must be a positive number.");
            }
            if (skillId <=0)
            {
                throw new Exception("Wrong skill ID. Must be a positive number.");
            }

            this.operations.AddSkillToCandidate(candidateId, skillId);
        }

        public List<Candidate> GetAllCandidates()
        {
            List<Candidate> retVal=this.operations.GetAllCandidates();
            return retVal;
        }

        public void RemoveCandidate(int candidateId)
        {
            if (candidateId <= 0)
            {
                throw new Exception("Wrong candidate ID. Must be a positive number.");
            }

            this.operations.RemoveCandidate(candidateId);
        }

        public void RemoveSkillFromCandidate(int candidateId, int skillId)
        {
            if (candidateId <= 0)
            {
                throw new Exception("Wrong candidate ID. Must be a positive number.");
            }
            if (skillId <= 0)
            {
                throw new Exception("Wrong skill ID. Must be a positive number.");
            }

            this.operations.RemoveSkillFromCandidate(candidateId, skillId);
        }

        public List<Candidate> SearchCandidates(string candidateName, string skillName)
        {
            return this.operations.SearchCandidates(candidateName, skillName);
        }
    }
}
