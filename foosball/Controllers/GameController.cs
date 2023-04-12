using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using foosball.Database.Models;
using foosball.Database;
using System.Data.Entity;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace foosball.Controllers {
    [Route( "api/[controller]" )]
    [ApiController]
    public class GameController : ControllerBase {

        public readonly FoosballContext foosballContext = new FoosballContext();

        // GET: api/<GameController>
        [HttpGet]
        public IEnumerable<Game> Get() {
            return foosballContext.Games.ToList();
        }

        // GET api/<GameController>/5
        //[HttpGet( "{id}" )]
        //public string Get( int id ) {
        //    return "value";
        //}

        // POST api/<GameController>
        [HttpPost]
        public IActionResult Post(List<Team> teams){
            
            foosballContext.Games.Add(new Game(teams));
            foreach(Team team in teams) {
                foreach(TeamMember member in team.Members) {
                    foosballContext.Entry<Player>(member.Player).State = EntityState.Unchanged;
                }
            }

            foosballContext.SaveChanges();
            return Ok();
        }

        // PUT api/<GameController>/5
        //[HttpPut( "{id}" )]
        //public void Put( int id, [FromBody] string value ) {
        //}

        //// DELETE api/<GameController>/5
        //[HttpDelete( "{id}" )]
        //public void Delete( int id ) {
        //}
    }
}
