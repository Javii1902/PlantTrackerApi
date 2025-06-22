using System.Collections.Generic;

namespace PlantTrackerApi.Models
{
    public class UserAccount
    {
        public int Id { get; set; }
        public string Username { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string PasswordHash { get; set; } = null!;

        // Navigation property for UserPlants (many-to-many via UserPlant)
        public ICollection<UserPlant> UserPlants { get; set; } = new List<UserPlant>();
    }
}
