using System;
using System.Collections.Generic;

namespace foosball.Database.Models
{
    public class Player
    {
        public int PlayerId { get; set; }
        public string Name { get; set; }
        public int Score { get; set; }

        public Player(string name)
        {
            Name = name;
        }
        public Player() {
            Name = string.Empty;
        }
    }
}
