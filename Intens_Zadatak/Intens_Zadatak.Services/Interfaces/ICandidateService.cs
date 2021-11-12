using Intens_Zadatak.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Intens_Zadatak.Services.Interfaces
{
    public interface ICandidateService
    {
        void AddNewCandidate(Candidate candidate);
        List<Candidate> GetAllCandidates();
        void AddSkillToCandidate(int candidateId,int skillId);
        void RemoveSkillFromCandidate(int candidateId, int skillId);
        void RemoveCandidate(int candidateId);
        List<Candidate> SearchCandidates(string candidateName, string skillName);
    }
}
