namespace foosball.Database.Models {
    public class TeamMember {
        public int TeamMemberId { get; set; }
        public int Score { get; set; }
        public virtual Player Player { get; set; }

        public TeamMember(Player player) {
            Player = player;
        }
    }
}
