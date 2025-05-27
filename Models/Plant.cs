// Models/Plant.cs
namespace PlantTrackerApi.Models
{
    public class Plant
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string SeedType { get; set; }
        public DateTime BestPlantingTime { get; set; }
        public string ImageUrl { get; set; }            // New!
        public string SeedImageUrl { get; set; }        // New!
        public string Description { get; set; }         // New!
        public string CareInstructions { get; set; }    // New!
    }
}
