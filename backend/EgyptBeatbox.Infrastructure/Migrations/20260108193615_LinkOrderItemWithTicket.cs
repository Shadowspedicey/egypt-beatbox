using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EgyptBeatbox.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class LinkOrderItemWithTicket : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderItems_Tickets_TicketId1",
                table: "OrderItems");

            migrationBuilder.DropIndex(
                name: "IX_OrderItems_TicketId1",
                table: "OrderItems");

            migrationBuilder.DropColumn(
                name: "TicketId1",
                table: "OrderItems");

            migrationBuilder.AddColumn<Guid>(
                name: "TicketId",
                table: "OrderItems",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_OrderItems_TicketId",
                table: "OrderItems",
                column: "TicketId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderItems_Tickets_TicketId",
                table: "OrderItems",
                column: "TicketId",
                principalTable: "Tickets",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderItems_Tickets_TicketId",
                table: "OrderItems");

            migrationBuilder.DropIndex(
                name: "IX_OrderItems_TicketId",
                table: "OrderItems");

            migrationBuilder.DropColumn(
                name: "TicketId",
                table: "OrderItems");

            migrationBuilder.AddColumn<Guid>(
                name: "TicketId1",
                table: "OrderItems",
                type: "uuid",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_OrderItems_TicketId1",
                table: "OrderItems",
                column: "TicketId1");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderItems_Tickets_TicketId1",
                table: "OrderItems",
                column: "TicketId1",
                principalTable: "Tickets",
                principalColumn: "Id");
        }
    }
}
