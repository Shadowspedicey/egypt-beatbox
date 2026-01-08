using FluentResults;

namespace EgyptBeatbox.Application.Errors
{
	public static class Extensions
	{
		public static Error WithId(this Error error, string Id) => error.WithMetadata(new Dictionary<string, object>() { { "Id", Id } });
	}
}
