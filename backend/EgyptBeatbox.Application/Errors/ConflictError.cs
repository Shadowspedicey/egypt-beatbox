using FluentResults;

namespace EgyptBeatbox.Application.Errors
{
	public class ConflictError<T> : Error
	{
		public ConflictError(string message) : base(message)
		{
			Metadata.Add("ErrorType", "Conflict");
		}
	}
}
