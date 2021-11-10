namespace Intens_Zadatak.DataBase.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class NavigationalProps : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.SkillCandidates",
                c => new
                    {
                        Skill_SkillId = c.Int(nullable: false),
                        Candidate_CandidateId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Skill_SkillId, t.Candidate_CandidateId })
                .ForeignKey("dbo.Skills", t => t.Skill_SkillId, cascadeDelete: true)
                .ForeignKey("dbo.Candidates", t => t.Candidate_CandidateId, cascadeDelete: true)
                .Index(t => t.Skill_SkillId)
                .Index(t => t.Candidate_CandidateId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.SkillCandidates", "Candidate_CandidateId", "dbo.Candidates");
            DropForeignKey("dbo.SkillCandidates", "Skill_SkillId", "dbo.Skills");
            DropIndex("dbo.SkillCandidates", new[] { "Candidate_CandidateId" });
            DropIndex("dbo.SkillCandidates", new[] { "Skill_SkillId" });
            DropTable("dbo.SkillCandidates");
        }
    }
}
