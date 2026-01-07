using System.Text.RegularExpressions;

namespace EgyptBeatbox.Domain.Shared
{
	public record PhoneNumber
	{
		public string Number { get; }
		public PhoneNumber(string number)
		{
			if (string.IsNullOrWhiteSpace(number))
				throw new ApplicationException("Phone number cannot be empty");
			var cleanedNumber = Regex.Replace(number, @"\s+", "");
			if (!Regex.IsMatch(cleanedNumber, @"^01[0125][0-9]{8}$"))
				throw new ApplicationException("Invalid Egyptian phone number format");

			Number = cleanedNumber;
		}
	}
}
