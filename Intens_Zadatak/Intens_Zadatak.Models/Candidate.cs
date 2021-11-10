using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Intens_Zadatak.Models
{
    public class Candidate
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CandidateId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public DateTime DateOfBirth { get; set; }

        [Required]
        public string ContactNumber { get; set; }

        [Required]
        public string EMail { get; set; }

        public virtual ICollection<Skill> Skills { get; set; }

        public Candidate() { }
        public Candidate(string name,DateTime dateofbirth,string number,string email) 
        {
            Name = name;
            DateOfBirth = dateofbirth;
            ContactNumber = number;
            EMail = email;
        }

    }
}
