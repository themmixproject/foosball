namespace foosball.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedGameTeamandTeamMember : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Games",
                c => new
                    {
                        GameId = c.Int(nullable: false, identity: true),
                    })
                .PrimaryKey(t => t.GameId);
            
            CreateTable(
                "dbo.Teams",
                c => new
                    {
                        TeamId = c.Int(nullable: false, identity: true),
                        Game_GameId = c.Int(),
                    })
                .PrimaryKey(t => t.TeamId)
                .ForeignKey("dbo.Games", t => t.Game_GameId)
                .Index(t => t.Game_GameId);
            
            CreateTable(
                "dbo.TeamMembers",
                c => new
                    {
                        TeamMemberId = c.Int(nullable: false, identity: true),
                        Score = c.Int(nullable: false),
                        Player_PlayerId = c.Int(),
                        Team_TeamId = c.Int(),
                    })
                .PrimaryKey(t => t.TeamMemberId)
                .ForeignKey("dbo.Players", t => t.Player_PlayerId)
                .ForeignKey("dbo.Teams", t => t.Team_TeamId)
                .Index(t => t.Player_PlayerId)
                .Index(t => t.Team_TeamId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Teams", "Game_GameId", "dbo.Games");
            DropForeignKey("dbo.TeamMembers", "Team_TeamId", "dbo.Teams");
            DropForeignKey("dbo.TeamMembers", "Player_PlayerId", "dbo.Players");
            DropIndex("dbo.TeamMembers", new[] { "Team_TeamId" });
            DropIndex("dbo.TeamMembers", new[] { "Player_PlayerId" });
            DropIndex("dbo.Teams", new[] { "Game_GameId" });
            DropTable("dbo.TeamMembers");
            DropTable("dbo.Teams");
            DropTable("dbo.Games");
        }
    }
}
