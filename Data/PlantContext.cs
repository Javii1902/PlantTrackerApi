// Data/PlantContext.cs
using Microsoft.EntityFrameworkCore;
using PlantTrackerApi.Models;
using System.Collections.Generic;

namespace PlantTrackerApi.Data
{
    public class PlantContext : DbContext
    {
        public PlantContext(DbContextOptions<PlantContext> options) : base(options) { }

        public DbSet<Plant> Plants { get; set; }
    }
}
