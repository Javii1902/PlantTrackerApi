using Microsoft.EntityFrameworkCore;
using PlantTrackerApi.Models;

namespace PlantTrackerApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) {}

        public DbSet<Plant> Plants { get; set; }
    }
}
 