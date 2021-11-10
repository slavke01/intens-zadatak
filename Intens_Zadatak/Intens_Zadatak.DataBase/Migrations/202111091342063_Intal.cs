namespace Intens_Zadatak.DataBase.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Intal : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Candidates",
                c => new
                    {
                        CandidateId = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                        DateOfBirth = c.DateTime(nullable: false),
                        ContactNumber = c.String(nullable: false),
                        EMail = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.CandidateId);
            
            CreateTable(
                "dbo.Skills",
                c => new
                    {
                        SkillId = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.SkillId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Skills");
            DropTable("dbo.Candidates");
        }
    }
}
