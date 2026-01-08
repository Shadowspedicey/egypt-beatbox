using FluentResults;

namespace EgyptBeatbox.Application.Errors
{
	public class ValidationError<T> : Error
	{
		public ValidationError(string message) : base(message)
		{
			Metadata.Add("ErrorType", "Validation");
		}
	}
}
