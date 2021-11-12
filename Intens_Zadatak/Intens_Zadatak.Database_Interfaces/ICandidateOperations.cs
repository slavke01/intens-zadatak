using Intens_Zadatak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Intens_Zadatak.Database_Interfaces
{
    public interface ICandidateOperations
    {
        List<Candidate> GetAllCandidates();
        void AddNewCandidate(Candidate candidate);
        void RemoveCandidate(int candidateId);
        void AddSkillToCandidate(int candidateId,int skillId);
        void RemoveSkillFromCandidate(int candidateId, int skillId);

        List<Candidate> SearchCandidates(string candidateName,string skillName);
    }
}
