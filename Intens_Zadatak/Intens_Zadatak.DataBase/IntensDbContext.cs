using Intens_Zadatak.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Intens_Zadatak.DataBase
{
    public class IntensDbContext : DbContext
    {
        public IntensDbContext() : base("Server=localhost\\SQLEXPRESS;; Database=IntensDB;Trusted_Connection=True;MultipleActiveResultSets=True") { }
       
        public DbSet<Candidate> Candidates { get; set; }
        public DbSet<Skill> Skills { get; set; }


        
    }
}
