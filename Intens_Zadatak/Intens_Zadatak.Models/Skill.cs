using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Intens_Zadatak.Models
{
    public class Skill
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SkillId { get; set; }

        [Required]
        public string Name { get; set; }
        [JsonIgnore]
        public virtual ICollection<Candidate> Candidates { get; set; }

        public Skill() { }
    }
}
