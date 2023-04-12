namespace foosball.Database.Models {
    public class Game {
        public int GameId { get; set; }
        public virtual ICollection<Team> Teams { get; set; }

        public Game(ICollection<Team> teams) {
            Teams = teams;
        }

        public Game() {}
    }
}
