namespace EgyptBeatbox.Application.Tickets
{
	public readonly record struct ViewTicketDTO(
		Guid Id,
		string Name,
		string Description,
		string Tag,
		decimal Price,
		IEnumerable<string> Perks
	);
}
