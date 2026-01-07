using System.Net.Mail;

namespace EgyptBeatbox.Domain.Entities.Users
{
	public record EmailAddress
	{
		public string Value { get; }
		public EmailAddress(string email)
		{
			if (string.IsNullOrWhiteSpace(email))
				throw new ApplicationException("Email address cannot be empty");
			MailAddress.TryCreate(email, out var mailAddress);
			if (mailAddress is null || mailAddress.Address != email)
				throw new ApplicationException("Invalid email address format");

			Value = email;
		}
	}
}
