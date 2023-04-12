namespace foosball.Database.Models {
    public class Team {
        public int TeamId { get; set; }
        public virtual ICollection<TeamMember> Members { get; set; }
        public Team(ICollection<TeamMember> members) {
            Members = members;
        }

        public Team() { }
    }
}
