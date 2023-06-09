﻿using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using foosball.Models;
using System.Data.Entity;
using foosball.Database;
using foosball.Database.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace foosball.Controllers {
    [ApiController]
    [Route( "api/[controller]" )]
    public class PlayerController : ControllerBase {

        public readonly FoosballContext foosballContext = new FoosballContext();

        //// GET: api/<PlayerController>
        [HttpGet]
        public IEnumerable<Player> Get() {
            return foosballContext.Players.ToList();
        }

        [HttpGet("best")] 
        public IEnumerable<Player> GetBestPlayers() {
            return foosballContext.Players.OrderByDescending(player => player.Score).Take(10).ToList();
        }

        //// GET api/<PlayerController>/5
        //[HttpGet("{id}")]
        //public string Get(int id) {
        //    return "value";
        //}

        // POST api/<PlayerController>
        [HttpPost]
        public IActionResult Post( PlayerPostItem player ) {
            if (player.Name == "") { return BadRequest(); }

            foosballContext.Players.Add( new Player( player.Name ) );
            foosballContext.SaveChanges();

            return Ok();
        }

        //// PUT api/<PlayerController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value) {
        //}

        //// DELETE api/<PlayerController>/5
        [HttpDelete( "{id}" )]
        public IActionResult Delete( int id ) {
            Player playerToDelete = foosballContext.Players.SingleOrDefault( player => player.PlayerId == id );
            if (playerToDelete == null) {
                return NotFound();
            }
            else {
                foosballContext.Players.Remove( playerToDelete );
                foosballContext.SaveChanges();
                return Ok();
            }
        }
    }
}
