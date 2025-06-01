using Microsoft.AspNetCore.Mvc;
using PlantTrackerApi.Data;
using PlantTrackerApi.Models;

namespace PlantTrackerApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PlantsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PlantsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetPlants()
        {
            var plants = _context.Plants.ToList();
            return Ok(plants);
        }

        [HttpPost]
        public IActionResult AddPlant([FromBody] Plant plant)
        {
            _context.Plants.Add(plant);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetPlants), new { id = plant.Id }, plant);
        }
    }
}
