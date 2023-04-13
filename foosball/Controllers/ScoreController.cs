using foosball.Database;
using Microsoft.AspNetCore.Mvc;
using foosball.Database.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace foosball.Controllers {
    [Route( "api/[controller]" )]
    [ApiController]
    public class ScoreController : ControllerBase {
        public readonly FoosballContext foosballContext = new FoosballContext();

        // PUT api/<ScoreController>/5
        [HttpPut( "increase/{teamId}/memberId" )]
        public IActionResult IncreaseScore( int teamId, int memberId ) {
            Team team = foosballContext.Teams.SingleOrDefault( team => team.TeamId == teamId );
            TeamMember teamMember = foosballContext.TeamMembers.SingleOrDefault( teamMember => teamMember.TeamMemberId == memberId );
            if (teamMember == null || team == null) {
                return NotFound();
            }
            else {
                team.Score = teamMember.Score + 1;
                teamMember.Score = teamMember.Score + 1;
                teamMember.Player.Score = teamMember.Player.Score + 1;
                foosballContext.SaveChanges();
                return Ok();
            }
        }
    }
}
