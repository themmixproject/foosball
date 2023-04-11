namespace foosball.Database.Models {
    public class Game {
        public int GameId { get; set; }
        public ICollection<Team> Teams { get; set; }

        public Game(ICollection<Team> teams) {
            Teams = teams;
        }
    }
}
