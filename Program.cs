using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers(); // Registers API controllers

var app = builder.Build();

// Middleware pipeline
app.UseRouting();
app.UseAuthorization(); // If authentication is required

// Map API controllers
app.MapControllers();

// Run the app
app.Run();