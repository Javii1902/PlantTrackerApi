using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PlantTrackerApi.Data;
using PlantTrackerApi.Models;

[ApiController]
[Route("api/[controller]")]
public class PlantsController : ControllerBase
{
    private readonly AppDbContext _context;

    public PlantsController(AppDbContext context)
    {
        _context = context ?? throw new ArgumentNullException(nameof(context));
    }

    [HttpGet]
    public async Task<IActionResult> GetPlants()
    {
        var plants = await _context.Plants.ToListAsync();
        return Ok(plants);
    }

    [HttpGet("user/{userId}/plants")]
    public async Task<ActionResult<IEnumerable<Plant>>> GetUserPlants(int userId)
    {
        var plants = await _context.UserPlants
            .Where(up => up.UserId == userId)
            .Select(up => up.Plant)
            .ToListAsync();

        return Ok(plants);
    }

    [HttpPost("user/{userId}/add")]
    public async Task<IActionResult> AddUserPlant(int userId, [FromBody] int plantId)
    {
        var user = await _context.UserAccounts.FindAsync(userId);
        var plant = await _context.Plants.FindAsync(plantId);

        if (user == null || plant == null)
            return NotFound();

        var userPlant = new UserPlant
        {
            UserId = userId,
            PlantId = plantId
        };

        _context.UserPlants.Add(userPlant);
        await _context.SaveChangesAsync();

        return Ok(new { message = "Plant added to user" });
    }


}