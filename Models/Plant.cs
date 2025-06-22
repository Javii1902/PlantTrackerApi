using System.Collections.Generic;

namespace PlantTrackerApi.Models
{
    public class Plant
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string SeedType { get; set; } = null!;
        public int? BestPlantingStartMonth { get; set; }
        public int? BestPlantingEndMonth { get; set; }
        public string? ImageUrl { get; set; }
        public string? SeedImageUrl { get; set; }
        public string? Description { get; set; }
        public string? CareInstructions { get; set; }

        // Navigation property for UserPlants (many-to-many via UserPlant)
        public ICollection<UserPlant> UserPlants { get; set; } = new List<UserPlant>();
    }
}
