namespace PlantTrackerApi.Models
{
    public class UserPlant
    {
        public int Id { get; set; }

        // Foreign keys
        public int UserId { get; set; }
        public int PlantId { get; set; }

        // Navigation properties
        public UserAccount User { get; set; } = null!;
        public Plant Plant { get; set; } = null!;
    }
}
