// Models/UserPlant.cs
namespace PlantTrackerApi.Models
{
    public class UserPlant
    {
        public int Id { get; set; }

        public int UserId { get; set; }
        public UserAccount User { get; set; } = null!;

        public int PlantId { get; set; }
        public Plant Plant { get; set; } = null!;

        public DateTime DateAdded { get; set; }
    }
}
