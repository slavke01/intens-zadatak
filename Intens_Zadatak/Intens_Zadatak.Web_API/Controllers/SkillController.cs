
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
    [Route("api/skill")]
    [ApiController]
    public class SkillController : ControllerBase
    {

        public readonly ISkillService service;

        public SkillController(ISkillService service)
        {
            this.service = service;
        }

        [HttpPost("addskill")]
        public IActionResult AddSkill(Skill skill) 
        {
            try
            {
                this.service.AddNewSkill(skill);
            }
            catch(Exception e)
            {
                return Problem(e.Message);
            }
            
            return Ok();
        }

        [HttpGet("getavailableskills/{candidateId}")]
        public IActionResult GetAvailableSkills([FromRoute] int candidateId) 
        {
            List<Skill> retVal = new List<Skill>();
            try
            {
                retVal = this.service.GetAvailableSkills(candidateId);
            }
            catch (Exception e)
            {
                return Problem(e.Message);
            }

            return Ok(retVal);

        }

        [HttpGet("getallskills")]
        public IActionResult GetAllSkills()
        {
            List<Skill> retVal = new List<Skill>();
            try
            {
                retVal = this.service.GetAllSkills();
            }
            catch (Exception e) 
            {
                return Problem(e.Message);
            }

            return Ok(retVal);
        }


    }
}
