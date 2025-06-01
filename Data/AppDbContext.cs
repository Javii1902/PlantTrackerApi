using Microsoft.EntityFrameworkCore;
using PlantTrackerApi.Models;

namespace PlantTrackerApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Plant> Plants { get; set; }
    }
}