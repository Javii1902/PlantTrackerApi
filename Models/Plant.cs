// Models/Plant.cs
namespace PlantTrackerApi.Models
{
    public class Plant
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string SeedType { get; set; }
        public int? BestPlantingStartMonth { get; set; }
        public int? BestPlantingEndMonth { get; set; }
        public string? ImageUrl { get; set; }          // Nullable string
        public string? SeedImageUrl { get; set; }      // Nullable string
        public string Description { get; set; }
        public string CareInstructions { get; set; }
    }
}
