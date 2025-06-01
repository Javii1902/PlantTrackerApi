using Microsoft.EntityFrameworkCore;
using PlantTrackerApi.Models;

namespace PlantTrackerApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Plant> Plants { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=tcp:notadachshund.database.windows.net,1433;Database=PlantAPIDB;User ID=NotaDachshund@notadachshund;Password=Ducky4868415351!!>;Encrypt=True;TrustServerCertificate=False;");
            }
        }
    }
}