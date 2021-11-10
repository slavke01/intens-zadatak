using Intens_Zadatak.Models;
using Intens_Zadatak.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Intens_Zadatak.Web_API.Controllers
{
    [Route("api/candidate")]
    [ApiController]
    public class CandidateController : ControllerBase
    {

        private readonly ICandidateService service;
        public CandidateController(ICandidateService service)
        {
            this.service = service;
        }

        [HttpDelete("removecandidate/{candidateId}")]
        public IActionResult Removecandidate([FromRoute] int candidateId) 
        {
            try
            {
                this.service.RemoveCandidate(candidateId);
            }
            catch (Exception e)
            {
                return Problem(e.Message);
            }
            return Ok();
        }

        [HttpPatch("removeskillfromcandidate/{candidateId}/{skillId}")]
        public IActionResult RemoveSkillFromCandidate([FromRoute] int candidateId, [FromRoute] int skillId) 
        {
            try
            {
                this.service.RemoveSkillFromCandidate(candidateId, skillId);
            }
            catch (Exception e)
            {
                return Problem(e.Message);
            }
            return Ok();
        }

        [HttpPatch("addskilltocandidate/{candidateId}/{skillId}")]
        public IActionResult AddSkillToCandidate([FromRoute] int candidateId,[FromRoute] int skillId) 
        {
            try
            {
                this.service.AddSkillToCandidate(candidateId, skillId);
            }
            catch (Exception e)
            {
                return Problem(e.Message);
            }
            return Ok();
        }


        [HttpPost("addnewcandidate")]
        public IActionResult AddNewcandidate(Candidate candidate) 
        {
            try
            {
                this.service.AddNewCandidate(candidate);
            }
            catch (Exception e) 
            {
                return Problem(e.Message);
            }
            return Ok();
        }
        [HttpGet("getallcandidates")]
        public IActionResult GetAllCandidates()
        {
            List<Candidate> retVal = new List<Candidate>();

            try
            {
                retVal = this.service.GetAllCandidates();
            }
            catch (Exception e)
            {
                return Problem(e.Message);
            }
            return Ok(retVal);
        }
    }
}
