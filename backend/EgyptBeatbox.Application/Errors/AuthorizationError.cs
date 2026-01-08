using FluentResults;

namespace EgyptBeatbox.Application.Errors
{
	public class AuthorizationError : Error
	{
		public AuthorizationError(string message) : base(message)
		{
			Metadata.Add("ErrorType", "Authorization");
		}
	}
}
