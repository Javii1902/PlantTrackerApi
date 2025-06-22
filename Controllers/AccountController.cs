using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.Data;
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
            return BadRequest(new { message = "Username or email already exists." });

        var hasher = new PasswordHasher<UserAccount>();
        user.PasswordHash = hasher.HashPassword(user, user.PasswordHash); // hash the plain password

        _context.UserAccounts.Add(user);
        await _context.SaveChangesAsync();

        return Ok(new { message = "User created successfully" });
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] PlantTrackerApi.Models.LoginRequest login)
    {
        var user = await _context.UserAccounts.FirstOrDefaultAsync(u => u.Username == login.Username);

        if (user == null)
            return Unauthorized(new { message = "Invalid username or password" });

        var hasher = new PasswordHasher<UserAccount>();
        var result = hasher.VerifyHashedPassword(user, user.PasswordHash, login.Password);

        if (result == PasswordVerificationResult.Failed)
            return Unauthorized(new { message = "Invalid username or password" });

        return Ok(new
        {
            message = "Login successful",
            userId = user.Id,
            username = user.Username
        });
    }
}
