using foosball.Database;
using foosball.Database.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace foosball.Controllers {
    [Route( "api/[controller]" )]
    [ApiController]
    public class TeamMemberController : ControllerBase {

        public readonly FoosballContext foosballContext = new FoosballContext();

        // GET: api/<TeamMemberController>
        [HttpGet]
        public IEnumerable<TeamMember> Get() {
            return foosballContext.TeamMembers.ToList();
        }

        // GET api/<TeamMemberController>/5
        //[HttpGet( "{id}" )]
        //public string Get( int id ) {
        //    return "value";
        //}

        //// POST api/<TeamMemberController>
        //[HttpPost]
        //public void Post( [FromBody] string value ) {
        //}

        //// PUT api/<TeamMemberController>/5
        //[HttpPut( "{id}" )]
        //public void Put( int id, [FromBody] string value ) {
        //}

        //// DELETE api/<TeamMemberController>/5
        //[HttpDelete( "{id}" )]
        //public void Delete( int id ) {
        //}
    }
}
