using FluentResults;

namespace EgyptBeatbox.Application.Errors
{
	public class NotFoundError<T> : Error
	{
		public NotFoundError(string message) : base(message)
		{
			Metadata.Add("ErrorType", "NotFound");
		}
	}
}
