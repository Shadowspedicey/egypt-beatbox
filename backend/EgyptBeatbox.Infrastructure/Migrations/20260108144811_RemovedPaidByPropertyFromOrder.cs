using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EgyptBeatbox.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class RemovedPaidByPropertyFromOrder : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PaidBy",
                table: "Orders");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PaidBy",
                table: "Orders",
                type: "character varying(11)",
                maxLength: 11,
                nullable: false,
                defaultValue: "");
        }
    }
}
