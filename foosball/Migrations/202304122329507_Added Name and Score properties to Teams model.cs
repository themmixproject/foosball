namespace foosball.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedNameandScorepropertiestoTeamsmodel : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Teams", "Name", c => c.String());
            AddColumn("dbo.Teams", "Score", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Teams", "Score");
            DropColumn("dbo.Teams", "Name");
        }
    }
}
