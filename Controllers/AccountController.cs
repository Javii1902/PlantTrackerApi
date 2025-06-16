using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PlantTrackerApi.Data;
using PlantTrackerApi.Models;

[ApiController]
[Route("api/[controller]")]
public class AccountController : ControllerBase
{
    private readonly AppDbContext _context;

    public AccountController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] UserAccount user)
    {
        if (await _context.UserAccounts.AnyAsync(u => u.Username == user.Username || u.Email == user.Email))
            return BadRequest("Username or email already exists.");

        // NOTE: Replace with secure password hashing in production
        user.PasswordHash = user.PasswordHash;

        _context.UserAccounts.Add(user);
        await _context.SaveChangesAsync();

        return Ok(new { message = "User created successfully" });
    }
}
