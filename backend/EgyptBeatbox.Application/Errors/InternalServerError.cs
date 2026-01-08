using FluentResults;

namespace EgyptBeatbox.Application.Errors
{
	public class InternalServerError : Error
	{
		public InternalServerError(string message) : base(message)
		{
			Metadata.Add("ErrorType", "InternalServer");
		}
	}
}
