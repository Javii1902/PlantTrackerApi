using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PlantTrackerApi.Migrations
{
    /// <inheritdoc />
    public partial class AddBestPlantingDateRange : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "BestPlantingTime",
                table: "Plants",
                newName: "BestPlantingStart");

            migrationBuilder.AddColumn<DateTime>(
                name: "BestPlantingEnd",
                table: "Plants",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BestPlantingEnd",
                table: "Plants");

            migrationBuilder.RenameColumn(
                name: "BestPlantingStart",
                table: "Plants",
                newName: "BestPlantingTime");
        }
    }
}
