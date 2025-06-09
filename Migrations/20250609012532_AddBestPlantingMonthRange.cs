using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PlantTrackerApi.Migrations
{
    /// <inheritdoc />
    public partial class AddBestPlantingMonthRange : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BestPlantingEnd",
                table: "Plants");

            migrationBuilder.DropColumn(
                name: "BestPlantingStart",
                table: "Plants");

            migrationBuilder.AddColumn<int>(
                name: "BestPlantingEndMonth",
                table: "Plants",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "BestPlantingStartMonth",
                table: "Plants",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BestPlantingEndMonth",
                table: "Plants");

            migrationBuilder.DropColumn(
                name: "BestPlantingStartMonth",
                table: "Plants");

            migrationBuilder.AddColumn<DateTime>(
                name: "BestPlantingEnd",
                table: "Plants",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "BestPlantingStart",
                table: "Plants",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
