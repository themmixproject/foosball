using foosball.Database.Models;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace foosball.Database {
    public class FoosballContext : DbContext {
        public FoosballContext() : base( "FoosballContext" ) { }

        public DbSet<Player> Players => Set<Player>();

        protected override void OnModelCreating( DbModelBuilder modelBuilder ) {
            modelBuilder.Conventions.Remove<PluralizingEntitySetNameConvention>();
        }
    }
}
